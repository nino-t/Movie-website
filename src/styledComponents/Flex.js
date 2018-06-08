import React from 'react'
import styled, { css } from 'styled-components'

export const Flex = styled.div`
	display: flex;
	flex-direction: ${props => props.direction};
	padding: ${props => props.paddingVertical} ${props => props.paddingHorizontal};
	overflow: hidden;
	flex-wrap: wrap;
`;

export const FlexItem = styled.div`
	flex: ${props => props.md};	

	& .md-padding{
		padding-right: 30px;
	}

	@media (max-width: 900px) {
		flex: ${props => props.sm};	

		& .md-padding{
			padding-right: 0px;
		}
	}	

	@media (max-width: 700px) {
		flex: ${props => props.xs};	

		& .md-padding{
			padding-right: 0px;
		}
	}
`;

export const Box = styled.div`
	padding: 15px 10px;

	${props => props.padding && css`
		padding: ${props.padding};
	`}
`;

const renderPaddingLeft = index => {
	let padding = '10px'
	let result = index % 2
	if (result == 0) {
		padding = '0px';
	}

	return padding
}

const renderPaddingRight = index => {
	let padding = '0px'
	let result = index % 2
	if (result == 0) {
		padding = '10px';
	}

	return padding
}

export const BoxItem = styled.div`
	padding-right: 20px;
	margin: 1px;

	@media (max-width: 700px) {
		padding-right: 0px;
		padding-left: 0px;
	}	

	${props => props.clearPadding && css`
		padding-right: 0px;
	`}

	${props => props.desktopResponsive && css`
		padding-right: ${props => renderPaddingRight(props.index)};
		padding-left: ${props => renderPaddingLeft(props.index)};
	`}	

	${props => props.responsive && css`
		@media (max-width: 700px) {
			padding-right: ${props => renderPaddingRight(props.index)};
			padding-left: ${props => renderPaddingLeft(props.index)};
		}

	`}
`;