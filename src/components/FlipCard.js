import React from 'react';
import './FlipCard.css';
import img_bg_SPP from '../assets/img/bg_SPP.jpg';

function FlipCard({ title, img_front, img_back, children }) {
    return (

        <div className="flip-card border-0">
            <div className="flip-card-inner">
                <div className="flip-card-front" style={{
                    backgroundImage: `url(${img_front ? img_front : img_bg_SPP})`, backgroundPosition: "center",
                    backgroundRepeat: "no-repeat", backgroundSize: "cover",
                    boxShadow: "0px 0px 80px 0.05px grey"
                }}>
                </div>
                <div className="flip-card-back" style={{
                    backgroundImage: `url(${img_back})`, backgroundPosition: "center",
                    backgroundRepeat: "no-repeat", backgroundSize: "cover",
                    boxShadow: "0px 0px 80px 0.05px grey", color: "#212529"
                }}>
                    <h3 className='my-5'>{title}</h3>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default FlipCard;