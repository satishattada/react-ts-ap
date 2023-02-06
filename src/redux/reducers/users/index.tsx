import {GET_USERS_SUCCESS} from '../../types'


type InitialStateObj = {
  userData: any;
  accessToken: String;
  selectedProfile: any;
  usersData: any[]
};

const initialState: InitialStateObj = {
  userData: {},
  usersData: [],
  accessToken: "12345",
  selectedProfile: {},
};

const users = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_LOGIN_SUCCESS":
    case "GET_REGISTER_SUCCESS":
      return {
        ...state,
        accessToken: action.payload.accessToken,
        userData: action.payload.user,
        selectedProfile: action.payload.user,
      };
      case GET_USERS_SUCCESS:
          return {
            ...state,
            usersData: action.payload,
          };
    
    default:
      return state;
  }
};

export default users;
