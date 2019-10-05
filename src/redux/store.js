import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/index";
import state from "./state";

export default createStore(reducer, state, applyMiddleware(thunk));
