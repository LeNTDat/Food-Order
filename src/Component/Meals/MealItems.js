import {useContext } from 'react';
import classes from './MealsItems.module.css';
import MealForm from './MealForm';
import CartContext from '../store/cart-context';
const MealItems = (props) => {
    const ctxCart = useContext(CartContext);
    const {id, name, price, description }  = props.meal;
    const onAddCartHandler = (amount) => {
        const cartItem = {
            id: id,
            name: name,
            price: price,
            amount:amount
        }
        ctxCart.addItem(cartItem);
    }

    return <div className={classes.meal}>
        <div>
            <h3>{name}</h3>
            <div className={classes.description}>{description }</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealForm id={id} onAddAmount={onAddCartHandler} />
        </div>
    </div>
}
export default MealItems;