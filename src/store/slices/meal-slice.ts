import { createSlice } from '@reduxjs/toolkit';
import { MealType } from '../../models/Meal';

type SliceState = { list: MealType[] | null };

const initialState: SliceState = { list: null }

const mealSlice = createSlice({
  name: 'meal',
  initialState,
  reducers: {
    updateList(state, action) {
      state.list = action.payload;
    }
  },
});

export const mealActions = mealSlice.actions;
export default mealSlice.reducer;