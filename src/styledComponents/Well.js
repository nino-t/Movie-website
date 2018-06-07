import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	box-shadow: 0 0 0 1px #dcdde1;
`;

const WrapUp = styled.div`
	background: #222f3e;
	color: #fff;
	padding: 10px;
`;

const WrapDown = styled.div`
	padding: 10px;
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