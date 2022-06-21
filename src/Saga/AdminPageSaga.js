import { call, all, takeEvery, put } from "@redux-saga/core/effects";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { history } from "../Store/index";

import axios from "axios";
import {
  CHANGE_LINK,
  SIGNIN_PROCESS,
  SIGNIN_SUCCESS,
  SIGNOUT_USER,
  CHANGE_SUCCESS,
  HOSTEL_LIST,
  DISPLAY_HOSTEL_LIST,
  READER_STATUS,
  DISPLAY_THE_READER,
  GET_STUDENT_LIST,
  GET_MESSAGE_LIST,
  DISPLAY_MESSAGE_SETTING,
  DISPLAY_STUDENT_LIST,
  GET_WARDEN_LIST,
  DISPLAY_WARDEN_LIST,
  GET_USER_LIST,
  DISPLAY_USER_LIST,
  GET_DEVICE_LIST,
  DISPLAY_DEVICES_LIST,
  GET_STUDENT_GROUP,
  DISPLAY_STUDENT_GROUP,
  CHANGE_PASSWORD,
  GET_COMMAND_LIST,
  DISPLAY_COMMAND_LIST,
  GET_COMMAND_STATUS,
  DISPLAY_COMMAND_STATUS,
  SELECTED_COMMAND,
  POST_THE_COMMAND,
  GET_STUDENT_GROUP_LIST,
  DISPLAY_GROUP_DROP_DOWN,
  CHANGE_THE_VALUES,
  POST_DEVICE_SETTING,
  GET_STUDENT_DETAILS,
  DISPLAY_STUDENT_DETAILS,
  GET_RFID_RECORD,
  DISPLAY_CARD_REPORT,
  GET_DATE_WISE_EXIT,
  DISPLAY_DATEWISE_EXIT,
  GET_DATE_WISE_ENTRY,
  DISPLAY_ENTRY_DATA,
  GET_STUDENT_TRIP,
  DISPLAY_STUDENT_TRIP,
  GET_STUDENT_TRIP_BY_ID,
  DISPLAY_STUDENT_TRIP_BY_ID,
  POST_WARDEN_DETAILS,
  GET_TODAY_STATUS,
  DISPLAY_TODAY_STATUS,
  DISPLAY_DASHBOARD_DATA,
  GET_DASHBOARD_DATA,
  GET_SMS_OUTBOX,
  DISPLAY_SMS_OUTBOX,
  GET_TRAVEL_DESK,
  DISPLAY_TRAVEL_DESK,
  GET_STATUS_VIEW,
  DISPLAY_STATUS_VIEW,
  GET_SMS_PENDING_REPORT,
  DISPLAY_SMS_PENDING_REPORT,
  GET_STUDENT_GROUP_REPORT,
  DISPLAY_STUDENT_GROUP_REPORT,
  GET_STUDENT_PRESENT_REPORT,
  DISPLAY_STUDENT_PRESENT_REPORT,
  GET_MANUAL_DATA,
  DISPLAY_MANUAL_DATA,
  GET_TRAVEL_SORT_DATA,
  DISPLAY_SORT_DATA,
  STUDENT_ABSENT_LIST,
  DISPLAY_STUDENT_ABSENT_REPORT,
  SYSTEM_LOG_REPORT,
  DISPLAY_SYSTEM_REPORT,
  SMS_UPDATE,
  SMS_UPDATE_RETURN,
  RIGHT_UPDATE,
  GET_SEARCH_RESULT,
  DISPLAY_SEARCH_RESULT,
  DISPLAY_DEVICE_SETTING,
  GET_DEVICE_SETTING,
} from "../ActionTypes/ActionTypes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function* LoginApi(props) {
  // let navigate = useNavigate();

  try {
    let form = new FormData();
    form.append("username", props.payload.userName);
    form.append("password", props.payload.password);
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Login/login",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));

    if (response.data.status == "1") {
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user.loginToken)
      );
      localStorage.setItem("PersonalInfo", JSON.stringify(response.data.user));
      history.push("./Home");
      window.location.reload();
      yield put({
        type: SIGNIN_SUCCESS,
        payload: response.data.user,
      });
      // yield put({
      //   type: CHANGE_SUCCESS,
      //   payload: "/Home",
      // });
    } else {
      // alert("this is wrong email");
      toast("Enter the Valid UserName and Password. .....!");
      //   NotificationManager.success("Error message", "Enter Valid Email", 3000);
    }
  } catch (error) {
    console.log(error);
  }
}

