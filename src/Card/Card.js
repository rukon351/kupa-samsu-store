import React from 'react';
import "./Card.css";

const Card = ({ gunData }) => {
    // console.log(props.gunData)
    // const { name } = props.gunData;
    const { name } = gunData;
    console.log(name);
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Card;