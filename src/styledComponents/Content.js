import React from 'react'
import styled from 'styled-components'

const ContainerItem = styled.div`
	box-shadow: 0 0 0 1px #dcdde1;
	border-radius: 3px;
	overflow: hidden;
`;

const WrapThumb = styled.div`
	background-color: ${props => props.backgroundColor};
	height: 100px;
	justify-content: center;
	align-items: center;
	display: flex;	
`;

const WrapContentItem = styled.div`
	padding: 0 10px;
`;

const WrapContent =styled.div`

`;


export const ContentItem = (props) => (
	<ContainerItem>
		<WrapThumb backgroundColor={props.backgroundColor}>
			<img src={props.srcThumb} />
		</WrapThumb>
		<WrapContentItem>
			<WrapContent>
				<h4>{props.title}</h4>
			</WrapContent>
			<WrapContent>
				{props.contentCenter}
			</WrapContent>
			<WrapContent>
				{props.contentBottom}
			</WrapContent>
		</WrapContentItem>
	</ContainerItem>
)