function* loginprocess() {
  yield takeEvery(SIGNIN_PROCESS, LoginApi);
}

function* HostelList(props) {
  try {
    let form = new FormData();
    form.append("status", "1");

    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/hostelList",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));

    if (response.data.status == "1") {
      yield put({
        type: DISPLAY_HOSTEL_LIST,
        payload: response.data.hostel,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

function* hostelList() {
  yield takeEvery(HOSTEL_LIST, HostelList);
}

function* getReaderStatus() {
  // console.log("props", props);
  try {
    let form = new FormData();
    form.append("status", "1");
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/reader",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    // console.log("reader", response.data);

    yield put({
      type: DISPLAY_THE_READER,
      payload: response.data.device,
    });
  } catch (error) {
    console.log(error);
  }
}

function* ReaderStatus() {
  yield takeEvery(READER_STATUS, getReaderStatus);
}

function* getMessage() {
  // console.log("props", props);
  try {
    let form = new FormData();
    form.append("status", "1");

    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/message",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    //  console.log("reader", response.data.message);
    if (response.data.status == "1") {
      yield put({
        type: DISPLAY_MESSAGE_SETTING,
        payload: response.data.message,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

function* getMessageList() {
  yield takeEvery(GET_MESSAGE_LIST, getMessage);
}

function* getStudent(payload) {
  console.log("Studentprops", payload);
  try {
    let form = new FormData();
    form.append("status", "1");
    form.append("hstId", payload.payload.SelectedHostel);
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/student",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    console.log("student list", response);

    yield put({
      type: DISPLAY_STUDENT_LIST,
      payload: response.data.student,
    });
  } catch (error) {
    console.log(error);
  }
}

function* getStudentList() {
  yield takeEvery(GET_STUDENT_LIST, getStudent);
}

function* getwarden(payload) {
  try {
    let form = new FormData();
    form.append("status", "1");
    form.append("hstId", payload.payload.SelectedHostel);
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/wardenList",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    if (response.data.status == "1") {
      yield put({
        type: DISPLAY_WARDEN_LIST,
        payload: response.data.warden,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

function* getWardenList() {
  yield takeEvery(GET_WARDEN_LIST, getwarden);
}

function* getUser(payload) {
  //console.log("Studentprops",payload);
  try {
    let form = new FormData();
    form.append("hstId", payload.payload.SelectedHostel);
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/userSet",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    // console.log("this is udser",response.data.user)

    yield put({
      type: DISPLAY_USER_LIST,
      payload: response.data.user,
    });
  } catch (error) {
    console.log(error);
  }
}

function* getUserList() {
  yield takeEvery(GET_USER_LIST, getUser);
}

function* getDevice(payload) {
  //console.log("Studentprops",payload);
  try {
    let form = new FormData();
    form.append("status", "1");
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/deviceReader",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    // console.log("this is udser",response.data)

    yield put({
      type: DISPLAY_DEVICES_LIST,
      payload: response.data.reader,
    });
  } catch (error) {
    console.log(error);
  }
}

function* getDevicesList() {
  yield takeEvery(GET_DEVICE_LIST, getDevice);
}

function* getStudentGroupList(payload) {
  try {
    let form = new FormData();
    form.append("hstId", payload.payload.SelectedHostel);
    form.append("date", "0000-00-00");
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/studentGroup",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));

    yield put({
      type: DISPLAY_STUDENT_GROUP,
      payload: response.data.group,
    });
  } catch (error) {
    console.log(error);
  }
}

function* getStudentGroup() {
  yield takeEvery(GET_STUDENT_GROUP, getStudentGroupList);
}

function* Forgot(payload) {
  console.log("forgotpassweewefesdcd", payload.payload.userDetails.id);
  try {
    let form = new FormData();
    form.append("oldPassword", payload.payload.oldPassword);
    form.append("id", payload.payload.userDetails.id);
    form.append("newPassword", payload.payload.newPassword);
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Login/chngpass",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));

    if (response.data.status == "1") {
      // console.log("this is status ");
      alert("Successully changed Your Password");
      NotificationManager.success("Success message", "Title here");
    } else {
      alert("Sorry!... unable to change the Password");
      NotificationManager.error("Error message", "Enter Valid Email", 3000);
    }
    // yield put({
    //  type:DISPLAY_STUDENT_GROUP,
    //  payload:response.data.group,
    // });
  } catch (error) {
    console.log(error);
  }
}

function* forgotpassword() {
  yield takeEvery(CHANGE_PASSWORD, Forgot);
}

function* getCommandList(payload) {
  try {
    let form = new FormData();
    form.append("status", "2");
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/deviceReader",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    console.log("this", response);

    yield put({
      type: DISPLAY_COMMAND_LIST,
      payload: response.data.command,
    });
  } catch (error) {
    console.log(error);
  }
}

function* getCommand() {
  yield takeEvery(GET_COMMAND_LIST, getCommandList);
}

function* getCommandStatusList(payload) {
  try {
    let form = new FormData();
    form.append("status", "3");
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/deviceReader",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    console.log("this", response);

    yield put({
      type: DISPLAY_COMMAND_STATUS,
      payload: response.data.comdsend,
    });
  } catch (error) {
    console.log(error);
  }
}

function* getCommandStatus() {
  yield takeEvery(GET_COMMAND_STATUS, getCommandStatusList);
}

function* postTheCommand(payload) {
  // console.log("in safa post ",payload);
  try {
    let form = new FormData();
    form.append("status", "1");
    form.append("deviceId", payload.payload.deviceIdCommand);
    form.append("commandName", payload.payload.SelectedTheCommand.Name);
    form.append("commandType", payload.payload.SelectedTheCommand.Type);
    form.append("command", payload.payload.SelectedTheCommand.Command);
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/sendCommand",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    console.log("commadnsvsdvvv ", response);
    if (response.data.status == "1") {
      alert("Command Send Succusfully");
    }

    // yield put({
    // type:DISPLAY_COMMAND_STATUS,
    // payload:response.data.comdsend,
    // });
  } catch (error) {
    console.log(error);
  }
}

function* postingTheCommand() {
  yield takeEvery(POST_THE_COMMAND, postTheCommand);
}

function* studentGroupDrop(payload) {
  console.log("in sccsdcsdcdsccsdcsdcdscsdcsdcsdcscscs ", payload);
  try {
    let form = new FormData();
    form.append("status", "1");
    form.append("mode", payload.payload.SelectedHostel);
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/groups",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    console.log("commadnsvsdvvv ", response);

    yield put({
      type: DISPLAY_GROUP_DROP_DOWN,
      payload: response.data.group,
    });
  } catch (error) {
    console.log(error);
  }
}

function* studentGroupDropdown() {
  yield takeEvery(GET_STUDENT_GROUP_LIST, studentGroupDrop);
}

//post the data device setting/systemsetting
function* postDeviceSetting(pay) {
  console.log("post dgvdfgdfgdgdgd", pay.payload.smsenabled);
  var Status = (pay.payload.smsenabled == true && "2") || "1";
  var Debug = (pay.payload.DebugOn == true && "2") || "1";

  try {
    let form = new FormData();
    form.append("status", "1");
    form.append("uid", pay.payload.DisplayDeviceSetting.uid);
    form.append(
      "smsProviderName",
      pay.payload.DisplayDeviceSetting.smsProviderName
    );
    form.append("password", pay.payload.SMSUrlPassword);
    form.append("smsUrl", pay.payload.SMSErrorMessage);
    form.append("smsCallbackUrl", pay.payload.SMSEnabled);
    form.append("smsBalanceUrl", pay.payload.setting);
    form.append("isDebug", Debug);
    form.append("status", Status);
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/sysSettings",
        data: form,
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
    if (response.data.status == "1") {
      toast("Response are updated");
    }
  } catch (error) {}
}
function* postDevice() {
  yield takeEvery(POST_DEVICE_SETTING, postDeviceSetting);
}

//reportttttsss

function* studentDetails(payload) {
  console.log("in student details ", payload);
  try {
    let form = new FormData();
    form.append("status", "1");
    form.append("appId", payload.payload.rollNo);
    form.append("hstId", payload.payload.hostelId);
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/reports",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    console.log("commadnsvsdvvv ", response);
    if (response.data.status == "1") {
      alert("Command Send Succusfully");
    }
    if (response.data.std != null) {
      yield put({
        type: DISPLAY_STUDENT_DETAILS,
        payload: response.data.std,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

function* getStudentDetails() {
  yield takeEvery(GET_STUDENT_DETAILS, studentDetails);
}

function* getRecords(payload) {
  // console.log("in student details ",payload);
  var fromDate = payload.payload.fromDate / 1000;
  var toDate = payload.payload.toDate / 1000;
  try {
    let form = new FormData();
    form.append("status", payload.payload.reportChange);
    form.append("date", fromDate);
    form.append("datee", toDate);
    form.append("hstId", payload.payload.hostelId);
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/reports",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    //  console.log("commadnsvsdvvv ",response);

    yield put({
      type: DISPLAY_CARD_REPORT,
      payload: response.data.card,
    });
  } catch (error) {
    console.log(error);
  }
}

function* getReports() {
  yield takeEvery(GET_RFID_RECORD, getRecords);
}

function* getDateEIseExit(payload) {
  console.log("in student details ", payload);
  var fromDate = payload.payload.fromDate / 1000;
  var toDate = payload.payload.toDate / 1000;
  try {
    let form = new FormData();
    form.append("status", payload.payload.reportChange);
    form.append("date", fromDate);
    form.append("datee", toDate);
    form.append("hstId", payload.payload.hostelId);
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/reports",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    //  console.log("commadnsvsdvvv ",response);

    yield put({
      type: DISPLAY_DATEWISE_EXIT,
      payload: response.data.exit,
    });
  } catch (error) {
    console.log(error);
  }
}

function* getDatewiseExitReport() {
  yield takeEvery(GET_DATE_WISE_EXIT, getDateEIseExit);
}

function* getDatewiseEntry(payload) {
  //console.log("in student details ",payload);
  var fromDate = payload.payload.fromDate / 1000;
  var toDate = payload.payload.toDate / 1000;
  try {
    let form = new FormData();
    form.append("status", payload.payload.reportChange);
    form.append("date", fromDate);
    form.append("datee", toDate);
    form.append("hstId", payload.payload.hostelId);
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/reports",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    //  console.log("commadnsvsdvvv ",response);

    yield put({
      type: DISPLAY_ENTRY_DATA,
      payload: response.data.entry,
    });
  } catch (error) {
    console.log(error);
  }
}

function* getDatewiseEntryReport() {
  yield takeEvery(GET_DATE_WISE_ENTRY, getDatewiseEntry);
}

function* getStudentTrip(payload) {
  console.log("in student details  vdfbvdfbfdbdbdfbd", payload);
  var fromDate = payload.payload.fromDate / 1000;
  var toDate = payload.payload.toDate / 1000;
  try {
    let form = new FormData();
    form.append("status", payload.payload.reportChange);
    form.append("date", fromDate);
    form.append("datee", toDate);
    form.append("hstId", payload.payload.hostelId);
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/reports",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    //  console.log("commadnsvsdvvv ",response);

    yield put({
      type: DISPLAY_STUDENT_TRIP,
      payload: response.data.trip,
    });
  } catch (error) {
    console.log(error);
  }
}

function* getStudentTripReport() {
  yield takeEvery(GET_STUDENT_TRIP, getStudentTrip);
}

function* tripDetailsByid(payload) {
  try {
    let form = new FormData();
    form.append("status", payload.payload.reportChange);
    form.append("uId", payload.payload.tripId);
    form.append("hstId", payload.payload.hostelId);
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/reports",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    //  console.log("commadnsvsdvvv ",response);

    if (response.data.trip != null) {
      yield put({
        type: DISPLAY_STUDENT_TRIP_BY_ID,
        payload: response.data.trip,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

function* getSTudentTripByid() {
  yield takeEvery(GET_STUDENT_TRIP_BY_ID, tripDetailsByid);
}
//post the newwarden deatils
function* postNewWardenDetails(payload) {
  console.log("wardensaga post ", payload);
  try {
    let form = new FormData();
    form.append("status", "1");
    form.append("employee_name", payload.payload.wardenName);
    form.append("hostel_type", payload.payload.hostelName);
    form.append("phone_num", payload.payload.wardenContactNumber);
    form.append("dob", payload.payload.wardenBirthDate);
    form.append("comm_address_1", payload.payload.wardenAddress);
    form.append("email_id", payload.payload.wardenEmailId);
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/wardenGroup",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    console.log("commadnsvsdvvv ", response);

    // yield put({
    // type:DISPLAY_COMMAND_STATUS,
    // payload:response.data.comdsend,
    // });
  } catch (error) {
    console.log(error);
  }
}

function* postUpdateWarden() {
  yield takeEvery(POST_WARDEN_DETAILS, postNewWardenDetails);
}
function* DashBoard(payload) {
  try {
    let form = new FormData();
    form.append("status", "1");
    form.append("hstId", payload.payload.SelectedHostel);
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/dashBoard",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    // console.log("commadnsvsdvvv ",response);

    yield put({
      type: DISPLAY_DASHBOARD_DATA,
      payload: response.data.dashboard,
    });
  } catch (error) {
    console.log(error);
  }
}
function* getDashBoard() {
  yield takeEvery(GET_DASHBOARD_DATA, DashBoard);
}

function* getStatus(payload) {
  try {
    let form = new FormData();
    form.append("status", "2");
    form.append("hstId", payload.payload.SelectedHostel);
    form.append("date", payload.payload.localTime);
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/dashBoard",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    yield put({
      type: DISPLAY_TODAY_STATUS,
      payload: response.data.today,
    });
  } catch (error) {
    console.log(error);
  }
}
function* getTodayStatus() {
  yield takeEvery(GET_TODAY_STATUS, getStatus);
}
//sms outbox  getting
function* getSMSCallOutbox(payload) {
  console.log("vdvdvdfvd", payload);
  try {
    let form = new FormData();
    form.append("status", "1");
    form.append("datee", payload.payload.date);
    form.append("sts", payload.payload.filter);
    form.append("date", payload.payload.fromDate);
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/smsOutbox",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    console.log("response", response.data.sms);
    yield put({
      type: DISPLAY_SMS_OUTBOX,
      payload: response.data.sms,
    });
  } catch (error) {
    console.log(error);
  }
}
function* getSMSOutbox() {
  yield takeEvery(GET_SMS_OUTBOX, getSMSCallOutbox);
}

//travel desk getting
function* getTravelDesk(payload) {
  console.log("travel desk", payload);

  try {
    let form = new FormData();
    form.append("hstId", payload.payload.SelectedHostel);
    form.append("fId", payload.payload.groupId);
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/desk",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    console.log("travel desk display", response);

    yield put({
      type: DISPLAY_TRAVEL_DESK,
      payload: response.data.desk,
    });
  } catch (error) {
    console.log(error);
  }
}

function* getTravel() {
  yield takeEvery(GET_TRAVEL_DESK, getTravelDesk);
}

function* getStatusViewData(payload) {
  console.log("travel desk", payload.payload.TravelDeskId);
  try {
    let form = new FormData();
    form.append("hstId", payload.payload.SelectedHostel);
    form.append("fId", "0");
    form.append("Id", payload.payload.TravelDeskId);
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/statusView",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    console.log("travel desk status display", response);

    yield put({
      type: DISPLAY_STATUS_VIEW,
      payload: response.data.stsView,
    });
  } catch (error) {
    console.log(error);
  }
}

function* getTravelStatus() {
  yield takeEvery(GET_STATUS_VIEW, getStatusViewData);
}

//report
function* getSMSReport(payload) {
  console.log("vdvdvdfvd", payload);
  var fromDate = payload.payload.fromDate / 1000;
  var toDate = payload.payload.toDate / 1000;
  try {
    let form = new FormData();
    form.append("status", payload.payload.reportChange);
    form.append("date", fromDate);
    form.append("datee", toDate);
    form.append("hstId", payload.payload.hostelId);
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/reports",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    console.log("response", response);
    yield put({
      type: DISPLAY_SMS_PENDING_REPORT,
      payload: response.data.pending,
    });
  } catch (error) {
    console.log(error);
  }
}
function* getSMSPendingReport() {
  yield takeEvery(GET_SMS_PENDING_REPORT, getSMSReport);
}

function* studentGroupReportget(payload) {
  console.log("vdvdvdfvd", payload);
  try {
    let form = new FormData();
    form.append("status", payload.payload.reportChange);
    form.append("hstId", payload.payload.hostelId);
    form.append("fId", payload.payload.groupSelect);
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/reports",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    console.log("response", response);
    yield put({
      type: DISPLAY_STUDENT_GROUP_REPORT,
      payload: response.data.group,
    });
  } catch (error) {
    console.log(error);
  }
}
function* getSTudentGroupReport() {
  yield takeEvery(GET_STUDENT_GROUP_REPORT, studentGroupReportget);
}

function* getStudentPresent(payload) {
  //  console.log("vdvdvdfvd",payload)
  var fromDate = payload.payload.fromDate / 1000;
  var toDate = payload.payload.toDate / 1000;
  try {
    let form = new FormData();
    form.append("status", payload.payload.reportChange);
    form.append("date", fromDate);
    form.append("datee", toDate);
    form.append("hstId", payload.payload.hostelId);
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/reports",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    console.log("response", response);
    yield put({
      type: DISPLAY_STUDENT_PRESENT_REPORT,
      payload: response.data.present,
    });
  } catch (error) {
    console.log(error);
  }
}
function* getStudentPresentReport() {
  yield takeEvery(GET_STUDENT_PRESENT_REPORT, getStudentPresent);
}
//show manual

function* getManualdatas(payload) {
  const floorID =
    (payload.payload.groupId != "0" && payload.payload.groupId) || "0";
  try {
    let form = new FormData();
    form.append(
      "uid", payload.payload.gatePassMode != 1 ? payload.payload.uid : 0
    );
    form.append("applicationId", payload.payload.TravelDeskId);
    form.append("gatePassMode", payload.payload.gatePassMode);
    form.append("institutionId", payload.payload.institutionId);
    form.append("travelBy", payload.payload.travelBy);
    form.append("hostelId", payload.payload.SelectedHostel);
    form.append("sessionLoginId", payload.payload.userDetails.user_level);
    form.append("floorId", floorID);

    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/travelDesk",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    console.log("getManual data ", response.data);
    if (response.data.desk != []) {
      toast("Updated Your record Successfully .....!");
    }
    yield put({
      type: DISPLAY_MANUAL_DATA,
      payload: response.data.desk,
    });
  } catch (error) {
    //console.log(error);
  }
}

function* getManual() {
  yield takeEvery(GET_MANUAL_DATA, getManualdatas);
}

//show manual
function* getSortData(payload) {
  console.log("manual data ", payload);
  try {
    let form = new FormData();
    form.append("fId", payload.payload.fId);
    form.append("hstId", payload.payload.hstId);
    form.append("status", payload.payload.status);

    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/orderdesk",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    console.log("getSortData data ", response);

    yield put({
      type: DISPLAY_SORT_DATA,
      payload: response.data.desk,
    });
  } catch (error) {
    console.log(error);
  }
}

function* getSort() {
  yield takeEvery(GET_TRAVEL_SORT_DATA, getSortData);
}

function* getStudentAbsent(payload) {
  console.log("action type", payload);
  //  console.log("vdvdvdfvd",payload)
  var fromDate = payload.payload.fromDate / 1000;
  var toDate = payload.payload.toDate / 1000;
  try {
    let form = new FormData();
    form.append("status", payload.payload.reportChange);
    form.append("date", fromDate);
    form.append("datee", toDate);
    form.append("hstId", payload.payload.hostelId);
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/reports",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    console.log("response", response);
    yield put({
      type: DISPLAY_STUDENT_ABSENT_REPORT,
      payload: response.data.absent,
    });
  } catch (error) {
    console.log(error);
  }
}
function* getStudentAbsentReport() {
  yield takeEvery(STUDENT_ABSENT_LIST, getStudentAbsent);
}

function* systemeventReport(payload) {
  console.log("action type", payload);
  //  console.log("vdvdvdfvd",payload)
  var fromDate = payload.payload.fromDate / 1000;
  var toDate = payload.payload.toDate / 1000;
  try {
    let form = new FormData();
    form.append("status", payload.payload.reportChange);
    form.append("date", fromDate);
    form.append("datee", toDate);
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/reports",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    console.log("response", response);
    yield put({
      type: DISPLAY_SYSTEM_REPORT,
      payload: response.data.log,
    });
  } catch (error) {
    console.log(error);
  }
}
function* getSystemEvents() {
  yield takeEvery(SYSTEM_LOG_REPORT, systemeventReport);
}

function* smsUpdateChange(payload) {
  console.log("action type", payload);
  //  console.log("vdvdvdfvd",payload)
  try {
    let form = new FormData();
    form.append("status", "1");
    form.append("message", payload.payload.smsInput);
    form.append("messageType", payload.payload.MessageId);
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/SMSFormat",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    console.log("response", response);
    yield put({
      type: SMS_UPDATE_RETURN,
      payload: response.data.smsFOrmatUpdated,
    });
  } catch (error) {
    console.log(error);
  }
}
function* SMSupdate() {
  yield takeEvery(SMS_UPDATE, smsUpdateChange);
}

function* userRightsUpdated(payload) {
  console.log("action type", payload);
  console.log("vdvdvdfvd", payload.payload.studentsGroup);
  const ChangeGroup = (payload.payload.studentsGroup == false && "1") || "2";

  try {
    let form = new FormData();
    form.append("userId", payload.payload.UserRightsId);
    form.append("groupId", ChangeGroup);
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/userRights",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    console.log("response", response);

    if (response.data.userId == payload.payload.UserRightsId) {
      toast("User Rights Updated .....!");
    }
    // yield put({
    //   type: SMS_UPDATE_RETURN,
    // payload:response.data.smsFOrmatUpdated,
    // });
  } catch (error) {
    console.log(error);
  }
}
function* RightsUpdate() {
  yield takeEvery(RIGHT_UPDATE, userRightsUpdated);
}

function* getSearchResultApi(payload) {
  var result =
    (payload.payload.SearchOrder == "1" && "name") ||
    (payload.payload.SearchOrder == "2" && "appId") ||
    (payload.payload.SearchOrder == "3" && "phn") ||
    (payload.payload.SearchOrder == "4" && "rId");
  try {
    let form = new FormData();
    form.append("status", payload.payload.SearchOrder);
    form.append(result, payload.payload.SearchOrderText);
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/search",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    yield put({
      type: DISPLAY_SEARCH_RESULT,
      payload: response.data.std,
    });
  } catch (error) {
    console.log(error);
  }
}
function* getSearch() {
  yield takeEvery(GET_SEARCH_RESULT, getSearchResultApi);
}

//get deviceSettings
function* getDeviceSettingData(payload) {
  console.log("device setting", payload);
  try {
    let form = new FormData();
    form.append("status", 1);
    var response = yield axios
      .request({
        method: "post",
        url: "https://hostel.bitsmind.com/API/Hostel/DeviceSetting",
        headers: "",
        data: form,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    console.log("device setting response", response.data.setting);
    yield put({
      type: DISPLAY_DEVICE_SETTING,
      payload: response.data.setting,
    });
  } catch (error) {
    console.log(error);
  }
}
function* getDeviceSetting() {
  yield takeEvery(GET_DEVICE_SETTING, getDeviceSettingData);
}

export default function* rootSaga() {
  yield all([
    loginprocess(),
    hostelList(),
    ReaderStatus(),
    getMessageList(),
    getStudentList(),
    getWardenList(),
    getUserList(),
    getDevicesList(),
    getStudentGroup(),
    forgotpassword(),
    getCommand(),
    getCommandStatus(),
    postingTheCommand(),
    studentGroupDropdown(),
    postDevice(),
    getTravelStatus(),
    getStudentDetails(),
    getReports(),
    getDatewiseExitReport(),
    getDatewiseEntryReport(),
    getStudentTripReport(),
    getSTudentTripByid(),
    postUpdateWarden(),
    getDashBoard(),
    getTodayStatus(),
    getSMSOutbox(),
    getTravel(),
    getSMSPendingReport(),
    getSTudentGroupReport(),
    getStudentPresentReport(),
    getManual(),
    getSort(),
    getStudentAbsentReport(),
    getSystemEvents(),
    SMSupdate(),
    RightsUpdate(),
    getSearch(),
    getDeviceSetting(),
  ]);
}
