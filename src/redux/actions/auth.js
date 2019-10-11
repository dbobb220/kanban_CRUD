import { USER_ERROR, USER_LOADING, USER_SUCCESS } from "../actionTypes";

export const userError = (bool, err) => {
  return {
    type: USER_ERROR,
    hasErrored: bool,
    message: err
  };
};

export const userLoading = bool => {
  return {
    type: USER_LOADING,
    isLoading: bool
  };
};

export const userSuccess = token => {
  return {
    type: USER_SUCCESS,
    token
  };
};

export const userSignup = obj => {
  console.log(obj);
  console.log("user is signing up");
  return dispatch => {
    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(obj)
    })
      .then(res => res.json())
      .then(token => {
        console.log("signup", token);
        dispatch(userSuccess(token));
      })
      .catch(err => dispatch(userError(true, err)));
  };
};

export const userLogin = obj => {
  return dispatch => {
    console.log("user is logging in");
    fetch("/api/session", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(obj)
    })
      .then(res => res.json())
      .then(token => {
        if (!token.error) {
          console.log(token);
          dispatch(userSuccess(token));
        } else {
          console.log("error");
          dispatch(userError(true, token.error));
        }
      });
  };
};

// dispatch(userError(true, err))
