import { configureStore } from "@reduxjs/toolkit";
import allTypesSlice from './slices/allTypesSlice';

export const store = configureStore({
    reducer: {
        storeTypes: allTypesSlice,
    },
})