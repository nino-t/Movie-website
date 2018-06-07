import React from 'react'

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

	render() {
		const { movie } = this.state
		const { index } = this.props

		return (
			<div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 movie-item">				
				<div className="movie-item-group">
					<div className="movie-item-thumb" style={{ backgroundColor: this.renderBackground(index) }}>
						<center>
							<img src="./assets/img/play.png" />
						</center>
					</div>
					<div className="movie-item-content">
						<div className="wrap-movie-title">
							<h4>{this.renderTitle(movie.title)}</h4>
						</div>
						<div className="wrap-director">
							<strong>Director:</strong>
							<p>{movie.director}</p>
						</div>
						<div className="wrap-release">
							<strong>Release:</strong>
							<p>{movie.release_date}</p>
						</div>						
					</div>
				</div>
			</div>
		);
	}
}


