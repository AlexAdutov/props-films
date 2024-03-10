//import React from 'react';
import Star from './Star';

interface TCount {
    count: number;
}

function Stars({ count = 0 }: TCount) {

    if (count > 5 || count <= 0) return null;

    /*let arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(i);
    }
    return (
        <div className='box'>
            <ul className='card-body-stars'>
                {arr.map((item) => (
                    <Star key={item}/>
                ))}
            </ul>
        </div>
    );*/

    const li = []
    for (let index = 1; index <= count; index++) {
        li.push(<Star key={index}/>)
    }
    return (
        <div className='box'>
        <ul className="card-body-stars">
            {li}
        </ul>
        </div>
    )

    
}

export default Stars;
