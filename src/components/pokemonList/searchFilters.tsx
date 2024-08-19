import * as React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';

import { FilterPokemonList } from '../../models/filters';
import { CardType, CardTypeTranslation } from '../../models/card';

export default function SearchFilters({ filters }: { filters: FilterPokemonList }) {
	const {
		name: { searchName, setSearchName },
		type: { searchType, setSearchType },
	} = filters;

	const handleSearchTypeChange = (event: SelectChangeEvent) => {
		setSearchType(event.target.value as CardType);
	};

	const handleSearchNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchName(event.target.value);
	};

	return (
		<Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, p: 2 }}>
			<FormControl sx={{ minWidth: 120 }} size="small">
				<TextField
					id="outlined-basic"
					label="Name"
					variant="outlined"
					size="small"
					value={searchName}
					onChange={handleSearchNameChange}
				/>
			</FormControl>
			<FormControl sx={{ minWidth: 120 }} size="small">
				<InputLabel>Type</InputLabel>
				<Select size="small" value={searchType} label="Type" onChange={handleSearchTypeChange}>
					<MenuItem value="">None</MenuItem>
					{Object.keys(CardTypeTranslation).map((cardType) => (
						<MenuItem key={cardType} value={cardType as CardType}>
							{CardTypeTranslation[cardType as keyof typeof CardTypeTranslation]}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
}
