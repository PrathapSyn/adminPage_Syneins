import {createStore, applyMiddleware} from "redux";
import Thunk from "redux-thunk";
import Reducers from "../Reducers/index";

export default createStore(Reducers, {}, applyMiddleware(Thunk));