import {CHANGE_COMPONENT, CHECK_THE_REDUCER,
        GET_READERONLINE_STATUS,
        READER_HEADER,
        GET_HOSTELACCOUNT_DETAILS,
        GET_READERSETTING_DETAILS,
        HOSTEL_DETAILS_INPUT_CHANGE,
        GET_HOSTELLIST,
        UPDATE_NEWDEVICE,
        UPDATE_NEW_HOSTEL,
        GET_SMS_OUTBOX,
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
    VALID_EMAILID
   
        
       
} from "../ActionTypes/ActionTypes";
export const checktheaction=()=>{
 
    return{
        type:CHECK_THE_REDUCER,
        payload:""
    }
}
export const changeComponentHeader=()=>{
 
    return{
        type:CHANGE_COMPONENT,
        payload:""
    }
}
export const getReaderOnlineStatus=(props)=>{
   
    return {
        type:GET_READERONLINE_STATUS,
        payload:props,
    }
}
export const readerStatusHeader=(props)=>{
   
    return {
        type:READER_HEADER,
        payload:props,
    }
}
export const getHostelAccount=(props)=>{
   
    return{
        type:GET_HOSTELACCOUNT_DETAILS,
        payload:props,
    }
}
export const getReaderSetting=(props)=>{
   
    return {
        type:GET_READERSETTING_DETAILS,
        payload:props,
    }
}
export const getSmsOutbox=(props)=>{
    return{
      type:GET_SMS_OUTBOX,
      payload:props
    }
  }
export const HostelActionDetails ={
    hostelDetailsInputChange,
    getHostelList,
    saveNewDeviceUpdate,
    updateNewHostel,
    hostelValidation,
    validation

};

function hostelDetailsInputChange(props){
  
    return {
        type: HOSTEL_DETAILS_INPUT_CHANGE,
       payload:props
    
}
}
function getHostelList(props){
  
    return {
        type:GET_HOSTELLIST,
        payload:"",
    }
}
function saveNewDeviceUpdate(props){
   
    return{
        type:UPDATE_NEWDEVICE,
        payload:props,
    }
}
function updateNewHostel(props){
    return {
        type:UPDATE_NEW_HOSTEL,
        payload:props,
    }
}
function validation(props) {
    let hostelIdError = "",
        descriptionError = "",
        deviceError = "",
        deviceTypeError = "",
        inActiveError = "",
        devicemodalError = "",
        serialNumberError = "",
        simPhNumberError = "",
        simIdError = "",
        imeinumberError = "",
        codeVersionError = "",
        featureSetError = "",
        readertype1Error = "",
        readertype2Error = "",
        accessmode1Error = "",
        accessmode2Error = "";

    if (!props.hostelId) {
        hostelIdError = HOSTELID_ERROR;
    }
    if (!props.description) {
        descriptionError = DESCRIPTION_ERROR;
    }
    if (!props.device) {
        deviceError = DEVICE_ERROR;
    }
    if (!props.deviceType) {
        deviceTypeError = DEVICETYPE_ERROR;
    }
    if (!props.inActive) {
        inActiveError = INACTIVE_ERROR;
    }
    if (!props.devicemodal) {
        devicemodalError = DEVICEMODAL_ERROR;
    }
    if (!props.serialNumber) {
        serialNumberError = SERIALNUMBER_ERROR;
    }
    if (!props.simPhNumber) {
        simPhNumberError = SIMPHNUMBER_ERROR;
    }
    if (!props.simId) {
        simIdError = SIMID_ERROR;
    }
    if (!props.imeinumber) {
        imeinumberError = IMEINUMBER_ERROR;
    }
    if (!props.codeVersion) {
        codeVersionError = CODEVERSION_ERROR;
    }
    if (!props.featureSet) {
        featureSetError = FEATURESET_ERROR;
    }
    if (!props.readertype1) {
        readertype1Error = READERTYPE1_ERROR;
    }
    if (!props.readertype2) {
        readertype2Error = READERTYPE2_ERROR;
    }
    if (!props.accessmode1) {
        accessmode1Error = ACCESSMODE1_ERROR;
    }
    if (!props.accessmode2) {
        accessmode2Error = ACCESSMODE2_ERROR;
    }
    if (
        hostelIdError ||
        descriptionError ||
        deviceError ||
        deviceTypeError ||
        inActiveError ||
        devicemodalError ||
        serialNumberError ||
        simPhNumberError ||
        simIdError ||
        imeinumberError ||
        codeVersionError ||
        featureSetError ||
        readertype1Error ||
        readertype2Error ||
        accessmode1Error ||
        accessmode2Error
     ) {

        console.log("first Click");
        return {
            type: NEWDEVICE_VALIDATION,
            payload: {
                hostelIdError,
                descriptionError,
                deviceError,
                deviceTypeError,
                inActiveError,
                devicemodalError,
                serialNumberError,
                simPhNumberError,
                simIdError,
                imeinumberError,
                codeVersionError,
                featureSetError,
                readertype1Error,
                readertype2Error,
                accessmode1Error,
                accessmode2Error
            },
        }
    } else 
    console.log("second Click");
        return{
            type: UPDATE_NEWDEVICE,
            payload: props,
        };
}
function hostelValidation(props) {
    let  hostelNameError="",
    hostelCodeError="",
    nameError="",
    numberError="",
    emailError="",
    maxDeviceError="";

    if(!props.hostelName){
        hostelNameError = HOSTELID_ERROR
    }
    if (props.hostelName) {
        var re =/^[a-zA-Z ]*$/;
        var isValid = re.test(props.hostelName);
        if (!isValid) {
            hostelNameError = "Accepts only alpha";
        }
      }
    if(!props.hostelCode){
        hostelCodeError = HOSTELCODE_ERROR
    }
    if(!props.contactName){
        nameError = NAME_ERROR
    }
    if(!props.contactNumber){
        numberError = NUMBER_ERROR
    }
    if(!props.email){
        emailError = EMAIL_ERROR
    }
      if (props.email) {
        var re =
          /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
        var isValid = re.test(props.email);
        if (!isValid) {
            emailError = VALID_EMAILID;
        }
      }
    if(!props.maxDevice){
        maxDeviceError = MAXDEVICE_ERROR
    }
    if( 
        hostelNameError||
        hostelCodeError||
        nameError||
        numberError||
        emailError||
        maxDeviceError
    ) {
        return {
            type:NEWHOSTEL_VALIDATION,
            payload:{
                hostelNameError,
                hostelCodeError,
                nameError,
                numberError,
                emailError,
                maxDeviceError,
            },
        }
    }
    else
    return {
        type: UPDATE_NEW_HOSTEL,
        payload: props,
    }
}