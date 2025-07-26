import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetOneType } from "../store/thunkApi/storeTypesThunk";

const getOnetypeHook = (id) => {
    const dispatch = useDispatch();
    const { oneType } = useSelector((state) => state.storeTypes);

    useEffect(() => {
        dispatch(GetOneType(id));
    }, [id]);

    let itemType = [];
    try {
        if(oneType.Data) {
            itemType = oneType.Data;
        }
        else {
            itemType = []
        }
    } catch(e) {}

    return [itemType]
}

export default getOnetypeHook
