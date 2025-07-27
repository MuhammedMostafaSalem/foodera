import baseURL from "../api/baseURL";

const useCreateData = async (url, params) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    }
    const res = await baseURL.post(url, params, config);
    return res;
}

export default useCreateData
