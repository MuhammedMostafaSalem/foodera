import { createSlice } from "@reduxjs/toolkit"
import { GetAllTypes, GetOneType } from "../thunkApi/storeTypesThunk";

const initialState = {
    types: [],
    oneType: {},
    loading: false,
    error: null,
}

const allTypesSlice = createSlice({
    name: "storeTypes",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(GetAllTypes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(GetAllTypes.fulfilled, (state, action) => {
                state.loading = false;
                state.types = action.payload;
            })
            .addCase(GetAllTypes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        
        builder
            .addCase(GetOneType.pending, (state) => {
                state.error = null;
            })
            .addCase(GetOneType.fulfilled, (state, action) => {
                state.oneType = action.payload;
            })
            .addCase(GetOneType.rejected, (state, action) => {
                state.error = action.payload;
            });
    }
})

export default allTypesSlice.reducer;
