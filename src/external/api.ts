import { PokemonCardModel, PokemonCardToBattleModel } from '../models/card';
import URLParse from 'url-parse';

export const getAndCountPokemonCards = async (
	page: number,
	type?: string,
	name?: string,
): Promise<{ cards: PokemonCardModel[]; totalCount: number }> => {
	try {
		const url = new URLParse('http://localhost:3001/v1/card');
		url.set('query', {
			type,
			name,
			take: 4,
			skip: (page - 1) * 4,
		});

		const response = await fetch(url.toString());
		const jsonData = await response.json();
		if (response.ok) {
			return { cards: jsonData.cards, totalCount: jsonData.totalCount };
		} else {
			console.error('Promise resolved but HTTP status failed');
			return { cards: [], totalCount: 0 };
		}
	} catch {
		console.error('Error getting all cards');
		return { cards: [], totalCount: 0 };
	}
};

export const getCard = async (id: string): Promise<PokemonCardModel | null> => {
	try {
		const url = new URLParse(`http://localhost:3001/v1/card/${id}`);
		const response = await fetch(url.toString());
		const jsonData = await response.json();
		if (response.ok) {
			return jsonData;
		} else {
			console.error('Promise resolved but HTTP status failed');
			return null;
		}
	} catch {
		console.error(`Error getting card ${id}`);
		return null;
	}
};

export const getCardsToBattle = async (cardId: string): Promise<PokemonCardToBattleModel[]> => {
	try {
		const url = new URLParse(`http://localhost:3001/v1/card/${cardId}/cardsToBattle`);
		const response = await fetch(url.toString());
		const jsonData = await response.json();
		if (response.ok) {
			return jsonData;
		} else {
			console.error('Promise resolved but HTTP status failed');
			return [];
		}
	} catch {
		console.error(`Error getting cards to battle ${cardId}`);
		return [];
	}
};

export const getBattleResult = async (body: { cardId1: string; cardId2: string }): Promise<boolean> => {
	try {
		const url = new URLParse(`http://localhost:3001/v1/battle`);
		const response = await fetch(url.toString(), {
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
			method: 'POST',
		});
		const jsonData = await response.json();
		if (response.ok) {
			return jsonData;
		} else {
			console.error('Promise resolved but HTTP status failed');
			return false;
		}
	} catch {
		console.error(`Error getting battle result between ${body.cardId1} and ${body.cardId2}`);
		return false;
	}
};
