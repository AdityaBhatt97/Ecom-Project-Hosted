import axios from "axios";
import {loginStart ,loginSuccess, loginFailure ,logout} from "./Redux/UserRedux";

 const loginUser = async(dispatch , user) => {
    dispatch(loginStart());
    try{
        const res = await axios.post('https://ecom-project-tctc.onrender.com/api/auth/login' , user);
        sessionStorage.setItem('userDetails' , JSON.stringify(res.data))
        dispatch(loginSuccess(res.data))

    }catch{
          dispatch(loginFailure())
    }
 }

 


 export default loginUser
