
import { SIGNIN_FAILURE, SIGNIN_SUCCESS,SIGNIN_REQUEST} from "./action";
const initState={
    auth:false,
    token:""
}

export const authReducer=(state=initState,action)=>{
    switch(action.type){
        case SIGNIN_REQUEST:return{auth:false,token:""}
        case SIGNIN_SUCCESS:return{auth:true,token:action.payload}
        case SIGNIN_FAILURE:return{auth:false,token:""}
        default:return state;
    }   
}