import React from 'react'
import styled from 'styled-components'

export const Td = styled.td`
	padding-bottom: ${props => props.paddingBottom};
`;

export const TableOnBody = props => (
	<table>
		<tbody>
			{
				props.content.map((item, index) => (
					<tr key={index}>
						<Td width="150" paddingBottom={props.paddingBottom} style={{ verticalAlign:'text-top' }}>{item.name} :</Td>
						<Td style={{ textTransform: 'capitalize' }} paddingBottom={props.paddingBottom}>
							{item.value}
						</Td>
					</tr>
				))
			}
		</tbody>
	</table>
)