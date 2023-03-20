
import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/Authprovider';

const BookingModal = ({tretment,selectedDate,setTreatment,refetch}) => {
    const {slots,name}=tretment;
    const {user}=useContext(AuthContext);
   let date = format(selectedDate, 'PP')

   const handleSubmit=event=>{
    event.preventDefault();
    const form= event.target;
    const name=form.name.value;
    const email=form.email.value;
    const slot=form.slot.value;
    // const appoinmentDate=form.date.value;
    const phone=form.phone.value;

    const booking={
      appoinmentDate:date,
       Tname:tretment.name,//here tretment = tretment.name;
        email,
        slot,
        name,
        phone
        
    }
    console.log(booking);

    // send data to the server
    fetch('http://localhost:5000/bookings',{
      method:'POST', 
      headers:{'content-type':'application/json'},
      body:JSON.stringify(booking)
    })
    .then(res=>res.json())
    .then(data=>{console.log(data);
     if(data.acknowledged){
      setTreatment(null);
      toast.success("successfully Booked")
      refetch()
     }
     else{
      toast.error(data.message)
     }
    })
   

    console.log(booking);
   
 

    
   }

    return (
        <>
           <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 name="dises" className="text-lg font-bold">{name}</h3>
   <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-8'>
   <input name="date" type="text"value={date} disabled    className="input input-bordered" />
{/* slot option start from here */}
<select name="slot" className="select select-bordered w-full">
  
  {
    slots.map(slot=><option value={slot}> {slot}</option>)
  }

</select>
{/* slot option end from here */}

   <input name="name" type="name" defaultValue={user ?.displayName} disabled className="input input-bordered" />
   <input name="email" type="emil" defaultValue={user ?.email} disabled className="input input-bordered" />
   <input name="phone" type="phone" placeholder="Type here" className="input input-bordered" />
   <input name="submit" type="submit" placeholder="Type here" className="text-white btn btn-accent" />

   </form>
  </div>
</div> 
        </>
    );
};

export default BookingModal;













