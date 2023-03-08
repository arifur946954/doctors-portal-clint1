import React from 'react';
import doctor from '../../../images/assets/pic/doctor.png'
import appoinment from '../../../images/assets/pic/appointment.png'
import MakeButton from '../../Shared/MakeButton';

const MakeAppoinment = () => {
    return (
        <div className='' style={

            {background:`url(${appoinment})`}
        }>
           <div className="hero    ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={doctor} className="-mt-24 ml-8 max-w-md rounded-lg shadow-2xl" />
    <div ml-12>
      <h1 className="text-3xl text-white font-bold">Box Office News!</h1>
      <p className="text-white py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <MakeButton>Get Started</MakeButton>
    </div>
  </div>
</div> 
        </div>
    );
};

export default MakeAppoinment;