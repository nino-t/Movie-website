import React from 'react'
import styled, { css } from 'styled-components'

import {
	PRIMARY_cOLOR,
	ELEVATION_COLOR,
	SCOPE_TEXT_COLOR,
	WELL_PADDING,
	FONT_PRIMARY_COLOR,
	PARAGRAPH_FONT_SIZE,
	BORDER_RADIUS
} from './config'

const Container = styled.div`
	box-shadow: ${ELEVATION_COLOR};
	font-size: ${PARAGRAPH_FONT_SIZE};
	border-radius: ${BORDER_RADIUS};
	overflow: hidden;

	${props => props.marginBottom && css`
		margin-bottom: ${props => props.marginBottom};
	`}	

	${props => props.height && css`
		height: ${props => props.height};
	`}		

	${props => props.display && css`
		display: ${props => props.display};
	`}			

	${props => props.flexDirection && css`
		flex-direction: ${props => props.flexDirection};
	`}			

	${props => props.alignItems && css`
		align-items: ${props => props.alignItems};
	`}				

	${props => props.padding && css`
		padding: ${props => props.padding};
	`}					
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

export const WellItem = (props) => (
	<Container 
		marginBottom="20px" 
		height="70px"
		flexDirection="row"		
		display='flex'
		alignItems='center'
		padding='10px'>
		<div style={{ padding: '10px', paddingRight: '15px' }}>
			<img src={props.thumb} width="30" />
		</div>
		<div>
			<strong style={{ fontSize: '15px' }}>{props.title}</strong>
			<p style={{ fontSize: '14px' }}>{props.desc}</p>
		</div>								 					
	</Container>
)
