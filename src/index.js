import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, IndexRoute } from "react-router-dom"

import PersonalMovie from './scenes/PersonalMovie'
import Movie from './scenes/Movie'

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
			      <Route exact path="/" component={PersonalMovie} />
			      <Route path="/movie/:movieId" component={Movie} />
			      <Route path="/person/:personId" component={PersonalMovie} />
		      	</div>
			</Router>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('react'))

