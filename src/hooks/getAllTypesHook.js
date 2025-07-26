import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllTypes } from "../store/thunkApi/storeTypesThunk";

const getAllTypesHook = () => {
    const dispatch = useDispatch();
    const { types, loading, error } = useSelector((state) => state.storeTypes);
    
    const fetchData = useCallback(() => {
        dispatch(GetAllTypes());
    }, [dispatch]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    let itemsAlltypes = [];
    try {
        if(types.Data) {
            itemsAlltypes = types.Data;
        }
        else {
            itemsAlltypes = []
        }
    } catch(e) {}

    return [itemsAlltypes, loading, error]
}

export default getAllTypesHook
