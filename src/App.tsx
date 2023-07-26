import { Grid, GridItem, Show } from '@chakra-ui/react';
import './App.css';
import Nav from './components/Nav';

import GameDisplay from './components/GameDisplay';
import GenreList from './components/GenreList';

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: '"nav" "main"',
          lg: '"nav nav" "aside main"',
        }}>
        <GridItem gridArea="nav">
          <Nav />
        </GridItem>
        <Show above="lg">
          <GridItem gridArea="aside" bg="gold">
            Aside
            <GenreList />
          </GridItem>
        </Show>
        <GridItem gridArea="main" bg="dodgerblue">
          Main
          <GameDisplay />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
