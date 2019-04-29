import React from 'react';
import PokemonCollection from './PokemonCollection';
import PokemonForm from './PokemonForm';
import { Search } from 'semantic-ui-react';
import _ from 'lodash';

class PokemonPage extends React.Component {
	state = {
		pokemons: [],
		searchPokemon: ''
	};

	componentDidMount() {
		fetch('http://localhost:3000/pokemon').then((res) => res.json()).then((json) =>
			this.setState({
				pokemons: json
			})
		);
	}

	handleSearch = (e) => {
		console.log(e.target.value);
		this.setState({
			searchPokemon: e.target.value
		});
	};

	handleSubmit = (e) => {
		const newPokemons = [ ...this.state.pokemons, e ];
		this.setState({
			pokemons: newPokemons
		});
	};

	render() {
		// console.table(this.state.pokemons);
		return (
			<div>
				<h1>Pokemon Searcher</h1>
				<br />
				<Search onSearchChange={this.handleSearch} showNoResults={false} />
				<br />
				<PokemonCollection pokemons={this.state.pokemons} userInput={this.state.searchPokemon} />
				<br />
				<PokemonForm handleSubmit={this.handleSubmit} />
			</div>
		);
	}
}

export default PokemonPage;
