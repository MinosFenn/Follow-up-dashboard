import { actionTypes } from "react-redux-firebase";
import { toast  } from "react-toastify";
const authReducer = (state={}, action) => {
    switch(action.type){
        case "SIGN_IN":
            toast("Welcome back..");
            return state;
            case "SIGN_IN_ERR":
                toast.error("SignIn Error")
              return state;
              case "SIGN_OUT":
                toast("you signed out..");
            return state;
              case "SIGN_UP":
                toast("Welcome!");
                return state;
                case "SIGN_UP_ERR":
                    toast.error("Sign up Error")
                  return state;
           
            default: 
            return state;

    }
}

export default authReducer;