import React, { Component } from 'react';
import Time from '../Time';


class DateAndTime extends Component {
    constructor() {
        super();
      var today = new Date(),
      date =today.getDate() + "-"+ (today.getMonth() + 1) + '-' + today.getFullYear() ;
      this.state = {
        currentDate: date
      }
    }
    
   render() {
      return (
        <div>
            <div className='row'>
                <div>
         Date :{ this.state.currentDate }
           </div>
           <div className='pl-4'>
           <Time/>
           </div>
           </div>
        </div> 
      );  
    }  
  }
export default DateAndTime;