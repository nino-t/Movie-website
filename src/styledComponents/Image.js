import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	padding: ${props => props.paddingVertical} ${props => props.paddingHorizontal};
	background-color: ${props => props.backgroundColor};

	@media (max-width: 700px) {
		padding: 20px 0px !important;
	}	
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