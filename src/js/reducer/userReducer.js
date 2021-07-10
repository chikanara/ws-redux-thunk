import { GET_ALL_USERS, GET_ALL_USERS_FAIL, GET_ALL_USERS_SUCCESS, GET_USER, GET_USER_FAIL, GET_USER_SUCCESS } from "../const";

const intitialState = {
    users:[],
    isLoading:false,
    errors:"",
    user:{}
}


const userReducer = (state=intitialState,{type,payload}) => {
    switch (type) {
        case GET_ALL_USERS:
           return {...state,isLoading:true}
        
        case GET_ALL_USERS_SUCCESS:
            return {...state,isLoading:false,users:payload}

        case GET_ALL_USERS_FAIL:
            return {...state,isLoading:false,errors:payload}

        case GET_USER:
            return {...state,isLoading:true} 
        case GET_USER_SUCCESS:
            return {...state,user:payload,isLoading:false}
            case GET_USER_FAIL:
                return {...state,isLoading:false,errors:payload}
        default:
            return state;
    }
}
 
export default userReducer;