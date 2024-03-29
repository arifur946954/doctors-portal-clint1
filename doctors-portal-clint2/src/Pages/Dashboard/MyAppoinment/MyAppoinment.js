import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/Authprovider';

const MyAppoinment = () => {
  const {user}=  useContext(AuthContext);
  const url=`http://localhost:5000/bookings?email=${user?.email}`
  const {data:bookings=[]}=useQuery({
    queryKey:['bookings',user?.email],
    queryFn:async()=>{
        const res=await fetch(url,{
            headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
           
        });
       
        const data=await res.json(); 
        return data;
    }
  })
    return (
        <div>
        <div className='text-3xl mb-5'>
        <h1>My Appoinment</h1> 
        </div>



           <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>Dises Name</th>
        <th>Date</th>
        <th>Time</th>
      </tr>
    </thead>

    <tbody>
 
   {
    bookings.map((booking,i)=><tr>
        
            <th>{i+1}</th>
        <th>{booking.name}</th>
        <th>{booking.Tname}</th>
        <th>{booking.appoinmentDate
}</th>
        <th>{booking.slot}</th> 
        </tr>
    )
   }
   
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppoinment;