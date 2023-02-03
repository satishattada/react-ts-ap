type InitialStateObj = {
  userData: any;
  accessToken: String;
  selectedProfile: any;
  users: String[]
};

const initialState: InitialStateObj = {
  userData: {},
  users: [],
  accessToken: "12345",
  selectedProfile: {},
};

const user = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_LOGIN_SUCCESS":
    case "GET_REGISTER_SUCCESS":
      return {
        ...state,
        accessToken: action.payload.accessToken,
        userData: action.payload.user,
        selectedProfile: action.payload.user,
      };
      case "GET_USERS_SUCCESS":
          return {
            ...state,
            users: action.payload,
          };
    
    default:
      return state;
  }
};

export default user;
