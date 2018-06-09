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
		padding-right: 60px;
	}

	@media (max-width: 900px) {
		flex: ${props => props.sm};	

		& .md-padding{
			padding-right: 0px;
		}

		${props => props.SmPushSmallLeft && css`
			& .area-content{
				padding-left: 20px;
			}
		`}
	}	

	@media (max-width: 700px) {
		flex: ${props => props.xs};	

		& .md-padding{
			padding-right: 0px;
		}

		& .area-content{
			padding-left: 0px;
			padding-top: 20px;
		}		

		${props => props.hiddenXs && css`
			display: none;
		`}
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

const renderEndOfRow = index => {
	let padding = '20px'
	let result = index % 4
	if (result == 0) {
		padding = '0px';
	}

	return padding
}

export const BoxItem = styled.div`
	padding-left: ${props => renderEndOfRow(props.index)};
	margin: 1px;

	${props => props.paddingTwoCol && css`
		padding-right: ${props => renderPaddingRight(props.index)};
		padding-left: ${props => renderPaddingLeft(props.index)};
	`}

	@media (max-width: 700px) {
		padding-right: 0px;
		padding-left: 0px;
	}	

	${props => props.responsive && css`
		@media (max-width: 900px) {
			padding-right: ${props => renderPaddingRight(props.index)};
			padding-left: ${props => renderPaddingLeft(props.index)};
		}
	`}
`;