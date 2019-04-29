import React from 'react';
import { Card } from 'semantic-ui-react';

class PokemonCard extends React.Component {
	handleClick = (e) => {
		if (e.target.src === this.props.sprites.front) {
			return (e.target.src = this.props.sprites.back);
		}
		if (e.target.src === this.props.sprites.back) {
			return (e.target.src = this.props.sprites.front);
		}
	};

	render() {
		return (
			<Card onClick={this.handleClick}>
				<div>
					<div className="image">
						<img src={this.props.sprites['front']} />
					</div>
					<div className="content">
						<div className="header">{this.props.pokemonName}</div>
					</div>
					<div className="extra content">
						<span>
							<i className="icon heartbeat red" />
							{this.props.hpObj.value}
						</span>
					</div>
				</div>
			</Card>
		);
	}
}

export default PokemonCard;
