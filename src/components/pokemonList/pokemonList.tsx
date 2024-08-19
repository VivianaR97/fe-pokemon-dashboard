import Pagination from '@mui/material/Pagination';
import { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import React from 'react';
import PokemonCard from '../pokemonCard/pokemonCard';
import { getAndCountPokemonCards } from '../../external/api';
import { CardType, PokemonCardModel } from '../../models/card';
import SearchFilters from './searchFilters';

export default function PokemonList() {
	const [pokemonCards, setPokemonCards] = useState<PokemonCardModel[]>([]);
	const [paginationCount, setPaginationCount] = useState(1);
	const [searchType, setSearchType] = useState<CardType | ''>('');
	const [searchName, setSearchName] = useState('');
	const [page, setPage] = React.useState(1);

	const handlePaginationChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};

	useEffect(() => {
		async function fetchData() {
			const { cards, totalCount } = await getAndCountPokemonCards(page, searchType, searchName);
			setPokemonCards(cards);
			setPaginationCount(Math.ceil(totalCount / 4));
		}
		fetchData();
	}, [page, searchType, searchName]);

	return (
		<Box sx={{ p: 3 }}>
			<SearchFilters filters={{ type: { searchType, setSearchType }, name: { searchName, setSearchName } }} />
			<Grid container spacing={2}>
				{pokemonCards.map((pokemonCard) => (
					<Grid item xs={12} sm={6} md={4} lg={3} key={pokemonCard.id}>
						<PokemonCard pokemonCard={pokemonCard} />
					</Grid>
				))}
			</Grid>

			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					width: '100%',
					mt: 2,
					p: 2,
				}}
			>
				<Pagination count={paginationCount} page={page} onChange={handlePaginationChange} />
			</Box>
			<Stack></Stack>
		</Box>
	);
}
