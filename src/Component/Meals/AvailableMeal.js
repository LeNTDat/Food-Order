import { useEffect, useState } from 'react';
import MealItems from './MealItems';
import classes from './AvailableMeal.module.css';
import Card from '../UI/Card';
const AvailableMeal = () => {
    const [meal, setMeal] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const fetchData = async() => {
        try {
            setIsLoading(true);
            const response = await fetch('https://food-project-413e2-default-rtdb.asia-southeast1.firebasedatabase.app/food.json');
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            const data = await response.json();
            setMeal(data);
            setIsLoading(false);
        }catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, []);
    const listMeal = meal.map(meals => <li key={meals.id}>
        < MealItems meal={meals}  />
    </li>)

    return <div className={classes.meals}>
        <Card>
            <ul>
                {!isLoading && listMeal}
                {isLoading && <p>Loading ...</p>}
            </ul>
        </Card>
    </div>
}

export default AvailableMeal;
