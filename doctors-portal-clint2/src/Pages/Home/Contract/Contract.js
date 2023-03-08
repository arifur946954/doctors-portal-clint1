import React from 'react';
import appoinment from '../../../images/assets/pic/appointment.png'
import MakeButton from '../../Shared/MakeButton';
import './Contract.css'
const Contract = () => {
    return (
      <div style={
        {background:`url(${appoinment})`}
      }>
          <div>
            <h1 className='text-5xl text-accent text-center'>Contract us</h1>
            <h3 className='text-2xl text-white text-center'>Always Contract with us</h3>
        </div>
        <div className='inputfield '>
        <input type="text" placeholder="Type here" className=" inpt input input-bordered input-accent  " />
   
            <input type="text" placeholder="Type here" className=" inpt input input-bordered input-accent  " />
     
            <textarea className=" inpt textarea textarea-success " placeholder="Bio"></textarea>
 
           <MakeButton className="inpt">Submit</MakeButton>
     
        </div>
      </div>
    );
};

export default Contract;