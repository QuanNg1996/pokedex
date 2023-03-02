import { useState, lazy } from "react";
import { Grid } from "@mui/material";
import useFetch from "./hooks/useFetch";
import Search from "./components/Search";
import './style/index.css';

interface PokemonResultProp {
  name: string;
  url: string;
}

const PokemonCard = lazy(() => import("./components/Card"));

const App = (): JSX.Element => {
  const [filterValue, setFilterValue] = useState("");
  const [pokemons]: Array<any> = useFetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151");

  return (
    <>
      <h1 className="text-center text-5xl font-bold my-5">Pokedex</h1>
      <Search setFilterValue={setFilterValue} />
      <Grid container spacing={4} sx={{ padding: "0 20px 20px" }}>
        {pokemons && pokemons.results.filter(({ name }: PokemonResultProp) => name.includes(filterValue)).map(({ name, url }: PokemonResultProp) => (
          <Grid item md={2}>
            <PokemonCard
              key={name}
              pokemonName={name}      
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${url.substring(34).slice(0, -1)}.png`} 
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default App;
