import styled from 'styled-components';

const CardContainer = styled.div`
  width: 220px;
  height: 350px;
  border: 10px solid purple;
  background-color: #d345f371;
  border-radius: 5%;
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
