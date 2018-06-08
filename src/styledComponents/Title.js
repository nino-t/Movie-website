import React from 'react'
import styled from 'styled-components'

import { Link } from '../styledComponents'

import {
	PRIMARY_cOLOR,
	SECONDARY_COLOR,
	TITLE_FONT_SIZE,
	TITLE_CONTENT_FONT_SIZE
} from './config'

const WrapTitle = styled.div`
	border-left: 5px solid ${SECONDARY_COLOR}
	padding: 3px 15px;
	margin-bottom: 25px;
`;

const TextTitle = styled.h3`
	color: ${PRIMARY_cOLOR};
	font-size: ${TITLE_FONT_SIZE};
`;

const TextTitleContent = styled.h4`
	color: ${SECONDARY_COLOR};
	font-size: ${TITLE_CONTENT_FONT_SIZE};
	float: left;
	text-transform: 'capitalize';
`;

export const Title = (props) => (
	<WrapTitle>
		<TextTitle>{props.title}</TextTitle>
	</WrapTitle>
)

export const TitleOfContent = (props) => (
	<div style={{ marginBottom: '10px' }}>
		<TextTitleContent>{props.title}</TextTitleContent>

		{
			(props.linkToMore) &&
				<Link href="#" linkRight>
					See More
				</Link>
		}
		<div style={{ clear:'both' }}></div>
	</div>
)