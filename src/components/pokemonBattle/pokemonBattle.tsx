import { useState, useEffect } from 'react';
import {
	Avatar,
	Box,
	Button,
	Chip,
	FormControl,
	Grid,
	IconButton,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/HomeRounded';
import WhatshotRoundedIcon from '@mui/icons-material/WhatshotRounded';
import Stack from '@mui/material/Stack';
import React from 'react';
import PokemonCard from '../pokemonCard/pokemonCard';
import { getBattleResult, getCard, getCardsToBattle } from '../../external/api';
import { PokemonCardModel, PokemonCardToBattleModel } from '../../models/card';
import { useNavigate, useParams } from 'react-router';
import BattleResultModal from './battleResultModal';

export default function PokemonBattle() {
	const navigate = useNavigate();
	const params = useParams();
	const [openResultModal, setOpenResultModal] = useState(false);
	const [battleResult, setBattleResultt] = useState(false);
	const [pokemonCard, setPokemonCard] = useState<PokemonCardModel | null>();
	const [pokemonCardToBattle, setPokemonCardToBattle] = useState<PokemonCardModel | null>();
	const [pokemonCardsToBattle, setPokemonCardsToBattle] = useState<PokemonCardToBattleModel[]>([]);

	const cardId = params.cardId;

	const handlePokemonToBattleChange = async (event: SelectChangeEvent) => {
		const cardToBattle = await getCard(event.target.value);
		setPokemonCardToBattle(cardToBattle);
	};

	const handlePokemonBattle = async () => {
		if (pokemonCard && pokemonCardToBattle) {
			const battleResult = await getBattleResult({ cardId1: pokemonCard.id, cardId2: pokemonCardToBattle.id });
			setBattleResultt(battleResult);
			setOpenResultModal(true);
		}
	};

	useEffect(() => {
		async function fetchData() {
			if (cardId) {
				const [card, cardsToBattle] = await Promise.all([getCard(cardId), getCardsToBattle(cardId)]);
				setPokemonCardsToBattle(cardsToBattle);
				setPokemonCard(card);
			}
		}
		fetchData();
	}, [cardId]);

	return (
		<Box sx={{ p: 3 }}>
			{pokemonCard && pokemonCardToBattle && openResultModal && (
				<BattleResultModal
					closeModal={setOpenResultModal}
					result={battleResult}
					pokemonName1={pokemonCard.name}
					pokemonName2={pokemonCardToBattle.name}
				/>
			)}
			<Stack direction="row" spacing={2}>
				<IconButton onClick={(e) => navigate(`/`)} aria-label="Home" size="large">
					<HomeIcon />
				</IconButton>
			</Stack>
			{pokemonCard && (
				<Grid container justifyContent="center" alignItems="center" direction="row">
					<Grid item sm={4} md={4} lg={3} key={pokemonCard.id}>
						<PokemonCard clickable={false} pokemonCard={pokemonCard} />
					</Grid>
					<Grid
						item
						sx={{
							p: 1,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<FormControl sx={{ minWidth: 120 }} size="medium">
							<InputLabel>Battle With</InputLabel>
							<Select size="medium" value={pokemonCardToBattle?.id} label="Type" onChange={handlePokemonToBattleChange}>
								{pokemonCardsToBattle.map((pokemonCard) => (
									<MenuItem key={pokemonCard.id} value={pokemonCard.id}>
										{pokemonCard.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<Button onClick={handlePokemonBattle} disabled={!pokemonCardToBattle} size="medium">
							Go!
						</Button>
					</Grid>
					<Grid item sm={4} md={4} lg={3}>
						{pokemonCardToBattle && <PokemonCard clickable={false} pokemonCard={pokemonCardToBattle} />}
					</Grid>
				</Grid>
			)}
		</Box>
	);
}
