import React from 'react'
import { Flex, TitleOfContent, BoxItem } from '../styledComponents'

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
		}

		return (
			<div>
				<BoxItem>
					<TitleOfContent
						title={this.renderTitle(personalName)+" Movie's"}
						linkToMore="#" />
				</BoxItem>

				<div>
					<Flex>
						{
							(movies) &&
								movies.map((movie, index) => (
									<MovieItem key={index} index={index} movie={movie} />
								))
						}
					</Flex>
				</div>
			</div>
		);
	}
}


