import classes from './Input.module.css'

const Input = (props) => {
    return <div className={classes.input}>
        <label htmlFor={props.id}>Amount</label>
        <input type='number' {...props.input} ></input>
    </div>
}

export default Input;