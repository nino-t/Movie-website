import React from 'react'
import { Container, Flex, FlexItem } from '../../styledComponents'

import Header from './components/Header'
import PanelMovie from './components/PanelMovie'
import PanelMovieRelated from './components/PanelMovieRelated'

export default class PersonalMovie extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	people: {}
	  }
	}

	componentWillMount() {
		fetch('https://swapi.co/api/people/1/')
	    .then((response) => response.json())
	    .then((data) => {
	    	this.setState({
	    		people: data
	    	})
	    })
	    .catch((error) => {
	    	console.error(error);
	    })
	}	

	render() {
		const { people } = this.state
		return (
			<Container>
				<Header people={people} /> 				
				<Flex>
					<FlexItem md={9} sm="50%" xs="100%">
						<div className="md-padding">
							<PanelMovie personalName={people.name} movies={people.films} />
						</div>
					</FlexItem>

					<FlexItem md={3} sm="50%" xs="100%">
						{
							(people.films) &&
							<PanelMovieRelated movie={people.films[people.films.length - 1]} />
						}
					</FlexItem>
				</Flex>
			</Container>
		);
	}
}


