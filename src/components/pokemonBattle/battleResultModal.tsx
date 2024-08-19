import * as React from 'react';
import { red, green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function BattleResultModal(props: {
	result: boolean;
	pokemonName1: string;
	pokemonName2: string;
	closeModal: (value: boolean) => void;
}) {
	const { result, pokemonName1, pokemonName2, closeModal } = props;
	const handleClose = () => closeModal(false);

	const style = {
		position: 'absolute' as 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: result ? green[200] : red[200],
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	};

	return (
		<div>
			<Modal
				open={true}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						{result ? 'Success!' : 'Aww..!'}
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						{result
							? `Pokemon ${pokemonName1} beat ${pokemonName2}!`
							: `Pokemon ${pokemonName1} couldn't defeat ${pokemonName2}`}
					</Typography>
				</Box>
			</Modal>
		</div>
	);
}
