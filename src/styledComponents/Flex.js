import styled, { css } from 'styled-components'

export const Flex = styled.div`
	display: flex;
	flex-direction: ${props => props.direction};
	padding: ${props => props.paddingVertical} ${props => props.paddingHorizontal};
	overflow: hidden;
`;

export const FlexItem = styled.div`
	flex: ${props => props.flex};	
	padding: 15px 12px;
`;