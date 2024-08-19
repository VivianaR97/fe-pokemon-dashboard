import {
	red,
	blue,
	yellow,
	lightGreen,
	cyan,
	orange,
	purple,
	brown,
	teal,
	indigo,
	grey,
	pink,
	blueGrey,
	deepOrange,
	deepPurple,
} from '@mui/material/colors';
import { CardType } from '../models/card';

export const getCardColor = (type: CardType) => {
	const cardColors: { [key in CardType]: string } = {
		NORMAL: red[50],
		FIRE: red[200],
		WATER: blue[100],
		ELECTRIC: yellow[100],
		GRASS: lightGreen[100],
		ICE: cyan['A100'],
		FIGHTING: orange[100],
		POISON: purple[100],
		GROUND: brown[100],
		FLYING: teal[100],
		BUG: indigo[100],
		ROCK: grey[200],
		PSYCHIC: pink[100],
		GHOST: blueGrey[100],
		DRAGON: deepOrange[100],
		DARK: grey[500],
		STEEL: blueGrey['A100'],
		FAIRY: deepPurple[100],
	};
	return cardColors[type];
};
