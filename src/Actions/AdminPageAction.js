import { useThemeProps } from "@mui/material";
import {
  CHANGE_THE_VALUES,
  SIGNIN_PROCESS,
  SIGNOUT_USER,
  CHANGE_LINK,
  HOSTEL_LIST,
  READER_STATUS,
  GET_STUDENT_LIST,
  GET_MESSAGE_LIST,
  GET_WARDEN_LIST,
  HOSTEL_NAME_SELECTED,
  GET_USER_LIST,
  GET_DEVICE_LIST,
  GET_STUDENT_GROUP,
  CHANGE_PASSWORD,GET_COMMAND_LIST,
  GET_COMMAND_STATUS,
  SELECTED_COMMAND,
  POST_THE_COMMAND,
  REPORT_ID_CHANGE,
  SHOW_THE_ICONS,
  GET_STUDENT_GROUP_LIST,
  POST_DEVICE_SETTING,
  GET_STUDENT_DETAILS,
  GET_RFID_RECORD,
  GET_DATE_WISE_EXIT,
  GET_DATE_WISE_ENTRY,
  GET_STUDENT_TRIP,
  GET_STUDENT_TRIP_BY_ID,
  POST_WARDEN_DETAILS,
  GET_DASHBOARD_DATA,
  GET_TODAY_STATUS,
  GET_SMS_OUTBOX,
  GET_TRAVEL_DESK,
  GET_STATUS_VIEW,
  GET_SMS_PENDING_REPORT,
  GET_STUDENT_GROUP_REPORT,
  GET_STUDENT_PRESENT_REPORT,
  GET_TRAVEL_SORT_DATA,
  GET_MANUAL_DATA,
  STUDENT_ABSENT_LIST,
  SYSTEM_LOG_REPORT,
  SMS_INPUT_CHANGE,
  SMS_UPDATE,
  RIGHT_UPDATE,
  GET_SEARCH_RESULT,
  GET_DEVICE_SETTING

} from "../ActionTypes/ActionTypes";

export const InputChange = (props) => {
  return {
    type: CHANGE_THE_VALUES,
    payload: props,
  };
};
export const smsInputChange = (props) => {
  return {
    type: SMS_INPUT_CHANGE,
    payload: props,
  };
};

export const signInProcess = (props) => {
  return {
    type: SIGNIN_PROCESS,
    payload: props,
  };
};
export const userLogout = () => {
  return {
    type: SIGNOUT_USER,
    payload: "",
  };
};

export const changelink = () => {
  return {
    type: CHANGE_LINK,
    payload: "",
  };
};
export const hostelListdisplay = () => {
  return {
    type: HOSTEL_LIST,
    payload: "",
  };
};

export const ReaderStatus = () => {
  return {
    type: READER_STATUS,
    payload: "",
  };
};

export const getStudentList=(props)=>{
  return{
    type:GET_STUDENT_LIST,
    payload:props,
  }
}

export const messageSetting=()=>{
 
  return{
    type:GET_MESSAGE_LIST,
    payload:"",
  }
}

export const getWardenList=(props)=>{
  return{
    type:GET_WARDEN_LIST,
    payload:props
  }
}
export const hostelNameSelected=(props)=>{
  return{
    type:HOSTEL_NAME_SELECTED,
    payload:props
  }
}
export const getUserSetting=(props)=>{
  return{
    type:GET_USER_LIST,
    payload:props
  }
}
export const getDevicesList=()=>{
  return{
    type:GET_DEVICE_LIST,
    payload:""
  }
}
export const getStudentGroupList=(props)=>{
 
  return{
    type:GET_STUDENT_GROUP,
    payload:props
  }
}

export const forgotPassword=(props)=>{
  return{
    type:CHANGE_PASSWORD,
    payload:props
  }
}
export const getCommandList=()=>{
 
  return{
    type:GET_COMMAND_LIST,
    payload:""
  }
}
export const commandStatus=()=>{
  return{
    type:GET_COMMAND_STATUS,
    payload:""
  }
}

export const SelectedCommand=(props)=>{
  return{
    type:SELECTED_COMMAND,
    payload:props
  }
}

export const postTheCommand=(props)=>{
  return{
    type:POST_THE_COMMAND,
    payload:props
  }
}
export const postDeviceSetting=(props)=>{

  return {
      type:POST_DEVICE_SETTING,
      payload:props
  }
}
export const reportId=(props)=>{
  return{
    type:REPORT_ID_CHANGE,
    payload:props
  }

}
export const showRecords=()=>{
  return{
    type:SHOW_THE_ICONS,
    payload:""
  }
}

export const getStudentDetails=(props)=>{
  return{
    type:GET_STUDENT_DETAILS,
    payload:props
  }
}

export const getRfidCardEvent=(props)=>{
  return{
    type:GET_RFID_RECORD,
    payload:props
  }
}

export const getDateWiseExit=(props)=>{
  return{
    type:GET_DATE_WISE_EXIT,
    payload:props
  }
}
export const getDatewiseEntry=(props)=>{
  return{
    type:GET_DATE_WISE_ENTRY,
    payload:props
  }
}
export const getStudentTrip=(props)=>{
  return{
    type:GET_STUDENT_TRIP,
    payload:props
  }
}
export const getStudentTripById=(props)=>{
  return{
    type:GET_STUDENT_TRIP_BY_ID,
    payload:props
  }
}
export const postNewWarden=(props)=>{
 
  return {
    type:POST_WARDEN_DETAILS,
    payload:props
  }
}
export const getDashBoard=(props)=>{
  return{
    type:GET_DASHBOARD_DATA,
    payload:props
  }
}
export const getTodayStatus=(props)=>{
  return{
    type:GET_TODAY_STATUS,
    payload:props
  }
}
export const getTravelDeskData=(props)=>{
  return {
    type:GET_TRAVEL_DESK,
    payload:props
  }
}
export const getStatusView=(props)=>{
  return {
    type:GET_STATUS_VIEW,
    payload:props
  }

}
export const SmsPending=(props)=>{
  return{
    type:GET_SMS_PENDING_REPORT,
    payload:props
  }
}

export const StudentGroupReport=(props)=>{
  return{
    type:GET_STUDENT_GROUP_REPORT,
    payload:props
  }
}
//mineeeee

export const getStudentPresent=(props)=>{
  return{
    type:GET_STUDENT_PRESENT_REPORT,
    payload:props
  }
}
export const getManualdata=(props)=>{
  return {
    type:GET_MANUAL_DATA,
    payload:props
  }
}
export const getTravelSortData=(props)=>{
  console.log("sdsdsvsdvsdv",props);
  return {
    type:GET_TRAVEL_SORT_DATA,
    payload:props
  }
}
export const getStudentAbsent=(props)=>{
  console.log("action type",props)
  return{
    type:STUDENT_ABSENT_LIST,
    payload:props
  }
}

export const getSystemReport=(props)=>{
  return{
    type:SYSTEM_LOG_REPORT,
    payload:props
  }
}

export const UpdatingSMSFormat=(props)=>{
  return{
    type:SMS_UPDATE,
    payload:props
  }
}
export const UpdateTheRights=(props)=>{
return{
  type:RIGHT_UPDATE,
  payload:props
}
}

export const getSearchQuery=(props)=>{
  return{
    type:GET_SEARCH_RESULT,
    payload:props
  }
}
export const getDeviceSetting=(props)=>{
  return{
    type:GET_DEVICE_SETTING,
    payload:props
  }

}