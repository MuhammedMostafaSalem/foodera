import { createAsyncThunk } from "@reduxjs/toolkit";
import useGetData from "../../hook/useGetData";
import useUpdateData from "../../hook/useUpdateData";
import useCreateData from "../../hook/useCreateData";

export const GetAllTypes = createAsyncThunk(
    "storeTypes/getAllTypes",
    async (_, thunkAPI) => {
        try {
            const res = await useGetData("/api/StoreTypes/GetAllTypes");
            return res.data; // assuming response format: { data: [...] }
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || "حدث خطأ");
        }
    }
);

export const GetOneType = createAsyncThunk(
    "storeTypes/getOneTypes",
    async (id, thunkAPI) => {
        try {
            const res = await useGetData(`/api/StoreTypes/GetStoreTypeById/${id}`);
            return res.data; // assuming response format: { data: [...] }
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || "حدث خطأ");
        }
    }
);

export const UpdateOneType = createAsyncThunk(
    "storeTypes/UpdateOneType",
    async ({ id, formData }, thunkAPI) => {
        try {
            const res = await useUpdateData(`/api/StoreTypes/UpdateStoreType/${id}`, formData);
            return res.data; // assuming response format: { data: [...] }
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || "حدث خطأ أثناء التعديل");
        }
    }
);

export const CreateNewType = createAsyncThunk(
    "storeTypes/CreateNewType",
    async (body, thunkAPI) => {
        try {
            const res = await useCreateData(`/api/StoreTypes/CreateStoreType`, body);
            return res.data; // assuming response format: { data: [...] }
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || "حدث خطأ أثناء التعديل");
        }
    }
);