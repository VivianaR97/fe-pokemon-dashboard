import * as React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { CardTypeTranslation, PokemonCardModel } from '../../models/card';

export default function CardHeader({ pokemonCard }: { pokemonCard: PokemonCardModel }) {
	return (
		<Box display="flex">
			<Grid item xs={8}>
				<Typography variant="h6" sx={{ fontWeight: 500 }} color="text.secondary" textAlign="left" gutterBottom>
					{pokemonCard.name}
				</Typography>
			</Grid>
			<Grid item xs={4}>
				<Box display="flex" justifyContent="flex-end" alignItems="center">
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						{pokemonCard.hp}
					</Typography>
					<Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
						hp
					</Typography>
				</Box>
				<Box display="flex" justifyContent="flex-end" alignItems="center">
					{CardTypeTranslation[pokemonCard.type]}
				</Box>
			</Grid>
		</Box>
	);
}
