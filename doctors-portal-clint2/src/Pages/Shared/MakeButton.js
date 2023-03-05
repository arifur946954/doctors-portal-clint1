import React from 'react';

const MakeButton = ({children}) => {
    return (
        <div>
           <button className="btn btn-primary bg-gradient-to-r from-cyan-500
            to-blue-500 text-white">Get Started</button> 
            {children}
        </div>
    );
};

export default MakeButton;