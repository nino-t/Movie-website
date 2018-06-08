import React from 'react'
import styled from 'styled-components'

import {
	ELEVATION_COLOR,
	WRAP_CONTENT_ITEM_PADDING,
	FONT_PRIMARY_COLOR,
	PRIMARY_cOLOR,
	PARAGRAPH_FONT_SIZE
} from './config'

const ContainerItem = styled.div`
	box-shadow: ${ELEVATION_COLOR};
	border-radius: 3px;
	overflow: hidden;
	margin-bottom: 20px;
`;

const WrapThumb = styled.div`
	background-color: ${props => props.backgroundColor};
	height: 100px;
	justify-content: center;
	align-items: center;
	display: flex;	
`;

const WrapContentItem = styled.div`
	padding: ${WRAP_CONTENT_ITEM_PADDING};
`;

const WrapContent = styled.div`
	margin-bottom: 12px;
	color: ${FONT_PRIMARY_COLOR};
	font-size: ${PARAGRAPH_FONT_SIZE};
	height: 40px;
`;


export const ContentItem = (props) => (
	<ContainerItem>
		<WrapThumb backgroundColor={props.backgroundColor}>
			<img src={props.srcThumb} />
		</WrapThumb>
		<WrapContentItem>
			<WrapContent>
				<h4 style={{ color: PRIMARY_cOLOR, fontSize: '17px'}}>{props.title}</h4>
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