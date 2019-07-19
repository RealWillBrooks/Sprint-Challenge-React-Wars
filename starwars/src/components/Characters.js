import React from 'react';
import Person from './Person';

const Characters = props => {
  return (
    <div>
      {props.characters.map((person, index) => (
        <Person person={person} key={index} />
      ))}
    </div>
  );
};

export default Characters;