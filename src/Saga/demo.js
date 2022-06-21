
import { call, all, takeEvery, put } from "@redux-saga/core/effects";

import axios from "axios";
import { useSelector } from "react-redux";
import {CHANGE_COMPONENT, 
  CHANGE_COMPONENT_BACK,
  GET_READERONLINE_STATUS,
  DISPLAY_READERONLINE_STATUS,
  DISPLAY_READER_HEADER,
  READER_HEADER,
  CHECK_THE_REDUCER,
  GET_HOSTELACCOUNT_DETAILS,
  DISPLAY_HOSTEL_ACCOUNT_DETAILS,
  GET_READERSETTING_DETAILS,
  DISPLAY_READERSETTING_DETAILS,
  GET_HOSTELLIST,
  DISPLAY_HOSTELLIST,
  UPDATE_NEWDEVICE,
  UPDATE_NEW_HOSTEL} from "../ActionTypes/ActionTypes";


function* checkthesaga() {
    console.log("saga is working");
  }

function* check() {
    console.log("saga is working");
    yield takeEvery(CHECK_THE_REDUCER, checkthesaga);
  }


  function* changetheComponent(props) {

  

    if(props.changeComponent == true){
                if( window.open(`http://localhost:3000/${props.reportChange}`)){
                     return 1;
                }
                else{
                  yield put({
                    type: CHANGE_COMPONENT_BACK
                  });
                }
                
    }
    }
// get reader online status

function* getReaderStatus(payload) {
  console.log("saga getReaderStatus", payload);
  try {
    let form = new FormData();

    form.append("status", 1);
    form.append("hstId",1);
    var response = yield axios
      .request({
        url: "https://hostel.bitsmind.com/API/Hostel/reader",
        data: form,
        method: "post",
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error.response;
      });

    if (response.status === 200) {
      console.log("display saga readeronlinestatus", response.data.device);
      yield put({
        type: DISPLAY_READERONLINE_STATUS,
        payload: response.data.device,
      });
    }
  } catch (error) {}
}
//get Reader online Status header
function* getReaderStatusHeader(payload) {
  console.log("saga getReaderStatus", payload);
  try {
    let form = new FormData();

    form.append("status", 2);
    var response = yield axios
      .request({
        url: "https://hostel.bitsmind.com/API/Hostel/reader",
        data: form,
        method: "post",
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error.response;
      });

    if (response.status === 200) {
      console.log("display saga readeronlinestatus", response);
      yield put({
        type: DISPLAY_READER_HEADER,
        payload: response.data.count,
      });
    }
  } catch (error) {}
}
//get hostel details
function* getHostelSetting(payload) {
  console.log("saga", payload);

  try {
    let form = new FormData();
    form.append("status", 1);
    var response = yield axios
      .request({
        url: "https://hostel.bitsmind.com/API/Hostel/hostelSettings",
        data: form,
        method: "post",
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });

    if (response.status === 200) {
      console.log("display saga", response);
      yield put({
        type: DISPLAY_HOSTEL_ACCOUNT_DETAILS,
        payload: response.data.settings,
      });
    }
  } catch (error) {}
}
// get device/reader setting details
function* getDeviceSetting(payload) {
  console.log("devicesaga", payload);

  try {
    let form = new FormData();
    form.append("status", 1);
    var response = yield axios
      .request({
        url: "https://hostel.bitsmind.com/API/Hostel/deviceReader",
        data: form,
        method: "post",
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });

    if (response.status === 200) {
      console.log("display saga", response);
      yield put({
        type: DISPLAY_READERSETTING_DETAILS,
        payload: response.data.reader,
      });
    }
  } catch (error) {}
}

//get hostellist
function* getHostelFullList(payload) {
  console.log("saga", payload);
  try {
    let form = new FormData();

    form.append("status", 1);
    var response = yield axios
      .request({
        url: "https://hostel.bitsmind.com/API/Hostel/hostelList",
        data: form,
        method: "post",
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error.response;
      });

    if (response.status === 200) {
      console.log("display saga hostellist", response.data.hostel);
      yield put({
        type: DISPLAY_HOSTELLIST,
        payload: response.data.hostel,
      });
    }
  } catch (error) {}
}
//post the newdevice data
function* postNewDeviceReader(pay) {
  console.log("post saga1",pay)
  try {
    let form = new FormData();
    form.append("status","1");
    form.append("deviceName", pay.payload.description);
      form.append("deviceType", pay.payload.deviceType);
      form.append("deviceSerialNo", pay.payload.serialNumber);
      form.append("deviceImei", pay.payload.imeinumber);
      form.append("deviceIp", pay.payload.simPhNumber);
      form.append("deviceModel", pay.payload.devicemodal);
      form.append("deviceVersion", pay.payload.featureSet);
      form.append("codeVersion", pay.payload.codeVersion);
      // form.append("emailId", pay.payload.device),
      form.append("updateStatus", pay.payload.inActive);
      form.append("LastUpdate", new Date().toISOString());
      form.append("offlineCount", 0);
    // form.append("userFile", pay.payload.simId),
    form.append("hostelId", pay.payload.hostelId);
    form.append("readerPort1",pay.payload.readertype1);
    form.append("readerPort2",pay.payload.readertype2);
    form.append("accessMode1",pay.payload.accessmode1);
    form.append("accessMode2",pay.payload.accessmode2);


    var response = yield axios
      .request({
        url: "https://hostel.bitsmind.com/API/Hostel/device",
        data: form,
        method: "post",
        headers: {
          accept: "application/json",
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
    if (response.data.status == "1") {
      alert("added New Device");
    }
  } catch (error) {

  }
}
//post the update new hostel 
function* postUpdateNewHostel(pay) {
  console.log("post saga2",pay)
  try {
    let form = new FormData();
    form.append("status","0");
    form.append("hostel_name", pay.payload.hostelName);
      form.append("hostel_code", pay.payload.hostelCode);
      form.append("contactName", pay.payload.contactName);
      form.append("contactPhone", pay.payload.contactNumber);
      form.append("contactEmail", pay.payload.contactEmail);
      form.append("maxDevices", pay.payload.maxDevices);
    var response = yield axios
      .request({
        url: "https://hostel.bitsmind.com/API/Hostel/hostelAccount",
        data: form,
        method: "post",
        headers: {
          accept: "application/json",
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
    
      if (response.data.status == "0") {
        alert("added New Device");
      }
  } catch (error) {

  }
}



function* getHostel() {
  yield takeEvery(GET_HOSTELACCOUNT_DETAILS, getHostelSetting);
}
function* getDevice() {
  yield takeEvery(GET_READERSETTING_DETAILS, getDeviceSetting);
}
function* getHostelList() {
  yield takeEvery(GET_HOSTELLIST, getHostelFullList);
}
function* postNewDevice() {
  yield takeEvery(UPDATE_NEWDEVICE, postNewDeviceReader);
}
  function* change() {
    yield takeEvery(CHANGE_COMPONENT, changetheComponent);
  }
  function* getReaderOnline() {
    yield takeEvery(GET_READERONLINE_STATUS, getReaderStatus);
  }
  function* getReaderHeader() {
    yield takeEvery(READER_HEADER, getReaderStatusHeader);
  }
  function* postNewHostel() {
    yield takeEvery(UPDATE_NEW_HOSTEL, postUpdateNewHostel);
  }
  

export default function* rootSaga() {
    yield all([check(),
      change(),
      getHostel(),
      getDevice(),
      getHostelList(),
      postNewDevice(),
      getReaderOnline(),
      getReaderHeader(),
      postNewHostel(),
      
    ]);
  }
  