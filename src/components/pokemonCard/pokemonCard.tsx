import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { CardMedia, CardContent, Card, Box, Grid, CardActionArea } from '@mui/material';
import { PokemonCardModel } from '../../models/card';
import CardHeader from './cardHeader';
import { getCardColor } from '../../utils/colors';
import CardAbility from './cardAbility';
import CardAttack from './cardAttack';
import CardAttributes from './cardAttributes';

function PokemonCardContent({ pokemonCard }: { pokemonCard: PokemonCardModel }) {
	return (
		<Card
			variant="outlined"
			sx={{
				backgroundColor: getCardColor(pokemonCard.type),
				minHeight: 600,
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<CardContent
				sx={{
					height: '100%',
					flexGrow: 1,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}
			>
				{/* HEADER */}
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<CardHeader pokemonCard={pokemonCard} />
					<Grid container justifyContent="center" alignItems="center" direction="row">
						<CardMedia
							sx={{ maxHeight: 140, maxWidth: 140 }}
							component="img"
							alt="Pokemon Image"
							image="/pokeball.png"
						/>
					</Grid>
				</Box>

				{/* EXPANSION */}
				<Box sx={{ flexGrow: 1 }}>
					<Grid container justifyContent="center" alignItems="center" direction="row">
						<CardAbility pokemonCard={pokemonCard} />
						<CardAttack pokemonCard={pokemonCard} />
					</Grid>
				</Box>

				{/* ATTRIBUTES */}
				<CardAttributes pokemonCard={pokemonCard} />
			</CardContent>
		</Card>
	);
}
export default function PokemonCard({
	pokemonCard,
	clickable = true,
}: {
	clickable?: boolean;
	pokemonCard: PokemonCardModel;
}) {
	const navigate = useNavigate();

	return (
		<Box>
			{clickable ? (
				<CardActionArea onClick={(e) => navigate(`/battle/${pokemonCard.id}`)} sx={{ height: '100%' }}>
					<PokemonCardContent pokemonCard={pokemonCard} />
				</CardActionArea>
			) : (
				<PokemonCardContent pokemonCard={pokemonCard} />
			)}
		</Box>
	);
}
