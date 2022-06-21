import { REPORT_CHANGE } from "../ActionTypes/ActionTypes";

const INITIAL_STATE={
        reportChange:window.sessionStorage.getItem("ReportData"),
        toDate:new Date(),
        fromDate:new Date().setHours(12, 0, 0),
        groupSelect:"",
        rollNo:"",
        userId:"",
        tripId:"",
        hostelId:window.sessionStorage.getItem("key"),
        currentDate:new Date(),


        reportChangeError:"",
        fromDateError:"",
        toDateError:"",
        groupSelectError:"",
        rollNoError:"",
        userIdError:"",
        tripIdError:"",
}
export default (state=INITIAL_STATE,{ type,payload}) =>{
 switch (type) {
     case REPORT_CHANGE:
         return{
            ...state,
            [payload.props]: payload.value,
            [payload.error]: "" 
         }
     default:
         return{
             ...state
         }
 }

}