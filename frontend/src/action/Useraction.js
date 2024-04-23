import {
    REGISTER_USER_FAILED,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_REQUEST,
    CLEAR_ERROR,

} from "../constants/Userconstants";
import axios from 'axios';

//register
export const register  =(userData)=>async(dispatch)=>{
    try {
        dispatch({ type: REGISTER_USER_REQUEST });
    
        const config = { headers: { "Content-Type": "multipart/form-data" } };
    
        const { data } = await axios.post(`/api/user/register`, userData, config);
    
        dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
      } catch (error) {
        dispatch({
          type: REGISTER_USER_FAILED,
          payload: error.response.data.message,
        });
      }

}
//clearerror
export const clearError=()=>async(dispatch)=>{
    dispatch({
        type:CLEAR_ERROR,

    })
}