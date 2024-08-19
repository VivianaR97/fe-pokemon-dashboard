import { Box, Typography } from '@mui/material';
import React from 'react';
import PokemonBattle from 'src/components/pokemonBattle/pokemonBattle';

function Battle() {
	return (
		<Box>
			<Typography variant="h3">Try Pokémon Battle!</Typography>
			<PokemonBattle />
		</Box>
	);
}

export default Battle;
