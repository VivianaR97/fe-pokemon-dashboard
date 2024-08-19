import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { CardType } from './card';

export interface FilterPokemonList {
	type: {
		searchType: CardType | '';
		setSearchType: Dispatch<SetStateAction<CardType | ''>>;
	};
	name: {
		searchName: string;
		setSearchName: Dispatch<SetStateAction<string>>;
	};
}
