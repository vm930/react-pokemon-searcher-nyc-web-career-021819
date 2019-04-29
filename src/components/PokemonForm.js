import React from 'react';
import { Form } from 'semantic-ui-react';

class PokemonForm extends React.Component {
	constructor() {
		super();

		this.state = {
			name: '',
			hp: '',
			frontUrl: '',
			backUrl: ''
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		// console.log(this.state);
		//should send to parent
		const newPokemon = {
			name: this.state.name,
			stats: [ { name: 'hp', value: this.state.hp } ],
			sprites: { front: this.state.frontUrl, back: this.state.backUrl }
		};
		this.props.handleSubmit(newPokemon);

		//do a post request to database
		fetch('http://localhost:3000/pokemon', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(newPokemon)
		})
			.then((res) => res.json())
			.then((json) => console.log(json));
	};

	handleChange = (e) => {
		// console.log(e.target.value);
		// console.log(e.target.name);
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		return (
			<div>
				<h3>Add a Pokemon!</h3>
				<Form onSubmit={this.handleSubmit}>
					<Form.Group widths="equal">
						<Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange} />
						<Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange} />
						<Form.Input
							fluid
							label="Front Image URL"
							placeholder="url"
							name="frontUrl"
							onChange={this.handleChange}
						/>
						<Form.Input
							fluid
							label="Back Image URL"
							placeholder="url"
							name="backUrl"
							onChange={this.handleChange}
						/>
					</Form.Group>
					<Form.Button>Submit</Form.Button>
				</Form>
			</div>
		);
	}
}

export default PokemonForm;
