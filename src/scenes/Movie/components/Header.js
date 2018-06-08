import React from 'react'
import { Box, Title } from '../../../styledComponents'

const Header = props => (
	<Box padding="0px 10px">
		<Title
			marginBottom='0px'
			title={props.title} />
	</Box>
)

export default Header