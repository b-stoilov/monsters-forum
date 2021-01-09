import React from 'react';
import './card_list.styles.css';

import Card from './card.component';

const CardList = (props) => (
    <div className = "card-list">
        {props.members.map(member => (
            <Card key = { member.id } member = { member }></Card>
        ))} 
    </div>    
);

export default CardList;
