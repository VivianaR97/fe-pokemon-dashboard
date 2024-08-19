import { PokemonAttackModel } from './attack';

export interface PokemonCardModel {
	id: string;
	name: string;
	type: CardType;
	rarity: CardRarity;
	hp: number;
	weaknessType: CardType | null;
	weaknessMultiplier: number | null;
	resistanceType: CardType | null;
	resistanceAmount: number | null;
	abilityName: string | null;
	abilityDescription: string | null;
	retreatCost: number;
	attacks: PokemonAttackModel[];
}

export interface PokemonCardToBattleModel {
	id: string;
	name: string;
}

export enum CardType {
	NORMAL = 'NORMAL',
	FIRE = 'FIRE',
	WATER = 'WATER',
	ELECTRIC = 'ELECTRIC',
	GRASS = 'GRASS',
	ICE = 'ICE',
	FIGHTING = 'FIGHTING',
	POISON = 'POISON',
	GROUND = 'GROUND',
	FLYING = 'FLYING',
	BUG = 'BUG',
	ROCK = 'ROCK',
	PSYCHIC = 'PSYCHIC',
	GHOST = 'GHOST',
	DRAGON = 'DRAGON',
	DARK = 'DARK',
	STEEL = 'STEEL',
	FAIRY = 'FAIRY',
}

export const CardTypeTranslation: { [key in CardType]: string } = {
	NORMAL: 'Normal',
	FIRE: 'Fire',
	WATER: 'Water',
	ELECTRIC: 'Electric',
	GRASS: 'Grass',
	ICE: 'Ice',
	FIGHTING: 'Fighting',
	POISON: 'Poison',
	GROUND: 'Ground',
	FLYING: 'Flying',
	BUG: 'Bug',
	ROCK: 'Rock',
	PSYCHIC: 'Psychic',
	GHOST: 'Ghost',
	DRAGON: 'Dragon',
	DARK: 'Dark',
	STEEL: 'Steel',
	FAIRY: 'Fairy',
};

export enum CardRarity {
	COMMON = 'COMMON',
	UNCOMMON = 'UNCOMMON',
	RARE = 'RARE',
}

export const CardRarityTranslation: { [key in CardRarity]: string } = {
	COMMON: 'Common',
	UNCOMMON: 'Uncommon',
	RARE: 'Rare',
};
