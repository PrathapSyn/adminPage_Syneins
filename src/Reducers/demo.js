import {CHECK_THE_REDUCER,
CHANGE_COMPONENT,
CHANGE_COMPONENT_BACK,
DISPLAY_READER_HEADER,
GET_READERONLINE_STATUS,
DISPLAY_READERONLINE_STATUS,
READER_HEADER,
GET_HOSTELACCOUNT_DETAILS,
  DISPLAY_HOSTEL_ACCOUNT_DETAILS,
  GET_READERSETTING_DETAILS,
  DISPLAY_READERSETTING_DETAILS,
  GET_HOSTELLIST,
  DISPLAY_HOSTELLIST,
  UPDATE_NEWDEVICE,
  HOSTEL_DETAILS_INPUT_CHANGE,
  UPDATE_NEW_HOSTEL,
  GET_SMS_OUTBOX,
  DISPLAY_SMS_OUTBOX,
  DESCRIPTION_ERROR,
  DEVICE_ERROR,
  DEVICETYPE_ERROR,
  INACTIVE_ERROR,
  DATE_ERROR,
  DEVICEMODAL_ERROR,
  SIMPHNUMBER_ERROR,
  SIMID_ERROR,
  IMEINUMBER_ERROR,
  CODEVERSION_ERROR,
  FEATURESET_ERROR,
  READERTYPE1_ERROR,
  READERTYPE2_ERROR,
  ACCESSMODE1_ERROR,
  ACCESSMODE2_ERROR,
  SERIALNUMBER_ERROR,
  NEWDEVICE_VALIDATION,
  HOSTELID_ERROR,
  MAXDEVICE_ERROR,
  EMAIL_ERROR,
  NUMBER_ERROR,
  NAME_ERROR,
  HOSTELCODE_ERROR,
  NEWHOSTEL_VALIDATION,
  VALID_EMAILID,
  VALIDATION_ERROR
 
} from "../ActionTypes/ActionTypes";

