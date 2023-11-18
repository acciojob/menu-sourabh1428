import React from 'react';
import '../styles/Cards.css'


const Cards = ({details}) => {
    let imgs=details.img;
    return (
        <div className='card'>
            <div className='cardl'><img src={imgs} alt="" /></div>
            <div className='cardr'><div>{details.title}{details.price}</div><p>
                {details.desc}</p></div>
        </div>
    );
}

export default Cards;
