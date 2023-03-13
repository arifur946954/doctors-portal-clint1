import React from 'react';
import MakeButton from '../../Shared/MakeButton';


const AppoinmentOption = ({ appoinment, setTreatment}) => {
    const {name,slots}=appoinment;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="text-bold text-accent text-2xl text-center">{name}</h2>
    <p className='text-center'>{slots.length>0 ? slots[0] : <section className='text-red'>Try Another Day</section>}</p>
   
    <p className='text-center'>{slots.length} {slots.length>1 ? "Spaces are" :"Space is"} Available </p>
    <p></p>
    <div className="card-actions justify-center">
    {/* <MakeButton>Book Appoinment</MakeButton> */}

 <label 
 disabled={slots.length===0}
     onClick={()=>setTreatment(appoinment)}
     htmlFor="booking-modal"
     className="btn btn-accent text-white"
     >Book Appoinment</label>


    </div>
  </div>
</div>
        </div>
    );
};

export default AppoinmentOption;




