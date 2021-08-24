import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import classes from './OrderForm.module.css';

const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    tel: yup.string().length(10).required(),
    addre: yup.string().required()
})

const OrderForm = (props) => {
    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });
    const submitHandler = (data) => {
        console.log(data);
    }

    return (
        <>
            <h1>Submit Your Food</h1>
            <form className={classes.form} onSubmit={handleSubmit(submitHandler)}>
                <div className={classes.control}>
                    <label htmlFor="firstname">Your First Name</label>
                    <input type="text" id="firstname" {...register("firstname")} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="lastname">Your Last Name</label>
                    <input type="text" id="lastname" {...register("lastname")} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="tel">Your Phone</label>
                    <input type="tel" id="tel" {...register("tel")} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="addre">Your address</label>
                    <input type="text" id="addre" {...register("addre")} />
                </div>
                <div className={classes.actions}>
                    <button onClick={props.onClose} type="button" className={classes.submit}>Cancel</button>
                    <button type="submit" className={classes.submit}>Submit</button>
                </div>
            </form>
        </>
    );
}

export default OrderForm;