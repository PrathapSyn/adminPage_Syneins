import {
  CHANGE_THE_VALUES,
  SIGNIN_PROCESS,
  SIGNIN_SUCCESS,
  SIGNOUT_USER,
  CHANGE_LINK,
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
  HOSTEL_NAME_SELECTED,
  DISPLAY_USER_LIST,
  GET_USER_LIST,
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
  REPORT_ID_CHANGE,
  SHOW_THE_ICONS,
  GET_STUDENT_GROUP_LIST,
  DISPLAY_GROUP_DROP_DOWN,
  POST_DEVICE_SETTING,
  GET_DASHBOARD_DATA,
  DISPLAY_DASHBOARD_DATA,
  GET_TODAY_STATUS,
  DISPLAY_TODAY_STATUS,
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
  GET_SMS_OUTBOX,
  DISPLAY_SMS_OUTBOX,
  GET_TRAVEL_DESK,
  DISPLAY_TRAVEL_DESK,
  GET_STATUS_VIEW,
  DISPLAY_STATUS_VIEW,
  GET_STUDENT_GROUP_REPORT,
  DISPLAY_STUDENT_GROUP_REPORT,
  GET_SMS_PENDING_REPORT,
  DISPLAY_SMS_PENDING_REPORT,
  GET_STUDENT_PRESENT_REPORT,
  DISPLAY_STUDENT_PRESENT_REPORT,
  GET_MANUAL_DATA,
  DISPLAY_MANUAL_DATA,
  GET_TRAVEL_SORT_DATA,
  DISPLAY_SORT_DATA,
  DISPLAY_STUDENT_ABSENT_REPORT,
  STUDENT_ABSENT_LIST,
  SYSTEM_LOG_REPORT,
  DISPLAY_SYSTEM_REPORT,
  SMS_INPUT_CHANGE,
  SMS_UPDATE,
  SMS_UPDATE_RETURN,
  RIGHT_UPDATE,
  GET_SEARCH_RESULT,
  DISPLAY_SEARCH_RESULT,
  GET_DEVICE_SETTING,
  DISPLAY_DEVICE_SETTING
} from "../ActionTypes/ActionTypes";

