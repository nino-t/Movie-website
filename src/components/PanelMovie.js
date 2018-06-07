import React from 'react'

import MovieItem from './MovieItem'

export default class PanelMovie extends React.Component {
	render() {		
		let { movies } = this.props
		if (movies) {
			movies = movies.slice(0, 4)
		}

		return (
			<div className="movie-panel">
				<div className="movie-panel-title">
					<h3 className="pull-left">Skywalker Movie's</h3>
					<span className="pull-right">
						<a href="#" className="link-more">See More</a>
					</span>
					<div className="clearfix"></div>
				</div>

				<div className="movie-panel-body">
					<div className="row">
						{
							(movies) &&
								movies.map((movie, index) => (
									<MovieItem key={index} index={index} movie={movie} />
								))
						}
					</div>
				</div>
			</div>
		);
	}
}


