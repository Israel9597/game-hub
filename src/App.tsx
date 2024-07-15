import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import "./App.css";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatFormSelector from "./components/PlatFormSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectGenre, setSelectGenre] = useState<Genre | null>(null); // once selected it should contain  Genre type (genre object from genreList)only but by default it should be null or nothing be selected
  const [selectPlatform, setSelectPlatform] = useState<Platform | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav"
                  "aside main"
                  `,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX="5px">
          <GenreList
            onSelectdGenre={(x) => setSelectGenre(x)}
            selectfontGenre={selectGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatFormSelector
          seletedPlatForm={selectPlatform}
          onSelectPlatForm={(platForm) => setSelectPlatform(platForm)}
        />
        <GameGrid
          filtredGenere={selectGenre}
          filteredPlatForm={selectPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
