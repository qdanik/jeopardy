import { createSlice } from '@reduxjs/toolkit';
import { CategoriesState } from './categories.types';
import categories from './categories.json'

const initialState: CategoriesState = {
  categories: categories
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload
    },
  },
  selectors: {
    selectCategories: (state) => state.categories,
    selectCategoryById: (state, id: number) => state.categories.find((category) => category.id === id),
  }
})

export const { setCategories } = categoriesSlice.actions

export const { selectCategories, selectCategoryById } = categoriesSlice.selectors