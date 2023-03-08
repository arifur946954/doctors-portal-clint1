import React from 'react';
import treatment from '../../../images/assets/pic/treatment.png'
import MakeButton from '../../Shared/MakeButton';

const ServiceBanner = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
    <div className='ml-6'>
      <h1 className="text-5xl font-bold">Expectional Dental care of your term</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut
       assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae 
       assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae 
       assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae 
       et a id nisi.</p>
<div className='bottom-0'>
<MakeButton>Get Startted</MakeButton>
</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceBanner;