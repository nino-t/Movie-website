import React from 'react'
import { Flex, TitleOfContent, BoxItem, LoadingProgres } from '../styledComponents'

import MovieItem from './MovieItem'

export default class MovieGroup extends React.Component {
	render() {		
		let { movies, title, limit } = this.props
		if (limit && movies) {
			movies = movies.slice(0, limit)
		}

		return (
			<div style={{ margin: '1px' }}>
				<div>
					{
						(title) ?
							<TitleOfContent
								title={title}
								linkToMore="#" />
							:
							<LoadingProgres color='#ecf0f1' />
					}
				</div>

				<Flex>
					{
						(movies) ?
							movies.map((movie, index) => (
								<MovieItem key={index} index={index} movie={movie} />
							))
							:
							Array.apply(null, Array(7)).map((ar, index) => (
								<LoadingProgres key={index} color='#ecf0f1' />
							))

					}
				</Flex>
			</div>
		);
	}
}


