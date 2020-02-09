import React from 'react';
import './card-list.styles.css';

export const CardList = props => {
    // eslint-disable-next-line no-unused-expressions
    <div className= 'card-list'>   
        {props.monsters.map(monster => (
          <h1 key={monster.id}> {monster.name} </h1>
        ))}
    </div> 
};