const INITIAL_STATE = {
  uid:"",
  loading: false,
  UserRightsId:"",
  changetheLink: "/Home",
  logintoken: JSON.parse(localStorage.getItem("user")),
  userDetails: JSON.parse(localStorage.getItem("PersonalInfo")),
  localTime: localStorage.getItem("date"),
  messageSetting: [],
  studentList: [],
  wardenList: [],
  systemReportDisplay:[],
  userList: [],
  devicesList: [],
  studentGroupList: [],
  commandList: [],
  hostelNameSelected:window.sessionStorage.getItem("keyName"),
  hostelList: [],
  commandStatusList: [],
  DatewiseEntryReport: [],
  StudentTripReport: [],
  dashboardData: [],
  todayStatus: [],
  travelDeskDisplay: [],
  StudentTripById: "",
  SMSOutbox: [],
  displaySmsoutbox: [],
  groupId: "",
  smsInput:"",
  MessageId:"",
  changeId: "",
  TravelDeskId: "",
  deviceIdCommand: "",
  loginToken: "",
  reportIdChange: "",
  SelectedHostel:window.sessionStorage.getItem("key"),
  hostelId: "",
  userId: "",
  password: "",
  SearchOrderText:"",
  SearchOrder:"",
  userRole: "",
  userGender: "",
  userContactName: "",
  userContactNumber: "",
  userEmailId: "",
  userStatus: "",
  ReaderDisplay: "",
  oldPassword: "",
  newPassword: "",
  SelectedTheCommand: "",
  StudentGroupDropDown: [],
  setting: "",
  SMSEnabled: "",
  SMSUrlPassword: "",
  SMSErrorMessage: "",
  DebugOn: "",
  SMSTestMode: "",
  StudentDetails: "",
  orderBy:"",
  displaySortData:[],
  SearchElement:[],
  DisplayDeviceSetting:"",
  uid:"",
  deviceSetting:"",
  smsProviderName:"",
  settingUserName:"",

  wardenName: "",
  wardenCardNumber: "",
  wardenContactNumber: "",
  wardenBirthDate: "",
  wardenAddress: "",
  wardenEmailId: "",
  RfidCard: [],
  StudentPresentReport: [],
  userName: "",
  password: "",
  showtheRecords: "",
  hostelIdError: "",
  SelectedHostelError: "",
  userIdError: "",
  passwordError: "",
  userRoleError: "",
  userGenderError: "",
  userContactNameError: "",
  userContactNumberError: "",
  userEmailIdError: "",
  userStatusError: "",
  oldPasswordError: "",
  newPasswordError: "",
  displayTravelStatus: "",
  displayManual:"",
  smsenabled:"",
  wardenNameError: "",
  wardenCardNumberError: "",
  wardenContactNumberError: "",
  wardenBirthDateError: "",
  wardenAddressError: "",
  wardenEmailIdError: "",
  deviceIdCommandError: "",
  userNameError: "",
  passwordError: "",
  DateWiseExitReport: [],
  wardenNameError: "",
  wardenCardNumberError: "",
  wardenContactNumberError: "",
  wardenBirthDateError: "",
  wardenAddressError: "",
  wardenEmailIdError: "",
  deviceIdCommandError: "",
};
export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CHANGE_THE_VALUES:
      console.log("props input reducers", payload);
      return {
        ...state,
        [payload.props]: payload.value,
        [payload.error]: "",
      };
    case SMS_INPUT_CHANGE:
      return {
        ...state,
        [payload.props]: payload.value,
        [payload.error]: "",
      };
    case SIGNIN_PROCESS:
      return {
        ...state,
        loading: true,
      };

    case SIGNIN_SUCCESS:
      //console.log("this is payload", payload.loginToken);
      return {
        ...state,
        logintoken: payload.loginToken,
      };

    case SIGNOUT_USER:
      return {
        ...state,
        logintoken: localStorage.removeItem("user"),
       SelectedHostel:window.sessionStorage.removeItem("key"),
       SelectedHostel:window.sessionStorage.removeItem("keyName"),
        changetheLink: "/",
      };

    case CHANGE_SUCCESS:
      return {
        ...state,
        changetheLink: payload,
      };

    case HOSTEL_LIST:
      return {
        ...state,
        loading: true,
      };

  
      case DISPLAY_HOSTEL_LIST:

        return {
          ...state,
          loading: false,
          hostelList: payload,
        };
  
      case READER_STATUS:
        return {
          ...state,
          loading: true,
        };
  
      case DISPLAY_THE_READER:
        return {
          ...state,
          loading: false,
          ReaderDisplay: payload,
        };
  
      case GET_STUDENT_LIST:
        return {
          ...state,
          loading: true,
        };
  
      case GET_MESSAGE_LIST:
  
        return {
          ...state,
          loading: true,
        };
  
      case DISPLAY_MESSAGE_SETTING:
  
        return {
          ...state,
          loading: false,
          messageSetting: payload,
        };
      case DISPLAY_STUDENT_LIST:
        return {
          ...state,
          loading: false,
          studentList: payload,
        };
      case GET_WARDEN_LIST:
  
        return {
          ...state,
          loading: true,
        };
  
      case DISPLAY_WARDEN_LIST:
  
        return {
          ...state,
          loading: false,
          wardenList: payload,
        };
      case HOSTEL_NAME_SELECTED:
        return {
          ...state,
          hostelNameSelected: payload,
        };
  
      case GET_USER_LIST:
        return {
          ...state,
          loading: false,
        };
      case DISPLAY_USER_LIST:
  
        return {
          ...state,
          loading: false,
          userList: payload,
        };
      case GET_DEVICE_LIST:
        return {
          ...state,
          loading: true,
        };
      case DISPLAY_DEVICES_LIST:
  
        return {
          ...state,
          loading: false,
          devicesList: payload,
        };
  
      case GET_STUDENT_GROUP:
  
        return {
          ...state,
          loading: true,
        };
      case DISPLAY_STUDENT_GROUP:
        return {
          ...state,
          loading: false,
          studentGroupList: payload,
        };
      case CHANGE_PASSWORD:
        return {
          ...state,
          loading: true,
        };
  
      case GET_COMMAND_LIST:
        return {
          ...state,
          loading: true,
        };
  
      case DISPLAY_COMMAND_LIST:
        return {
          ...state,
          loading: false,
          commandList: payload,
        };
      case GET_COMMAND_STATUS:
        return {
          ...state,
          loading: true,
        };
  
      case DISPLAY_COMMAND_STATUS:
        return {
          ...state,
          loading: false,
          commandStatusList: payload,
        };
  
      case SELECTED_COMMAND:
        return {
          ...state,
          SelectedTheCommand: payload,
        };
  
      case POST_THE_COMMAND:
        return {
          ...state,
          loading: true,
        };
      case REPORT_ID_CHANGE:
  
        return {
          ...state,
          reportIdChange: payload,
        };
      case SHOW_THE_ICONS:
        return {
          ...state,
          showtheRecords: "1",
        };
  
      case GET_STUDENT_GROUP_LIST:
        return {
          ...state,
          loading: true,
        };
      case DISPLAY_GROUP_DROP_DOWN:
        return {
          ...state,
          loading: false,
          StudentGroupDropDown: [payload],
        };
      case POST_DEVICE_SETTING:
  
        return {
          ...state,
          loading: true,
        };
  
      case GET_DASHBOARD_DATA:
        return {
          ...state,
          loading: true,
        };
  
      case DISPLAY_DASHBOARD_DATA:
        console.log("dashhhhhhh",payload)
        return {
          ...state,
          loading: false,
          dashboardData: payload,
        };
  
      case GET_TODAY_STATUS:
        return {
          ...state,
          loading: true,
        };
      case DISPLAY_TODAY_STATUS:
        return {
          ...state,
          loading: false,
          todayStatus: payload,
        };
      case DISPLAY_STUDENT_DETAILS:
        return {
          ...state,
          loading: false,
          StudentDetails: payload,
        };
  
      case GET_RFID_RECORD:
        return {
          ...state,
          loading: true,
        };
  
      case DISPLAY_CARD_REPORT:
        return {
          ...state,
          loading: false,
          RfidCard: payload,
        };
  
      case GET_DATE_WISE_EXIT:
        return {
          ...state,
          loading: true,
        };
      case DISPLAY_DATEWISE_EXIT:
        return {
          ...state,
          loading: false,
          DateWiseExitReport: payload,
        };
  
      case GET_DATE_WISE_ENTRY:
        return {
          ...state,
          loading: true,
        };
  
      case DISPLAY_ENTRY_DATA:
        return {
          ...state,
          loading: false,
          DatewiseEntryReport: payload,
        };
  
      case GET_STUDENT_TRIP:
        return {
          ...state,
          loading: true,
        };
  
      case DISPLAY_STUDENT_TRIP:
        return {
          ...state,
          loading: false,
          StudentTripReport: payload,
        };
  
      case GET_STUDENT_TRIP_BY_ID:
        return {
          ...state,
          loading: true,
          
        };
  
      case DISPLAY_STUDENT_TRIP_BY_ID:
        return {
          ...state,
          loading: false,
          StudentTripById: payload,
        };
      case GET_TRAVEL_DESK:
  
        return {
          ...state,
          loading: true,
          
        };
      case DISPLAY_TRAVEL_DESK:
        console.log("display travel 1",payload)
        return {
          ...state,
          travelDeskDisplay: payload,
        };
      case GET_STATUS_VIEW:
        return {
          ...state,
          loading: true,
        };
      case DISPLAY_STATUS_VIEW:
        console.log("institution travel",payload)
        return {
          ...state,
          displayTravelStatus: payload,
        };
      case GET_SMS_PENDING_REPORT:
        return {
          ...state,
          loading: true,
        };
  
      case DISPLAY_SMS_PENDING_REPORT:
        return {
          ...state,
          loading: false,
          smsPendingReport: payload,
        };
      case GET_STUDENT_GROUP_REPORT:
        return {
          ...state,
          loading: true,
        };
      case DISPLAY_STUDENT_GROUP_REPORT:
        return {
          ...state,
          loading: false,
          StudentGroupReport: payload,
        };
  
      case GET_STUDENT_PRESENT_REPORT:
        return {
          ...state,
          loding: true,
        };
  
      case DISPLAY_STUDENT_PRESENT_REPORT:
        return {
          ...state,
          loading: false,
          StudentPresentReport: payload,
        };
      case GET_MANUAL_DATA:
        return {
          ...state,
          loading: true,
        };
      case DISPLAY_MANUAL_DATA:
        return {
          ...state,
          loading: false,
          displayManual: payload,
          travelDeskDisplay:payload
        };
      case GET_TRAVEL_SORT_DATA:
  
        return {
          ...state,
          loading: true,
        }
      case DISPLAY_SORT_DATA:
        return {
          ...state,
          loading: false,
          travelDeskDisplay: payload
        }
      case STUDENT_ABSENT_LIST:
        return {
          ...state,
          loading: true
        }
      case DISPLAY_STUDENT_ABSENT_REPORT:
        return {
          ...state,
          loading: false,
          StudentAbsentList: payload
        }
      case SYSTEM_LOG_REPORT:
        return {
          ...state,
          loading: true
        }
  
      case DISPLAY_SYSTEM_REPORT:
        return {
          ...state,
          loading: false,
          systemReportDisplay: payload
        }
                case GET_MANUAL_DATA:
      return {
        ...state,
        loading: true,
      };

      case SMS_UPDATE:
        return{
          ...state,
          loading:true
        }

        case SMS_UPDATE_RETURN:
          return{
            ...state,
            loading:false,
            messageSetting:payload
          }

          case RIGHT_UPDATE:
            return{
              ...state,
              loading:true
            }


            case GET_SEARCH_RESULT:
              return{
                ...state,
                loading:true
              }

              case DISPLAY_SEARCH_RESULT:
                return{
                ...state,
                loading:false,
                SearchElement:payload
                }
                case GET_DEVICE_SETTING:
                  return {
                    ...state,
                    loading:true
                  };
                case DISPLAY_DEVICE_SETTING:
                  return {
                    ...state,
                    loading:false,
                    DisplayDeviceSetting:payload
                  };
    default:
      return {
        ...state,
      };
  }
};
//mine
