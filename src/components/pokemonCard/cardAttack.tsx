import * as React from 'react';
import { Typography, Grid } from '@mui/material';
import { PokemonCardModel } from '../../models/card';

export default function CardAttack({ pokemonCard }: { pokemonCard: PokemonCardModel }) {
	const { attacks } = pokemonCard;
	if (!attacks || !attacks.length) return <></>;

	return (
		<>
			{attacks.map((attack) => (
				<Grid key={attack.id} container sx={{ my: 1 }}>
					<Grid item xs={8}>
						<Typography textAlign="left" variant="body1" sx={{ fontWeight: 500 }}>
							{attack.name}
						</Typography>
					</Grid>
					<Grid item xs={4}>
						<Typography textAlign="right" variant="body1">
							{attack.value}
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography textAlign="justify" variant="body2">
							{attack.description}
						</Typography>
					</Grid>
				</Grid>
			))}
		</>
	);
}
