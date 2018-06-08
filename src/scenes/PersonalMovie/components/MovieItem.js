import React from 'react'
import { ProgressiveSingle } from '../../../hoc'
import { ContentItem, FlexItem, BoxItem } from '../../../styledComponents'

export default class MovieItem extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	movie: {}
	  }
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.movie) {
			fetch(nextProps.movie)
		    .then((response) => response.json())
		    .then((data) => {
		    	this.setState({
		    		movie: data
		    	})
		    })
		    .catch((error) => {
		    	console.error('Error', error);
		    })
		}

		return true;
	}

	renderTitle(title){
		if (title && title.length > 1) {
			title = title.substr(0, 18) + '...'
		}

		return title
	}

	renderBackground(id, title){
		let backgroundColor = '#e67e22'

		var result = id % 2
		if (result == 0) {
			backgroundColor = '#9b59b6'
		}

		if (!title) {
			return '#bdc3c7';
		}

		return backgroundColor
	}

	renderBackgroundHover(id){
		let backgroundColor = 'rgba(230, 126, 34,0.7)'

		var result = id % 2
		if (result == 0) {
			backgroundColor = 'rgba(155, 89, 182,0.7)'
		}

		return backgroundColor
	}

	renderDirector(director){
		return (
			<div>
				<strong>Director:</strong>
				<p>{ProgressiveSingle(director)}</p>
			</div>
		)
	}

	renderRelase(release_date){
		return (
			<div>
				<strong>Release:</strong>
				<p>{ProgressiveSingle(release_date)}</p>
			</div>
		)
	}	

	render() {
		const { movie } = this.state
		const { index } = this.props

		return (
			<FlexItem md={1} sm="50%" xs="50%">
				<BoxItem index={index} responsive>
					<ContentItem
						title={this.renderTitle(movie.title)}
						contentCenter={this.renderDirector(movie.director)}
						contentBottom={this.renderRelase(movie.release_date)}
						backgroundColor={this.renderBackground(index, movie.title)}
						backgroundColorHover={this.renderBackgroundHover(index)}
						srcThumb="./assets/img/play.png" />
				</BoxItem>
			</FlexItem>
		);
	}
}


