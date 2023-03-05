import React from 'react';
import CardInfo2 from './CardInfo2';
import clock from '../../../images/assets/icons/clock.svg'
import marker from '../../../images/assets/icons/marker.svg'
import phone from '../../../images/assets/icons/phone.svg'

const CardInfo1 = () => {
    const infodata=[
        {
            id:1,
            name:"Opening Hour",
            description:"this is the last hoour from the site",
            icon:clock,
            bgclass:"bg-neutral"
         },
         {
            id:2,
            name:"Opening Location",
            description:"this is the last hoour from the site",
            icon:marker,
            bgclass:"bg-primary"
         },
         {
                       id:3,
                        name:"current status",
                        description:"this is the last hoour from the site",
                        icon:phone,
                        bgclass:"bg-primary"
         }
]


        
    
    return (
        <div  className='mt-4 grid gap-5 content-center sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
            {
                infodata.map(cardInfo=><CardInfo2
                key={cardInfo.id}
                card={cardInfo}
                ></CardInfo2>)
            }
        </div>
    );
};

export default CardInfo1;