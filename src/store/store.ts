import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { categoriesSlice } from './categories';

export const slices = combineSlices(categoriesSlice);

export const makeStore = () => configureStore({
  reducer: slices,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']