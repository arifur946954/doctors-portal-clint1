import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({tretment,selectedDate,setTreatment}) => {
    const {slots,name}=tretment;
   let date = format(selectedDate, 'PP')

   const handleSubmit=event=>{
    event.preventDefault();
    const form= event.target;
    const name=form.name.value;
    const email=form.email.value;
    const slot=form.slot.value;
    const date=form.date.value;
    const phone=form.phone.value;

    const booking={
        name,
        tretment:name,//here tretment = tretment.name;
        email,
        slot,
        date,
        phone,
        
    }
   

    console.log(booking);
    setTreatment(null);
 

    
   }

    return (
        <>
           <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{tretment.name}</h3>
   <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-8'>
   <input name="date" type="text"value={date} disabled    className="input input-bordered" />
{/* slot option start from here */}
<select name="slot" className="select select-bordered w-full">
  
  {
    slots.map(slot=><option value={slot}> {slot}</option>)
  }

</select>
{/* slot option end from here */}

   <input name="name" type="name" placeholder="Type here" className="input input-bordered" />
   <input name="email" type="emil" placeholder="Type here" className="input input-bordered" />
   <input name="phone" type="phone" placeholder="Type here" className="input input-bordered" />
   <input name="submit" type="submit" placeholder="Type here" className="text-white btn btn-accent" />

   </form>
  </div>
</div> 
        </>
    );
};

export default BookingModal;