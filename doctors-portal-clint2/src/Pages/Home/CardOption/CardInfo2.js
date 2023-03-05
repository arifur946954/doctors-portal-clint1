import React from 'react';

const CardInfo2 = ({card}) => {
    return (
  <div className='content-center '>
          <div className={`card flex-row text-white w-96 h-40  bg-base-100 shadow-xl ${card.bgclass}`}>
          <div className="card card-side shadow-xl">
  <figure><img src={card.icon} alt="Movie"/></figure>
  <div className="card-body">
  <h2 className="card-title">{card.name}</h2>
    <p>{card.description}</p>

    <div className="card-actions justify-end">

    </div>
  </div>
</div>
        </div>
  </div>
    );
};

export default CardInfo2;