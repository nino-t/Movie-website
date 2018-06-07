import React from 'react'
import ReactDOM from 'react-dom'

import { Container, Flex, FlexItem} from './styledComponents'

import Header from './components/Header'
import PanelMovie from './components/PanelMovie'
import PanelMovieRelated from './components/PanelMovieRelated'

class App extends React.Component {
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

	    	console.log(data)
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
					<FlexItem flex={9}>
						<PanelMovie personalName={people.name} movies={people.films} />
					</FlexItem>

					<FlexItem flex={3}>
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

ReactDOM.render(<App />, document.getElementById('react'))

