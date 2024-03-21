import { MealType } from "../../../models/Meal";

const MealPage: React.FC<{meal : MealType}> = (props) => {

    return (
        <div>
            <h1>MealPage</h1>
            <h2>{props.meal.name}</h2>
            <img src={props.meal.image} alt={props.meal.name} />
        </div>
    );
}

export default MealPage;