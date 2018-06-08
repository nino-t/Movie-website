import React from 'react'
import { Flex, TitleOfContent, BoxItem, LoadingProgres } from '../../../styledComponents'

import MovieItem from './MovieItem'

export default class PanelMovie extends React.Component {
	renderTitle(personalName){
		if (personalName){
			let name = personalName.split(" ")
			let resultName = name[0]

			if (name[name.length - 1]) {
				resultName = name[name.length - 1]
			}

			return resultName
		}
	}

	render() {		
		let { movies, personalName } = this.props
		if (movies) {
			movies = movies.slice(0, 4)
		}else{
			movies = Array.apply(null, Array(4))
		}

		return (
			<div>
				<BoxItem>
					{
						(personalName) ?
							<TitleOfContent
								title={this.renderTitle(personalName)+" Movie's"}
								linkToMore="#" />
							:
							<LoadingProgres color='#ecf0f1' />
					}
				</BoxItem>

				<Flex>
					{
						(movies) &&
							movies.map((movie, index) => (
								<MovieItem key={index} index={index} movie={movie} />
							))
					}
				</Flex>
			</div>
		);
	}
}


