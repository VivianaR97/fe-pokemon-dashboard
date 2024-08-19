import * as React from 'react';
import { Typography, Grid } from '@mui/material';
import { PokemonCardModel } from '../../models/card';

export default function CardAbility({ pokemonCard }: { pokemonCard: PokemonCardModel }) {
	if (!pokemonCard.abilityName || !pokemonCard.abilityDescription) return <></>;
	return (
		<Grid container sx={{ my: 2 }}>
			<Grid item xs={4}>
				<Typography textAlign="left" variant="body1" sx={{ fontWeight: 700 }}>
					Ability
				</Typography>
			</Grid>
			<Grid item xs={8}>
				<Typography textAlign="left" variant="body1" sx={{ fontWeight: 500 }}>
					{pokemonCard.abilityName}
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography textAlign="justify" variant="body2">
					{pokemonCard.abilityDescription}
				</Typography>
			</Grid>
		</Grid>
	);
}
