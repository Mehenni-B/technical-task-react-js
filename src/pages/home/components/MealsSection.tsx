import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "../../../store";
import { MealViewModel } from "../../../view-models/_index";
import { MealCard } from "./_index";
import { MealType } from "../../../models/Meal";
import { Center, Grid, GridItem, Heading, Spinner } from "@chakra-ui/react";

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
            <Center my={10}>
                <Heading>Menu</Heading>
            </Center>
            {
                isLoading &&
                <Center my={20}>
                    <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
                </Center>
            }

            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' }} gap={6}>
                {meals && meals.map((meal: MealType, index: number) =>
                    <GridItem>
                        <MealCard key={index} meal={meal} />
                    </GridItem>
                )}
            </Grid>


        </>
    );
}

export default MealsSection;
