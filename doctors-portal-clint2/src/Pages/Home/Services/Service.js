import React from 'react';
import fluoride from '../../../images/assets/pic/fluoride.png'
import cavity from '../../../images/assets/pic/cavity.png'
import whitening from '../../../images/assets/pic/whitening.png'
import flurodis from '../../../images/assets/pic/fluoride.png'
import Services from './Services';
import './Service.css'
import ServiceBanner from './ServiceBanner';

const Service = () => {
    const service=[
        {
            id:1,
            name:"fluoride",
            description:"lorem is a very   good ",
            image:fluoride
         },
         {
            id:2,
            name:"cavity",
            description:"lorem is a very   good ",
            image:cavity
         },
         {
            id:3,
            name:"whitening",
            description:"lorem is a very   good ",
            image:whitening
         }
]
    return (
     <div>
           <div className='mt-11'>

<div className='text-center' >
    <h1 className='text-3xl text-primary'>Our serviceas</h1>
    <h3 className='text-2xl text-accent'>service we provide</h3>

</div>

<div className=' grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 servicepart1'>
{
service.map(servicess=><Services
key={servicess.id}
service={servicess}
></Services>)
} 
</div>
</div>
<ServiceBanner></ServiceBanner>
     </div>
    );
};

export default Service;