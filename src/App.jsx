import styled from 'styled-components';
import Card from './componentes/Card'; // Importa el componente Card
import CardLocal from './componentes/CardLocal'; // Importa el componente CardLocal
import { useRequestData } from './hook/useRequestData';

const CardContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  align-items: center;
  background-color: #d345f371;
  background-image: url("./assets/download.JPG")
`;

const Logo = styled.img`
  width: 400px;
`;

function App() {
  const [personagens, carregandoPersonagems, errorPersonagems] = useRequestData("https://rickandmortyapi.com/api/character")
  const [locals, cargandoLoacales, errorLocales] = useRequestData("https://rickandmortyapi.com/api/location")

  return (
    <MainContainer>
      <Logo src="https://m.media-amazon.com/images/I/91MteSqsrJL._AC_UF894,1000_QL80_.jpg" alt="Logo" />
      <div>
        <h1>Personagens</h1>
      </div>
      <CardContainer>
      {carregandoPersonagems && <h1>Carregando personajes...</h1>}
      {errorPersonagems && <h1>Ops os personagems no fuerom cargados...</h1>}

        {personagens.map((personagem) => (
          <Card
            key={personagem.id}
            image={personagem.image}
            name={personagem.name}
            species={personagem.species}
            gender={personagem.gender}
          />
        ))}
      </CardContainer>

      <h1>Locais</h1>
      <CardContainer>
      { cargandoLoacales && <h1>Carregando locales...</h1>}
      {errorLocales && <h1>Ops os locales no fuerom cargados...</h1>}
    
        {locals.map((local) => (
          <CardLocal
            key={local.id}
            id={local.id}
            name={local.name}
            type={local.type}
            dimension={local.dimension}
          />
        ))}
      </CardContainer>
    </MainContainer>
  );
}

export default App;
