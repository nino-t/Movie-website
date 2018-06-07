import React from 'react'
import { ContentItem, FlexItem } from '../styledComponents'

export default class MovieItem extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	movie: {}
	  }
	}

	componentWillMount() {
		fetch(this.props.movie)
	    .then((response) => response.json())
	    .then((data) => {
	    	this.setState({
	    		movie: data
	    	})

	    	console.log('Movie', data);
	    })
	    .catch((error) => {
	    	console.error(error);
	    })
	}

	renderTitle(title){
		if (title && title.length > 1) {
			title = title.substr(0, 16) + '...'
		}

		return title
	}

	renderBackground(id){
		let backgroundColor = '#e67e22'

		var result = id % 2
		if (result == 0) {
			backgroundColor = '#9b59b6'
		}

		return backgroundColor
	}

	renderDirector(director){
		return (
			<div className="wrap-director">
				<strong>Director:</strong>
				<p>{director}</p>
			</div>
		)
	}

	renderRelase(release_date){
		return (
			<div className="wrap-release">
				<strong>Release:</strong>
				<p>{release_date}</p>
			</div>
		)
	}	

	render() {
		const { movie } = this.state
		const { index } = this.props

		return (
			<FlexItem flex={1}>
				<ContentItem
					title={this.renderTitle(movie.title)}
					contentCenter={this.renderDirector(movie.director)}
					contentBottom={this.renderRelase(movie.release_date)}
					backgroundColor={this.renderBackground(index)}
					srcThumb="./assets/img/play.png" />

			</FlexItem>
		);
	}
}


