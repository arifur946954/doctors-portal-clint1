import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppoinmentOption from './AppoinmentOption';

const AvailableAppoinment = ({setSelectedDate,selectedDate}) => {
    const [tretment,setTreatment]=useState(null)
   const [appoinmetOption,setApoinmentOption]= useState([])
   useEffect(()=>{
    fetch('AppoinmentOption.json')
    .then(res=>res.json())
    .then(data=>setApoinmentOption(data))
   },[])
   let footers= <p>Please pick a day.</p>;
    if (selectedDate) {
     footers = <p>Available appoinment is: {format(selectedDate, 'PP')}.</p>;
    }
   
    return (
        <section>
         <div>
          <p className='text-accent text-center text-2xl'>{footers}. </p>
          </div> 

          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        {
              appoinmetOption.map(appoinment=><AppoinmentOption
              key={appoinment.id}
              appoinment={appoinment}
              setTreatment={setTreatment}
              ></AppoinmentOption>)
        }
          </div>
        {  tretment && 
        <BookingModal
        selectedDate={selectedDate}
          tretment={tretment}
          setTreatment={setTreatment}
          ></BookingModal>
          }
        </section>
    );
};

export default AvailableAppoinment;