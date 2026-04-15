export const LogOutUser = (navigate) => (dispatch) => {
    dispatch({type:"LOG_OUT"});
    localStorage.removeItem("auth");
    navigate("/login");
};