import {  useReducer} from 'react';
import CartContext from './cart-context';

const defaultCart = {
    items:[],
    totalAmount :0
}
const cartReducer = (state, action) => {
    if (action.Type === "Add") {
        const totalAmountUpdate = state.totalAmount + action.Value.price * action.Value.amount;
        const existingItemIndex = state.items.findIndex(item => item.id === action.Value.id);
        const existCartItem = state.items[existingItemIndex];
        let itemsUpdate;
        if (existCartItem) {
            const updatedItem = { ...existCartItem, amount: existCartItem.amount + action.Value.amount };
            itemsUpdate = [...state.items ] ;
            itemsUpdate[existingItemIndex] = updatedItem;
        } else {
            itemsUpdate = state.items.concat(action.Value);
        }
        return {
            items: itemsUpdate,
            totalAmount: totalAmountUpdate
        }
    }

    if (action.Type === "Delete") {
        const existingItemIndex = state.items.findIndex(item => item.id === action.Value);
        const existingItem = state.items[existingItemIndex];
        const totalAmountUpdate = state.totalAmount - existingItem.price;
        let itemsUpdate;
        //if existingItem.amount>1
        if (existingItem.amount > 1) {
            const updateItem = { ...existingItem, amount: existingItem.amount - 1 };
            itemsUpdate = [...state.items]
            itemsUpdate[existingItemIndex] = updateItem;
            console.log('a')
            return {
                items: itemsUpdate,
                totalAmount: totalAmountUpdate
            }
        } else if (existingItem.amount === 1) {
            //if existingItem.amount === 1
            itemsUpdate = state.items.filter(item => item.id !== action.Value);
            return {
                items: itemsUpdate,
                totalAmount: totalAmountUpdate
            }
        }
        
    }
    return defaultCart;
}

 const CartContextProvider = (props) => {
     const [cartState, dispatchActionCart] = useReducer(cartReducer, defaultCart);

     const onAddItemHandler = (cart) => {
         dispatchActionCart({
             Type: 'Add',
             Value: cart
         });
    }
    const onRemoveItemHandler = (id) => {
        dispatchActionCart({
            Type: 'Delete',
            Value: id
        })
    }

     const cartContext = {
         itemCart: cartState.items,
         totalAmount: cartState.totalAmount,
         addItem:onAddItemHandler,
         removeItem:onRemoveItemHandler
     }

    return <CartContext.Provider value={cartContext} >
        {props.children}
    </CartContext.Provider>
}

export default CartContextProvider;
