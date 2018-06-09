import React from 'react'
import { 
	Flex, FlexItem, Container, Well, Box, TableOnBody, ImageSingle, LoadingProgres
} from '../../styledComponents'

import Casts from './components/Casts'
import Header from './components/Header'
import Person from './components/Person'
import MovieGroup from '../../components/MovieGroup'

export default class Movie extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	movie: {},
	  	relatedMovies: []
	  }
	}

	callAjax(key, URI){
		fetch(URI)
	    .then((response) => response.json())
	    .then((data) => {
	    	let result = data
	    	if (data.results) {
	    		result = data.results
	    	}

	    	this.setState({
	    		[key]: result
	    	})
	    })
	    .catch((error) => {
	    	console.error('Error', error);
	    })
	}

	componentWillMount() {
		const { match } = this.props
		this.callAjax('movie', 'https://swapi.co/api/films/'+ match.params.movieId +'/')
		this.callAjax('relatedMovies', 'https://swapi.co/api/films/')
	}

	renderMovieInfo(movie){
		const dataTable = [
			{
				name: 'Title',
				value: movie.title
			},
			{
				name: 'Director',
				value: movie.director
			},
			{
				name: 'Producer',
				value: movie.producer
			},
			{
				name: 'Release Date',
				value: movie.release_date
			}
		]

		return (
			<div>
				<TableOnBody	
					width='120'
					paddingBottom="8px"
					content={dataTable} />

					<br />
					<p style={{ lineHeight: '25px' }}>
						{movie.opening_crawl}
					</p>
			</div>
		)
	}
	render() {
		let { movie, relatedMovies } = this.state
		let { characters } = movie

		if (relatedMovies) {
			relatedMovies = relatedMovies.slice(0, 4)
		}

		if (characters) {
			characters = characters.slice(0, 8)
		}		

		return (
			<Container>
				<Header title={movie.title} />
				<Flex 
					direction="row" 
					paddingVertical='0px'
					paddingHorizontal='0px'>

					<FlexItem md={1} sm="30%" xs="0%" hiddenXs>
						<Box>
							<ImageSingle
								src="../../assets/img/play.png" />
						</Box>
					</FlexItem>

					<FlexItem md={4} sm="70%" xs="100%">
						<Box>
							{
								(movie.title)?
									<Well WrapUp={this.renderMovieInfo(movie)} />
									:
									Array.apply(null, Array(5)).map((ar, index) => (
										<LoadingProgres key={index} color='#ecf0f1' /> 
									))									
							}
						</Box>

						<Casts characters={characters} />

						<Box>
							<MovieGroup
								title="Related Movie's"
								movies={relatedMovies} />	    
						</Box>						
					</FlexItem>					
				</Flex>
			</Container>
		);
	}
}