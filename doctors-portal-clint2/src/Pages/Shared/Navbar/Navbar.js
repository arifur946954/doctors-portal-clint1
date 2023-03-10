import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/Authprovider';

const Navbar = () => {
 const {logOut,user}= useContext(AuthContext);
 const handleLogout=()=>{
  logOut()
  .then(()=>{})
  .catch(error=>console.log(error));
 }
    const menu=<React.Fragment>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/appoinment'>Appoinment</Link></li>
   
    {
    user?.uid? 
   <>
    <li><Link to='/dashboard'>Dashboard</Link></li>
    <li><button onClick={handleLogout}>LogOut</button></li>
   </>
    :<li><Link to='/login'>Login</Link></li>
    }
    
    </React.Fragment>
    return (
        <div>
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      
         {menu}
      
        
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
  {menu}
    </ul>
  </div>

    

</div>
        </div>
    );
};

export default Navbar;