import React, { useContext, useState } from 'react';
import MakeButton from '../Shared/MakeButton';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider';



const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
    const { register,formState: { errors }, handleSubmit } = useForm();
    const [loginError,setLoginError]= useState('');
   const {signIn }= useContext(AuthContext);
   
    // const [data, setData] = useState("");
    const handleLogin=data=>{
      setLoginError('');
      console.log(data);
       signIn(data.email,data.password)
       .then(result=>{
        const user=result.user;
        console.log(user);
        navigate(from, { replace: true });
       })
       .catch(error=>{
        console.log(error);
        setLoginError(error);
       });
    }
    return (
        <div className='h-[600px] flex justify-center items-center '>
            <div className='w-96 p-7' >
                <h2 className='text-4xl'>Login</h2>
            

           <form onSubmit={handleSubmit(handleLogin)}>
   
     
    {/* daisi start from here */}
    {/* for email part */}
      <div className="form-control w-full max-w-xs">
  <label className="label"> <span className="label-text">Email</span></label>
    <input type="email"  {...register("email",{ required: "Email Address is required" })}  className="input input-bordered w-full max-w-xs" />
    {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
   </div>

{/* for password part */}
   <div className="form-control w-full max-w-xs">
  <label className="label"> <span className="label-text">Passdword</span></label>
    <input type="password"  {...register("password",{
    required: "Password is required",
     minLength: {value:6,message:"Passeord must be 6 charecter or longer"}
     })}  className="input input-bordered w-full max-w-xs" />
    {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
    <label className="label"> <span className="label-text">Forgot Passdword</span></label>
    <div>
      {
        loginError && <p className='text-red-600'>Email or password is incorrect</p>
      }
    </div>
   </div>

{/* daisi end from here */}

      
      <input className=' btn btn-accent   w-full max-w-xs text-white' type="submit" />
    </form>
    <p>New to Doctor Portal or <Link className='text-accent' to="/signup">Create a Account</Link></p>
    <div className="divider">OR</div>
    <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

    </div> 
        </div>
    );
};

export default Login;