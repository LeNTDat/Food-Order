import { useContext } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';
import CartContext from '../store/cart-context';
const HeaderCartButton = (props) => {
    const ctx = useContext(CartContext);
    const numberOfItems = ctx.itemCart.reduce((currtValue, item) => {
        return currtValue + item.amount ;
    }, 0);

    return <div className={classes.button} onClick={props.onOpenCart}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>My Cart</span>
        <span className={classes.badge}>{numberOfItems}</span>
    </div>
}

export default HeaderCartButton;