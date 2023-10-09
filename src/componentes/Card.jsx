import styled from 'styled-components';

const CardContainer = styled.div`
  width: 220px;
  height: 350px;
  border: 1px solid black;
  margin: 10px;
  padding: 5px;
`;

const Image = styled.img`
  width: 190px;
  height: 150px;
  padding: 5px;
`;

const Text = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  align-items: center;
`;

const Card = ( personagem ) => {
 const { image, name, species, gender} = personagem

  return (
    <CardContainer>
      <Image src={image} alt={image} />
      <Text>{name}</Text>
      <Text>Species: {species}</Text>
      <Text>Gender: {gender}</Text>
    </CardContainer>
  );
};

export default Card;
