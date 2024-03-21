import HttpClient from '../services/HttpClient'

type MealType = {
    id: number;
    name: string;
    category: string;
    area: string;
    instructions: string;
    image: string;
}

class Meal {

    public static getMeals = async () => {
        return HttpClient.get('/meals');
    }
}

export { type MealType };

export default Meal;