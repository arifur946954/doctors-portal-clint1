import React from 'react';
import people1 from '../../../images/assets/pic/people1.png'
import people2 from '../../../images/assets/pic/people2.png'
import people3 from '../../../images/assets/pic/people3.png'
import Testmonials from './Testmonials';
import quote from '../../../images/assets/icons/quote.svg'

const Testmonial = () => {
    const abouttestmonial=[
        {
            id:1,
            discription:"A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some",
            image:people1,
            name:"Arifur Rahman",
            address:"Chuadanga"
        },
        {
            id:2,
            discription:"A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some",
            image:people2,
            name:"Shahid afridi",
            address:"Pakistan"
        },
        {
            id:3,
            discription:"A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some",
            image:people3,
            name:"Rejuan ahnmed",
            address:"canada"
        }
    ]
    return (
        <div>
       <div className='flex justify-between'>
               <div>
                <h1 className='text-4xl text-accent'>Testmonial</h1>
                <h3 className='text-3xl'>what out patient said</h3>
            </div>
            <div className='w-48'>
                <img  src={quote}/>
            </div>
       </div>
 <div className='grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
 {
abouttestmonial.map(testmonial=><Testmonials
key={testmonial.id}
testmonial={testmonial}

></Testmonials>)
          } 
    
    </div> 
        </div>
    );
};

export default Testmonial;