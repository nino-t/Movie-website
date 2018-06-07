import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	padding: ${props => props.paddingVertical} ${props => props.paddingHorizontal};
	background-color: ${props => props.backgroundColor};
`;

export const Image = (props) => (
	<Container 
		paddingVertical={props.paddingVertical}
		paddingHorizontal={props.paddingHorizontal}
		backgroundColor={props.backgroundColor}>

		<center>
			<img src={props.src} />
		</center>
	</Container>
)