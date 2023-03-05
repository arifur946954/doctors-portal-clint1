import React from 'react';
import './Service.css'

const Services = ({service}) => {
    return (
 <div className='servicepart2 w-50 m-6'>
           <div className='card w-96 h-80  shadow-xl '>
       
  <figure className=" px-10 pt-10"><img className='imagesize' src={service.image} alt="Shoes" /></figure>
  <div className="card-body ">
    <h2 className="text-3xl text-center">{service.name}</h2>
    <p className='text-center'>{service.description}</p>
   
  </div>
</div>
        </div>

    );
};

export default Services;