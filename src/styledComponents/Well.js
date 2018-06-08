import React from 'react'
import styled from 'styled-components'

import {
	PRIMARY_cOLOR,
	ELEVATION_COLOR,
	SCOPE_TEXT_COLOR,
	WELL_PADDING,
	FONT_PRIMARY_COLOR,
	PARAGRAPH_FONT_SIZE
} from './config'

const Container = styled.div`
	box-shadow: ${ELEVATION_COLOR};
	font-size: ${PARAGRAPH_FONT_SIZE};
	border-radius: 3px;
	overflow: hidden;
`;

const WrapUp = styled.div`
	background: ${PRIMARY_cOLOR};
	color: ${SCOPE_TEXT_COLOR};
	padding: ${WELL_PADDING};
`;

const WrapDown = styled.div`
	padding: ${WELL_PADDING};
	color: ${FONT_PRIMARY_COLOR};

	& .wt-line > p {
		line-height: 25px;
		letter-spacing: 0em;
	}
`;

export const Well = (props) => (
	<Container>
		<WrapUp>
			{props.WrapUp}
		</WrapUp>
		{
			(props.WrapDown) &&
			<WrapDown>
				{props.WrapDown}
			</WrapDown>
		}
	</Container>
)