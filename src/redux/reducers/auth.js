import { USER_ERROR, USER_LOADING, USER_SUCCESS } from "../actionTypes";
import Cookie from "js-cookie";

export const user = (state = [], action) => {
  switch (action.type) {
    case USER_SUCCESS: {
      Cookie.set("kanban_crud_cookie", action.token);
      return state;
    }
    default:
      return state;
  }
};

export const userErrored = (state = false, action) => {
  switch (action.type) {
    case USER_ERROR: {
      console.log(action.message);
      return action.hasErrored;
    }
    default:
      return state;
  }
};

export const userIsLoading = (state = true, action) => {
  switch (action.type) {
    case USER_LOADING:
      return action.isLoading;
    default:
      return state;
  }
};
