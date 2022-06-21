import {REPORT_CHANGE,CHANGE_TO_NUMBER} from "../ActionTypes/ActionTypes"

export const reportChange=(props)=>{
    return{
        type:REPORT_CHANGE,
        payload:props
    }
} 

export const changetoNumber=()=>{
    return{
        type:CHANGE_TO_NUMBER,
        payload:""
    }
}