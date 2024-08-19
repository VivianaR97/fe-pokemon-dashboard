import React from 'react';
import PokemonList from '../components/pokemonList/pokemonList';
import { Box, Typography } from '@mui/material';

function Home() {
	return (
		<Box>
			<Typography variant="h3">Pokémon App</Typography>
			<PokemonList />
		</Box>
	);
}

export default Home;
