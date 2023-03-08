import React, { useState } from 'react';
import chair from '../../../images/assets/pic/chair.png'
import MakeButton from '../../Shared/MakeButton';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';


const AppoinmentBanner = ({setSelectedDate,selectedDate}) => {
 
  
    return (      
      <div>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
    <DayPicker
       mode="single"
       selected={selectedDate}
       onSelect={setSelectedDate}
      
    
    />
    {/* <p>You picked {format(selected, 'PP')}.</p>; */}
    </div>
  
  </div>
</div>
      </div>
    );
};   

export default AppoinmentBanner;