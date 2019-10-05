import React from "react";
import Cookie from "js-cookie";
import Home from "./components/Auth/Home";
import App from "./containers/App";

function NewApp(props) {
  const cookie = Cookie.get("kanban_crud_cookie");
  let appPage = [];
  if (cookie === undefined) {
    appPage = <Home />;
  } else {
    appPage = <App />;
  }
  return <div>{appPage}</div>;
}

export default NewApp;
