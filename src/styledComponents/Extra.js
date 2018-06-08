import styled, { css } from 'styled-components'

import {
	LINK_COLOR,
	LINK_HOVER_COLOR
} from './config'

export const Link = styled.a`
	text-decoration: none;
	font-weight: bold;
	color: ${LINK_COLOR};

	${props => props.linkRight && css`
		float: right;
	`}

	&:hover {
	    color: ${LINK_HOVER_COLOR};
	}	
`;