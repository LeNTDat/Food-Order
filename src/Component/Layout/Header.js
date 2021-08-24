import React from 'react';
import classes from './Header.module.css';
import img from '../../Assets/meals.jpg';
import CartButton from './HeaderCartButton';
const Header = (props) => {
    return (
        <div >
            <div className={classes.header}>
                <div><h1>ReactMeal</h1></div>
                <div>
                    <CartButton onOpenCart={props.onOpenCart}/>
                </div>
            </div>
            <div className={classes['main-image']}>
                <img src={img} alt="header"></img>
            </div>

        </div>
    );
}

export default Header;