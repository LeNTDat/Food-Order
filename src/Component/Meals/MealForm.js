import { useRef } from 'react';

import Input from '../UI/Input';
import classes from './MealForm.module.css'
const MealForm = (props) => {
    const countRef = useRef();
    const onAddCartHandler = () => {
        props.onAddAmount(+countRef.current.value);
    }

    return <div className={classes.form}>
        <div>
            <Input
                input={{
                    ref: countRef,
                    id: props.id,
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue:1
                }}
            />
            <button onClick={onAddCartHandler}>+Add</button>
       </div>
    </div>
}

export default MealForm;