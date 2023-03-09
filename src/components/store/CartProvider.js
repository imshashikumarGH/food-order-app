import { useReducer } from "react";
import CartContext from "./Cart-Context";

//intal state
const defualtCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateItems = state.items.concat(action.item);
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updateItems,
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
    dispatchCart({ type: "REMOVE", id: id });
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
