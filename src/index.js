import React from 'react'
import ReactDOM from 'react-dom'

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
			<div className="container">
				<Header people={people} />

				<div className="row">
					<div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
						<PanelMovie personalName={people.name} movies={people.films} />
					</div>

					<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
						{
							(people.films) &&
							<PanelMovieRelated movie={people.films[people.films.length - 1]} />
						}
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('react'))

