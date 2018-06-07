import React from 'react'
import styled from 'styled-components'

const WrapTitle = styled.div`
	border-left: 5px solid #e84118;
	padding: 3px 15px;
	margin-bottom: 25px;
`;

const TextTitle = styled.h3`
	color: #222f3e;	
	padding: 0;
	margin: 0;
	font-size: 30px;
	font-weight: bold;
`;

export const Title = (props) => (
	<WrapTitle>
		<TextTitle>{props.title}</TextTitle>
	</WrapTitle>
)