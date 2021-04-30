import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { selectPokemon } from '../actions/index';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		padding: '30px'
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
		backgroundSize: 'contain'
	}
}));

const PokemonCard = ({ pokemon }) => {
	const history = useHistory();
	const classes = useStyles();
	return (
		<Card
			className={classes.card}
			onClick={() => {
				selectPokemon(pokemon.id);
				history.push(`/details/${pokemon.id}`);
			}}
			size="small"
			color="primary"
		>
			<CardMedia className={classes.cardMedia} image={`${pokemon.sprites.other.dream_world.front_default}`} />
		</Card>
	);
};

export default PokemonCard;
