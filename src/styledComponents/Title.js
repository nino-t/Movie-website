import React from 'react'
import styled from 'styled-components'

import { Link } from '../styledComponents'

import {
	PRIMARY_cOLOR,
	SECONDARY_COLOR,
	TITLE_FONT_SIZE,
	TITLE_CONTENT_FONT_SIZE,
	TITLE_FONT_SIZE_XS,
	TITLE_CONTENT_FONT_SIZE_XS
} from './config'

const WrapTitle = styled.div`
	border-left: 5px solid ${SECONDARY_COLOR}
	padding: 3px 15px;
	margin-bottom: ${props => props.marginBottom};
`;

const TextTitle = styled.h3`
	color: ${PRIMARY_cOLOR};
	font-size: ${TITLE_FONT_SIZE};
	font-weight: bold; 

	@media (max-width: 700px) {
		font-size: ${TITLE_FONT_SIZE_XS};
	}
`;

const TextTitleContent = styled.h4`
	color: ${SECONDARY_COLOR};
	font-size: ${TITLE_CONTENT_FONT_SIZE};
	float: left;
	text-transform: 'capitalize';
	font-weight: bold;

	@media (max-width: 700px) {
		font-size: ${TITLE_CONTENT_FONT_SIZE_XS};
	}	
`;

export const Title = (props) => {
	let marginBottom = '25px'
	if (props.marginBottom) {
		marginBottom = props.marginBottom
	}

	return (
		<WrapTitle marginBottom={marginBottom}>
			<TextTitle>{props.title}</TextTitle>
		</WrapTitle>
	)
}

export const TitleOfContent = (props) => (
	<div style={{ marginBottom: '10px' }}>
		<TextTitleContent>{props.title}</TextTitleContent>

		{
			(props.linkToMore) &&
				<Link href={props.linkToMore} linkRight style={{ marginTop: '7px' }}>
					See More
				</Link>
		}
		<div style={{ clear:'both' }}></div>
	</div>
)