import React from 'react'
import styled, { css } from 'styled-components'

import {
	ELEVATION_COLOR,
	WRAP_CONTENT_ITEM_PADDING,
	FONT_PRIMARY_COLOR,
	PRIMARY_cOLOR,
	PARAGRAPH_FONT_SIZE,
	BORDER_RADIUS
} from './config'

const ContainerItem = styled.div`
	box-shadow: ${ELEVATION_COLOR};
	border-radius: ${BORDER_RADIUS};
	overflow: hidden;
	margin-bottom: 20px;
`;

const WrapThumb = styled.div`
	background-color: ${props => props.backgroundColor};
	height: 100px;
	justify-content: center;
	align-items: center;
	display: flex;	
	cursor: pointer;
	transition: 0.5s;

	&:hover {
	    background-color: ${props => props.backgroundColorHover};
	}	
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

export const LoadingProgres = styled.span`
	width: 100%;
	height: 20px;
	background-color: ${props => props.color};
	margin-bottom: 15px;
	display: block;

	${props => props.small && css`
		width: 30% !important;
		float: right;

		&:after {
			clear: both;
		}
	`}	
`;

export const ContentItem = (props) => (
	<ContainerItem>
		<WrapThumb 
			backgroundColor={props.backgroundColor}
			backgroundColorHover={props.backgroundColorHover}>
			<a href="">
				<img src={props.srcThumb} />
			</a>
		</WrapThumb>
		<WrapContentItem>
			<WrapContent>
				{
					(props.title) ?
						<a href="">
							<h4 style={{ color: PRIMARY_cOLOR, fontSize: '17px'}}>
								{props.title}
							</h4>
						</a>
						:
						<LoadingProgres color='#ecf0f1' />
				}
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