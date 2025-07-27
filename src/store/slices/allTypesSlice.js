import { createSlice } from "@reduxjs/toolkit"
import { CreateNewType, GetAllTypes, GetOneType, UpdateOneType } from "../thunkApi/storeTypesThunk";

const initialState = {
    types: [],
    oneType: {},
    addNewType: {},
    updateType: [],
    success: false,
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

        builder
            .addCase(UpdateOneType.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(UpdateOneType.fulfilled, (state, action) => {
                state.loading = false;
                state.updateType = action.payload;
                state.success = true;
            })
            .addCase(UpdateOneType.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            });

        builder
            .addCase(CreateNewType.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(CreateNewType.fulfilled, (state, action) => {
                state.loading = false;
                state.addNewType = action.payload;
                state.success = true;
            })
            .addCase(CreateNewType.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            });
    }
})

export default allTypesSlice.reducer;
