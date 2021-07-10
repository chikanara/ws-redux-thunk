import {
  GET_ALL_USERS,
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_SUCCESS,
  GET_USER,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
} from "../const";
import axios from "axios";

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: GET_ALL_USERS });
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({ type: GET_ALL_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_USERS_FAIL, payload: error.response.message });
  }
};

export const getUser = (id) => async (dispatch) => {
  dispatch({ type: GET_USER });
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    dispatch({type:GET_USER_SUCCESS,payload:data})
  } catch (error) {
    dispatch({ type: GET_USER_FAIL, payload: error.response.message });
  }
};

// export const getAllUsers = () => {
//     return
// }
