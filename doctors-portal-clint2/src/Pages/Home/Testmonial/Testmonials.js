import React from 'react';

const Testmonials = ({testmonial}) => {
    return (
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
  
  <div className="card-body">
    <p>{testmonial.discription}</p>
   <div  className='grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1'>
   <figure><img src={testmonial.image} alt="Shoes" /></figure>
    <div className='ml-8 mt-4'>
    <p>{testmonial.name}</p>
    <p>{testmonial.address}</p>
    </div>
   </div>
  </div>
</div>
        </div>
    );
};

export default Testmonials;