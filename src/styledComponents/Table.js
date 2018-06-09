import React from 'react'
import styled from 'styled-components'

export const Td = styled.td`
	padding-bottom: ${props => props.paddingBottom};

	@media (max-width: 700px) {
		padding-bottom: 0px;
	}
`;

export const TableOnBody = props => {
	let width = '100'
	if (props.width) {
		width = props.width
	}

	return (
		<table>
			<tbody>
				{
					props.content.map((item, index) => (
						<tr key={index}>
							<Td width={width} paddingBottom={props.paddingBottom} style={{ verticalAlign:'text-top' }}>{item.name} :</Td>
							<Td style={{ textTransform: 'capitalize' }} paddingBottom={props.paddingBottom}>
								{item.value}
							</Td>
						</tr>
					))
				}
			</tbody>
		</table>
	)
}