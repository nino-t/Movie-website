import React from 'react'

export default class PanelMovieRelated extends React.Component {
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
	    })
	    .catch((error) => {
	    	console.error(error);
	    })
	}

	renderDesc(desc){
		if (desc && desc.length > 1) {
			desc = desc.substr(0, 185) + '...'
		}

		return desc
	}	

	render() {
		const { movie } = this.state

		return (
			<div className="panel-another">	
				{
					(movie) &&
					<div>
						<div className="panel-another-title">
							<h3>Related Another Movie's</h3>
						</div>
						<div className="panel-another-body">
							<div className="wrap-well-heading">
								<h4>{movie.title}</h4>
								<table className="table me-table">
									<tbody>
										<tr>
											<td width="35%">Director:</td>
											<td>{movie.director}</td>
										</tr>
										<tr>
											<td width="35%">Producer:</td>
											<td>{movie.producer}</td>
										</tr>
										<tr>
											<td width="35%">Relase Date:</td>
											<td>{movie.release_date}</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="wrap-well-body">
								<p>{ this.renderDesc(movie.opening_crawl) }</p>

								<span className="pull-right">
									<a href="#" className="link-more">See More</a>
								</span>
								<div className="clearfix"></div>						
							</div>					
						</div>
					</div>
				}
			</div>
		);
	}
}


