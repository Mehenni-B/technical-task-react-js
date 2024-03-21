import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "../../../store";
import { MealViewModel } from "../../../view-models/_index";
import { Meal } from "./_index";
import { MealType } from "../../../models/Meal";

const MealsSection: React.FC = () => {
    const getMeals = (new MealViewModel).getMeals;
    const meals = useSelector((state: RootState) => state.meal.list);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const initMeals = async () => {
            setIsLoading(true);
            await getMeals();
            setIsLoading(false);
        }
        initMeals();
    }, [])

    return (
        <>
            <h1>Meals Section</h1>
            {isLoading && <p>Loading...</p>}
            {meals && meals.map((meal: MealType, index: number) => <Meal key={index} meal={meal} />)}
        </>
    );
}

export default MealsSection;