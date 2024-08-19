import * as React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { CardRarityTranslation, CardTypeTranslation, PokemonCardModel } from '../../models/card';

export default function CardAttributes({ pokemonCard }: { pokemonCard: PokemonCardModel }) {
	return (
		<Box sx={{ flexGrow: 0 }}>
			<Grid container>
				<Grid item xs={4}>
					{pokemonCard.weaknessType && pokemonCard.weaknessMultiplier && (
						<>
							<Typography textAlign="center" variant="body2">
								Weakness
							</Typography>
							<Typography textAlign="center" variant="body1" sx={{ fontStyle: 'italic' }}>
								{CardTypeTranslation[pokemonCard.weaknessType]}
							</Typography>
							<Typography textAlign="center" variant="body2">
								x{pokemonCard.weaknessMultiplier}
							</Typography>
						</>
					)}
				</Grid>
				<Grid item xs={4}>
					{pokemonCard.resistanceType && pokemonCard.resistanceAmount && (
						<>
							<Typography textAlign="center" variant="body2">
								Resistance
							</Typography>
							<Typography textAlign="center" variant="body1" sx={{ fontStyle: 'italic' }}>
								{CardTypeTranslation[pokemonCard.resistanceType]}
							</Typography>
							<Typography textAlign="center" variant="body2">
								-{pokemonCard.resistanceAmount}
							</Typography>
						</>
					)}
				</Grid>
				<Grid item xs={4}>
					<Typography textAlign="center" variant="body2">
						Retreat Cost
					</Typography>
					<Typography textAlign="center" variant="body2">
						{pokemonCard.retreatCost}
					</Typography>
				</Grid>
			</Grid>

			{/* RARITY */}
			<Grid item xs={12}>
				<Typography textAlign="right" variant="body1" sx={{ fontWeight: 500 }}>
					{CardRarityTranslation[pokemonCard.rarity]}
				</Typography>
			</Grid>
		</Box>
	);
}
