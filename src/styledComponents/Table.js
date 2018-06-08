import React from 'react'
import styled from 'styled-components'

export const Thead = styled.div`
`;

export const Tbody = styled.tbody`
`;

export const Td = styled.td`
	padding-bottom: ${props => props.paddingBottom};
`;

export const TableOnBody = props => (
	<table>
		<Tbody>
			{
				props.content.map((item, index) => (
					<tr key={index}>
						<Td width="100" paddingBottom={props.paddingBottom} style={{ verticalAlign:'text-top' }}>{item.name} :</Td>
						<Td style={{ textTransform: 'capitalize' }} paddingBottom={props.paddingBottom}>{item.value}</Td>
					</tr>
				))
			}
		</Tbody>
	</table>
)