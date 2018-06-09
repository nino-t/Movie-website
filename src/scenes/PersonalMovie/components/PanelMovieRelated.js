import React from 'react'
import { ProgressiveSingle } from '../../../hoc'
import { Well, Link, TitleOfContent, Box, TableOnBody, LoadingProgres } from '../../../styledComponents'

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
		if (!desc) {
			return (
				<span>
					{
						Array.apply(null, Array(5)).map((ar, index) => (
							<LoadingProgres key={index} color='#ecf0f1' />
						))
					}
				</span>
			)
		}

		if (desc && desc.length > 1) {
			desc = desc.substr(0, 185) + '..'
		}

		return desc
	}	

	renderWrapDown(){
		const { movie } = this.state

		return (
			<div className="wt-line">
				<p>{ this.renderDesc(movie.opening_crawl) }</p>					
				<br />
				{
					(movie.opening_crawl) ?
						<Link href="#" linkRight>See More</Link>
						:
						<LoadingProgres small color='#ecf0f1' />
				}
				<div style={{ clear:'both' }}></div>
			</div>
		)
	}

	renderWrapUp(){
		const { movie } = this.state
		const dataTable = [
			{
				name: 'Director',
				value: ProgressiveSingle(movie.director, 'rgba(52, 73, 94, 0.4)')
			},
			{
				name: 'Producer',
				value: ProgressiveSingle(movie.producer, 'rgba(52, 73, 94, 0.4)')
			},			
			{
				name: 'Relase Date',
				value: ProgressiveSingle(movie.release_date, 'rgba(52, 73, 94, 0.4)')
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
			<div className="area-content" style={{ margin: '1px' }}>
				<TitleOfContent
					paddingBottom="0px"
				 	title="Related Another Movie's" />

				<Well 
					WrapUp={this.renderWrapUp()}
					WrapDown={this.renderWrapDown()} />
			</div>
		)
	}
}


