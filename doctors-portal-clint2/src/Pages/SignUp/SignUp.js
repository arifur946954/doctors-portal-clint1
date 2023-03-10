import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();
    // const [data, setData] = useState("");
const handleSignup=data=>{
    console.log(data);
}

    return (
        <div className='flex justify-center h-[680px] mt-20 '>
            <div className='w-96 p-7'>
            <h1 className='text-4xl'>Sign Up</h1>
   

            <form onSubmit={handleSubmit(handleSignup)}>

     

<div className="form-control  ">
  <label className="label"><span className="label-text">Name</span></label>
  <input type="text" {...register("name",{
     required: "Name is required" ,
     minLength:{value:6,message:"name must be 8 charecter or long"}
     
     })}  className="input input-bordered input-accent " />
  {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
</div>

<div className="form-control ">
  <label className="label"><span className="label-text">Email</span></label>
  <input type="email" {...register("email",{ required: "Email Address is required" })} className="input input-bordered input-accent" />
  {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
</div>

<div className="form-control ">
  <label className="label"><span className="label-text">Passdword</span></label>
  <input type="password" {...register("password",{
     required: "password is required" ,
     minLength:{value:6,message:"password must be 6 charecter or long"}
     
     })} className="input input-bordered input-accent" />
      {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
</div>

{/* <div className="form-control ">
  <label className="label"><span className="label-text">Confirm Password</span></label>
  <input type="password" {...register("confirmPassword")}  className="input input-bordered input-accent" />

</div> */}



<button className="mt-7 btn btn-accent w-full text-white">SignUp</button>
    </form>
    <p>Allready have an account <Link className='text-accent' to="/login">Login Please</Link></p>
    <div className="divider">OR</div>
    <button className="btn btn-outline w-full ">Button</button>
    </div>
        </div>
    );
};

export default SignUp;