import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import demo from "./demo";
import Report from "./Report";
import AdminPageReducers from "./AdminPageReducers"




export default (history) => combineReducers({
  router: connectRouter(history),
  demo:demo,
  Report:Report,
  AdminPageReducers:AdminPageReducers,
});
      