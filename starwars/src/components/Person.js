import React from 'react';
import styled from 'styled-components';
const HeaderContainer = styled.div`
  background: white;
  width: 400px;
  margin: 10px auto;
  padding: 2px;
`;

const Person = props => {
  return (
    <>
      
      <HeaderContainer>
        <h2>Name: {props.person.name}</h2>
        <h2>Birth Year: {props.person.birth_year}</h2>
        <h2>Eye Color: {props.person.eye_color}</h2>
      </HeaderContainer>
    </>
  );
};

export default Person;