import React from 'react'
import { Container, Flex, FlexItem, LoadingProgres } from '../../styledComponents'

import Header from './components/Header'
import MovieGroup from '../../components/MovieGroup'
import PanelMovieRelated from './components/PanelMovieRelated'

export default class PersonalMovie extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	people: {}
	  }
	}

	componentWillMount() {
		let URI = 'https://swapi.co/api/people/1/'

		const { match } = this.props
		if (match.params.personId) {
			URI = 'https://swapi.co/api/people/'+match.params.personId+'/'
		}

		fetch(URI)
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

	getLastName(personalName){
		if (personalName){
			let name = personalName.split(" ")
			let resultName = name[0]

			if (name[name.length - 1]) {
				resultName = name[name.length - 1]
			}

			return resultName
		}
	}	

	render() { 
		const { people } = this.state
		return (
			<Container>
				<Header people={people} /> 				
				<Flex>
					<FlexItem md="69%" sm="50%" xs="100%">
						<div className="md-padding">
							{
								(people.name) ?
									<MovieGroup
										limit={4}
										title={this.getLastName(people.name) +" Movie's"}
										movies={people.films} />	    
									:
									Array.apply(null, Array(7)).map((ar, index) => (
										<LoadingProgres key={index} color='#ecf0f1' /> 
									))
							}
						</div>
					</FlexItem>

					<FlexItem md="31%" sm="50%" xs="100%" SmPushSmallLeft>
						{
							(people.films) ?
								<PanelMovieRelated movie={people.films[people.films.length - 1]} />
								:
								Array.apply(null, Array(7)).map((ar, index) => (
									<LoadingProgres key={index} color='#ecf0f1' />
								))
						}
					</FlexItem>
				</Flex>
			</Container>
		);
	}
}


