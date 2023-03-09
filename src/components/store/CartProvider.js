import CartContext from "./Cart-Context"

//to manage the cartContext using useReducer or useContext  
const CartProvider = (props) =>{

    const addItemToCartHandler = id =>{}

    const removeItemfromCartHandler = id =>{}

    //the value which will be update over time
    const cartContext = {
        item: [],
        totalAmount : 0,
        addItem : addItemToCartHandler,
        removeItem : removeItemfromCartHandler
    }

    return (
        <CartContext.Provider value = {cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;