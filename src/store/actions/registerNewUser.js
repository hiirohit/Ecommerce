import api from "../../api/api";

export const  registerNewUser = (sendData, toast, reset, navigate, setLoader) => async (dispatch) => {
    try {
        setLoader(true);
        console.log("loader click")
        const {data} = await api.post("/auth/signup",sendData);
        reset();
        toast.success(data?.message || "User Registered Successfully");
        navigate("/login")
    } catch (error) {
        console.log(error)
        toast.error(error?.response?.data?.message || "Internal Server error")
    } finally{
        setLoader(false);
    }
}