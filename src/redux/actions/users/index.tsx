
import UserService from "../../../services/user.service";
import { GET_USERS_FAIL, GET_USERS_SUCCESS } from "../../types";

export const loginUser = (params: any) => async (dispatch: any) => {
  return UserService.loginUser(params).then(
    (data: any) => {
      
      if (data.accessToken) {
        data.user = {...data.user, password: params.password};
        dispatch({
          type: 'GET_LOGIN_SUCCESS',
          payload: data,
        });
        return Promise.resolve("success");
      } else {
        dispatch({
          type: 'GET_LOGIN_FAIL',
        });
        return Promise.resolve(data);
      }

    },
    (error: any) => {
      dispatch({
        type: 'GET_LOGIN_FAIL',
      });
      return Promise.reject();
    },
  );
};

export const getUsers = () => async (dispatch: any) => {
  return UserService.getUsers().then(
    (data: any) => {
      if (data) {
        dispatch({
          type: GET_USERS_SUCCESS,
          payload: data,
        });
        return Promise.resolve("success");
      }

    },
    (error: any) => {
      dispatch({
        type: GET_USERS_FAIL,
      });
      return Promise.reject();
    },
  );
};
