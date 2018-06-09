import React from 'react'
import { ProgressiveSingle } from '../hoc'
import { ContentItem, FlexItem, BoxItem } from '../styledComponents'

export default class MovieItem extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	movie: {}
	  }
	}

	callAjax(key, URI){
		fetch(URI)
	    .then((response) => response.json())
	    .then((data) => {
	    	this.setState({
	    		[key]: data
	    	})
	    })
	    .catch((error) => {
	    	console.error('Error', error);
	    })
	}

	componentWillMount() {
		const { movie } = this.props
		if (movie.title) {
			this.setState({
				movie: movie
			})
		}else{
			this.callAjax('movie', movie)
		}
	}

	componentWillReceiveProps(nextProps) {
		if (!nextProps.movie.title) {
			this.callAjax('movie', nextProps.movie)
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

	getPrimaryId(url){
		if (url) {
			url = url.split('/')

			if (url[url.length - 2]) {
				return url[url.length - 2]
			}
		}
	}

	renderRowItem(index){
		let width = '25%'
		let result = index % 4
		if (result == 0) {
			width = '23%';
		}

		return width
	}

	render() {
		const { movie } = this.state
		const { index } = this.props

		return (
			<FlexItem md={this.renderRowItem(index)} sm="50%" xs="50%">
				<BoxItem index={index} responsive>
					<ContentItem
						title={this.renderTitle(movie.title)}
						contentCenter={this.renderDirector(movie.director)}
						contentBottom={this.renderRelase(movie.release_date)}
						backgroundColor={this.renderBackground(index, movie.title)}
						backgroundColorHover={this.renderBackgroundHover(index)}
						srcThumb="http://localhost:3000/assets/img/play.png"
						url={"/movie/" + this.getPrimaryId(movie.url)} />
				</BoxItem>
			</FlexItem>
		);
	}
}


