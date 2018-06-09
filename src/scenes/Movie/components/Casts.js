import React from 'react'
import { Box, TitleOfContent, Flex, LoadingProgres } from '../../../styledComponents'

import Person from './Person'

const Casts = props => {
	const { characters } = props

	return (
		<Box>
			<TitleOfContent
				title="Cast"
				linkToMore="#" />

			<Flex 
				direction="row" 
				paddingVertical='0px'
				paddingHorizontal='0px'>
				{
					(characters) ?
					 	characters.map((person, index) => (
							<Person key={index} index={index} person={person} />
					 	))
					 	:
						Array.apply(null, Array(7)).map((ar, index) => (
							<LoadingProgres key={index} color='#ecf0f1' />
						))

				}							
			</Flex>							
		</Box>
	)
}

export default Casts