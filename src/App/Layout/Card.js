import React from 'react';

const Card = ({children}) => {
    return (
        <div className="card">
            <div className="card-body p-5">
                {children}

            </div>
        </div>
    );
};

export default Card;
