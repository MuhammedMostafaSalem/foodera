import baseURL from "../api/baseURL";

const useUpdateData = async (url, params) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    }
    const res = await baseURL.put(url, params, config);
    return res;
}

export default useUpdateData;
