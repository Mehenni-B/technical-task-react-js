import { useDispatch } from "react-redux";
import { Meal } from "../models/_index";
import { mealActions } from "../store/slices/meal-slice";

class MealViewModel {

    dispatch = useDispatch();

    public getMeals = async () => {
        const response = await Meal.getMeals();
        if (response.status === 200)
            this.dispatch(mealActions.updateList(response.data.data));
    }
}

export default MealViewModel;