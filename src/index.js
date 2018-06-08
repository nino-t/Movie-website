import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom"

import PersonalMovie from './scenes/PersonalMovie'

class App extends React.Component {
	render() {
		return (
			<Router>
		      <Route exact path="/" component={PersonalMovie} />
			</Router>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('react'))

