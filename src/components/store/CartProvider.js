import { useReducer } from "react";
import CartContext from "./Cart-Context";

//intal state
const defualtCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updateItems;
    //for existing Item
    if (existingCartItem) {
      let updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updateItems = [...state.items];
      updateItems[existingCartItemIndex] = updatedItem;
    } else {
      //for non existing item
      updateItems = state.items.concat(action.item);
    }

    return {
      items: updateItems,
      totalAmount: newTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    if (existingCartItem) {
      let updatedItem;
      if (existingCartItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.item.id);
      } else {
        updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
    }
    const newTotalAmount =
      state.totalAmount - action.item.amount * action.item.price;

    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }
  return defualtCartState;
};

//to manage the cartContext using useReducer or useContext
const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defualtCartState);

  const addItemToCartHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };

  const removeItemfromCartHandler = (id) => {
    dispatchCart({ type: "REMOVE", item: id });
  };

  //the value which will be update over time
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemfromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
