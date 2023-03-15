import React from 'react';
import { toast } from 'react-hot-toast';

const Dashboard = () => {
const handleSubmit=event=>{
    event.preventDefault();
    const form= event.target;
    const name=form.name.value;
    const email=form.email.value;
    const phone=form.phone.value;
const users={name,email,phone}
console.log(users);



fetch('http://localhost:5000/user',{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(users),
    })
    .then(res=>res.json())
    .then(data=>{console.log(data);
     if(data.acknowledged){
        event.target.reset();
      toast.success("successfully insert atata")
     }
    
    })
    .catch((error) => {
        console.error("Error:", error);
})
   


}




    return (
        <div className='flex justify-center mt-14 '>
           <form onSubmit={handleSubmit}> 


           <div className="card w-96 bg-primary text-primary-content">
  <div className="card-body">
  <input type="text"name="name" required placeholder="name" className="input input-bordered input-info w-full max-w-xs" />
  <input type="email" name="email" required placeholder="email" className="input input-bordered input-info w-full max-w-xs" />
  <input type="phone" name="phone" required placeholder="phone" className="input input-bordered input-info w-full max-w-xs" />

    <div className="card-actions justify-center">
      <button className="btn  btn-success text-white">Submit</button>
    </div>
  </div>
</div>


          
          
           </form>
        </div>
    );
};

export default Dashboard;