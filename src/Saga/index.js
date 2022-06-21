import {all} from 'redux-saga/effects';
import demo from "./demo";
import AdminPageSaga from "./AdminPageSaga";



export default function* rootSaga(getState) {
  yield all([
      demo(),
      AdminPageSaga(),
  ]);
}
