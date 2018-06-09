import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	padding: ${props => props.paddingVertical} ${props => props.paddingHorizontal};
	background-color: ${props => props.backgroundColor};

	@media (max-width: 700px) {
		padding: 20px 0px !important;
	}	
`;

const ContainerSingle = styled.div`
	background-color: #ffaf05;
	height: 250px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
	border-radius:3px;
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

export const ImageSingle = (props) => (
	<ContainerSingle>
		<center>
			<img src={props.src} />
		</center>
	</ContainerSingle>
)