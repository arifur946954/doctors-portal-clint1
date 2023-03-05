import React from 'react';
import appoinment from '../../../images/assets/pic/appointment.png'

const Contract = () => {
    return (
      <div style={
        {background:`url(${appoinment})`}
      }>
          <div>
            <h1 className='text-5xl text-accent text-center'>Contract us</h1>
            <h3 className='text-2xl text-white text-center'>Always Contract with us</h3>
        </div>
        <div className='justify-center'>
            <input type="text" placeholder="Type here" className="justifu-center w-full max-w-xs input input-bordered input-accent " />
            <br/>
            <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs " />
            <br/>
            <textarea className="textarea textarea-success w-full max-w-xs " placeholder="Bio"></textarea>
           <br></br>
     
        </div>
      </div>
    );
};

export default Contract;