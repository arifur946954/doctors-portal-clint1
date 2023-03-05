import React from 'react';
import Banner from './Banner/Banner';
import CardInfo1 from './CardOption/CardInfo1';
import Contract from './Contract/Contract';
import MakeAppoinment from './MakeAppoinment/MakeAppoinment';
import Service from './Services/Service';
import Testmonial from './Testmonial/Testmonial';

const Home = () => {
    return (
        <div className='mx-5'>
      <Banner></Banner>
      <CardInfo1></CardInfo1>
      <Service></Service>
      <MakeAppoinment></MakeAppoinment>
      <Testmonial></Testmonial>
      <Contract></Contract>
        </div>
    );
};

export default Home;