const INITIAL_STATE={
  changeComponent:true,
  readerOnlineHeader:[],
    dispalyReaderHeader:[],
    readerOnlinestatus:[],
    dispalyReaderStatus:[],
    displayHostel:[],
    displayReader:[],
    dispalyReaderStatus:[],
    hostelList:[],
    displaySmsoutbox:[],
    travelDesk:[],
    hostelId:"",
    hostelIdError:"",
    description:"",
      device:"",
      deviceType:"",
      inActive:"",
      date:new Date(),
      fromDate:new Date().setHours(12, 0, 0),
      devicemodal:"",
      serialNumber:"",
      simPhNumber:"",
      simId:"",
      imeinumber:"",
      codeVersion:"",
      featureSet:"",
      readertype1:"",
      readertype2:"",
      accessmode1:"",
      accessmode2:"",
      hostelName:"",
      hostelCode:"",
      contactName:"",
      contactNumber:"",
      maxDevices:"",
      name:"",
      number:"",  
      loading:false,
      hostelIdError: "",
      descriptionError: "",
      deviceError: "",
      deviceTypeError: "",
      inActiveError: "",
      dateError: "",
      devicemodalError: "",
      serialNumberError: "",
      simPhNumberError: "",
      simIdError: "",
      imeinumberError: "",
      codeVersionError: "",
      featureSetError: "",
      readertype1Error: "",
      readertype2Error: "",
      accessmode1Error: "",
      accessmode2Error: "",
      hostelNameError:"",
      hostelCodeError:"",
      nameError:"",
      numberError:"",
      emailError:"",
      maxDeviceError:"",
}
export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        
      case CHECK_THE_REDUCER:
     
        return { ...state, [payload.props]: payload.value, [payload.error]: "" };

        case CHANGE_COMPONENT:
          return{
            ...state,
            changeComponent:false
          }
          

          case CHANGE_COMPONENT_BACK:
            return{
              ...state,
              changeComponent:true
            }
            case GET_READERONLINE_STATUS:
          console.log("getreader",payload)
          return {
            ...state,
            readerOnlinestatus:payload,
          }
        case DISPLAY_READERONLINE_STATUS:
          return {
            ...state,
            dispalyReaderStatus:payload
          }
        case READER_HEADER:
          console.log("header reducer",payload)
          return {
            ...state,
            readerOnlineHeader:payload,
          }
        case DISPLAY_READER_HEADER:
          console.log("display header reducer",payload)
          return {
            ...state,
            dispalyReaderHeader:payload,
          }
          case GET_HOSTELACCOUNT_DETAILS:
            console.log("get hostel reducer")
            return {
              ...state,
              hostelsetting:payload
            };
          case DISPLAY_HOSTEL_ACCOUNT_DETAILS:
            return {
              ...state,
              displayHostel:payload
            }
            case GET_READERSETTING_DETAILS:
              console.log("get device reducer")
              return {
                ...state,
                deviceReader:payload
              }
            case DISPLAY_READERSETTING_DETAILS:
              return {
                ...state,
                displayReader:payload
              }
            case HOSTEL_DETAILS_INPUT_CHANGE:
              return { 
                ...state, 
                [payload.prop]: payload.value, 
                [payload.error]: "" 
              };
            case GET_HOSTELLIST:
             console.log("getHostelList reducer",payload)
              return {
                ...state,
                loading:true,
              };
            case DISPLAY_HOSTELLIST:
              console.log("display reducers",payload)
              return {
                ...state,
                loading:false,
                hostelList:payload,
              }
            case UPDATE_NEWDEVICE:
              console.log("reducer post",payload)
              return{
                ...state,
                loading:true,
              }
            case UPDATE_NEW_HOSTEL:
              console.log("reducer post hostel",payload)
              return {
                ...state,
                loading:true,
              }
              case GET_SMS_OUTBOX:
                return{
                  ...state,
                loading:true     
              }
              case DISPLAY_SMS_OUTBOX:
                return {
                  ...state,
                  displaySmsoutbox:payload,
                }
                case VALIDATION_ERROR:
                  return {
                    ...state,
                    loading: false,
                    hostelIdError: "",
                    descriptionError: "",
                    deviceError: "",
                    deviceTypeError: "",
                    inActiveError: "",
                    dateError: "",
                    devicemodalError: "",
                    serialNumberError: "",
                    simPhNumberError: "",
                    simIdError: "",
                    imeinumberError: "",
                    codeVersionError: "",
                    featureSetError: "",
                    readertype1Error: "",
                    readertype2Error: "",
                    accessmode1Error: "",
                    accessmode2Error: ""
                  }
                case NEWDEVICE_VALIDATION:
                  console.log("reducernewdevice validation", payload)
                  return {
                    ...state,
                    hostelIdError: payload.hostelIdError,
                    descriptionError: payload.descriptionError,
                    deviceError: payload.deviceError,
                    deviceTypeError: payload.deviceTypeError,
                    inActiveError: payload.inActiveError,
                    dateError: payload.dateError,
                    devicemodalError: payload.devicemodalError,
                    serialNumberError: payload.serialNumberError,
                    simPhNumberError: payload.simPhNumberError,
                    simIdError: payload.simIdError,
                    imeinumberError: payload.imeinumberError,
                    codeVersionError: payload.codeVersionError,
                    featureSetError: payload.featureSetError,
                    readertype1Error: payload.readertype1Error,
                    readertype2Error: payload.readertype2Error,
                    accessmode1Error: payload.accessmode1Error,
                    accessmode2Error: payload.accessmode2Error
                  }
                  case NEWHOSTEL_VALIDATION:
                    return {
                    hostelNameError:payload.hostelNameError,
                    hostelCodeError:payload.hostelCodeError,
                    nameError:payload.nameError,
                    numberError:payload.numberError,
                    emailError:payload.emailError,
                    maxDeviceError:payload.maxDeviceError,
                    }            
        default:
            return { ...state };
    }
}