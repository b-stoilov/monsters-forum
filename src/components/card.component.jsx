import React from 'react';

import './card.styles.css';

const Card = (props) => {
        return (
            <div className = "card-container">
                <img alt = "member" src = {`https://robohash.org/${props.member.id}?set=set2?size=100x100`}/>
                <h1> { props.member.name } </h1>
                <p> { props.member.email } </p>
            </div>
        );
        
};


export default Card;

