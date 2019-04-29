import React from 'react';
import PokemonCard from './PokemonCard';
import { Card } from 'semantic-ui-react';

class PokemonCollection extends React.Component {
	findPokemons = () => {
		return this.props.pokemons.filter((pokemon) => {
			return pokemon.name.includes(this.props.userInput);
		});
	};

	render() {
		return (
			<div>
				<Card.Group itemsPerRow={6}>
					<h1>Hello From Pokemon Collection</h1>
					<br />
					{this.findPokemons().map((pokemon) => {
						return (
							<PokemonCard
								pokemon={pokemon}
								pokemonId={pokemon.id}
								pokemonName={pokemon.name}
								stats={pokemon.stats}
								sprites={pokemon.sprites}
								hpObj={pokemon.stats.find((stat) => stat.name === 'hp')}
							/>
						);
					})}
				</Card.Group>
			</div>
		);
	}
}

export default PokemonCollection;
