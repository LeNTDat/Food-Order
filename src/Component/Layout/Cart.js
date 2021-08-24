import { useContext, useState } from 'react';
import CartContext from '../store/cart-context';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import OrderForm from './OrderForm';
const Cart = (props) => {
    const [isOrder, setIsOrder] = useState(false)
    const ctx = useContext(CartContext);
    const cartItemRemoveHandler = (id) => {
        ctx.removeItem(id);
    }
    const cartItemAddHandler = (cart) => {
        ctx.addItem({ ...cart, amount: 1 });
    }
    const cartItem = ctx.itemCart.map((item) =>
        <CartItem
            onClose={props.onClose}
            name={item.name}
            amount={item.amount}
            price={item.price}
            key={item.id}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
        ></CartItem>
    );

    const cartHasItems = ctx.itemCart.length !== 0;
    const orderHandler = () => {
        setIsOrder(!isOrder);
    }
    const modalOrder = !isOrder&&<div className={classes.actions}>
        <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
        {cartHasItems && <button onClick={orderHandler} className={classes.button}>Order</button>}
    </div>;

    return <div>
        {cartItem}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{ctx.totalAmount.toFixed(2)}$</span>
        </div>
        {isOrder && <OrderForm onClose={orderHandler} />}
        {modalOrder}
    </div>
}

export default Cart;