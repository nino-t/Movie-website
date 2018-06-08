import React from 'react'

import { Well, Link, TitleOfContent, Box, TableOnBody } from '../styledComponents'

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

	renderWrapDown(){
		const { movie } = this.state

		return (
			<div>
				<div className="wt-line">
					<p>{ this.renderDesc(movie.opening_crawl) }</p>					
					<br />
					<Link href="#" linkRight>See More</Link>
					<div style={{ clear:'both' }}></div>
				</div>
			</div>			
		)
	}

	renderWrapUp(){
		const { movie } = this.state
		const dataTable = [
			{
				name: 'Director',
				value: movie.director
			},
			{
				name: 'Producer',
				value: movie.producer
			},			
			{
				name: 'Relase Date',
				value: movie.release_date
			}			
		]

		return (
			<div className="wrap-well-heading">
				<h4 style={{ fontSize: '16px', marginBottom: '7px'}}>{movie.title}</h4>
				<TableOnBody 
					content={dataTable} />
			</div>
		)
	}

	render() {
		const { movie } = this.state
		return (
			<div style={{ margin: '1px' }}>
				<TitleOfContent
					paddingBottom="0px"
				 	title="Related Another Movie's" />
				 	
				{
					(movie) && 
						 <Well 
							WrapUp={this.renderWrapUp()}
							WrapDown={this.renderWrapDown()} />
				}
			</div>
		)
	}
}


