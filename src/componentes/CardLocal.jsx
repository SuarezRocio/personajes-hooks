import styled from 'styled-components';

const CardContainer = styled.div`
  border: 10px solid  lightseagreen;
  padding: 16px;
  margin: 16px;
  width: 300px;
  text-align: center;
  background-color: lightblue;
  border-radius: 10%;

`;


const P = styled.div`
  padding: 16px;
  margin: 16px;
  text-align: center;
  font-size: 20px;
`;


const CardLocal = ( local ) => {

  const { id, name, type, dimension } = local

  return (
    <CardContainer>
      <P>{name}</P>
      <P>ID: {id}</P>
      <P>Type: {type}</P>
      <P>Dimension: {dimension}</P>
    </CardContainer>
  );
};

export default CardLocal;
