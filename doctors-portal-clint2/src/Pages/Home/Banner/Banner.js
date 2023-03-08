import React from 'react';
import chair from '../../../images/assets/pic/chair.png'
import bg from '../../../images/assets/pic/bg.png'
import MakeButton from '../../Shared/MakeButton';


const Banner = () => {

    return (
        <div >
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut
       assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id 
       nisi.</p>
     <MakeButton>Get Started</MakeButton>

    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;