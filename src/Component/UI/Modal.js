import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import classes from './Modal.module.css';
import Cart from '../Layout/Cart';
const Modal = (props) => {
    const BackDrop = (props) => {
        return <div className={classes.backdrop} onClick={props.onClose}></div>
    }
    const ModalCart = (props) => {
        return <div className={classes.modal}>
            <Card>
                <Cart onClose={props.onClose}/>
            </Card>
        </div>
    }
    return <React.Fragment>
        {ReactDOM.createPortal(<ModalCart onClose={props.onCloseCart}/>, document.getElementById('modalpopup'))}
        {ReactDOM.createPortal(<BackDrop onClose={props.onCloseCart }/>, document.getElementById('backdrop'))}
    </React.Fragment>
}

export default Modal;