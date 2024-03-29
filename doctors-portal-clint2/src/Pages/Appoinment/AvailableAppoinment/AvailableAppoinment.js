import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppoinmentOption from './AppoinmentOption';

const AvailableAppoinment = ({setSelectedDate,selectedDate}) => {
    const [tretment,setTreatment]=useState(null)
    const date=format(selectedDate, 'PP')
  //  const [appoinmetOption,setApoinmentOption]= useState([])

   const {data:appoinmetOption=[],refetch}=useQuery({
    //after appoinment option date use for reload
    queryKey:['appoinmetOption',date],
    queryFn:async()=>{
    // const res=await fetch("AppoinmentOption.json");
      const res=await fetch(`http://localhost:5000/appoinmentOption2?date=${date}`);
      
      const data=await res.json();
      return data;
    }
  
   })
  //  useEffect(()=>{
  //   fetch('http://localhost:5000/appoinmentOption2')
    
  //   // fetch('AppoinmentOption.json')
  //   .then(res=>res.json())
  //   .then(data=>setApoinmentOption(data))
  //  },[])
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
          refetch={refetch}
          ></BookingModal>
          }
        </section>
    );
};

export default AvailableAppoinment;

