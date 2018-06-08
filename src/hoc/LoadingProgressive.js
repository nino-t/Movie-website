import React from 'react'
import { LoadingProgres } from '../styledComponents'

export const ProgressiveSingle = (content, color = '#ecf0f1') => {
	return (
		<span>
			{
				(content) ?
					<span>{content}</span>
					:
					<LoadingProgres color={color} />

			}
		</span>
	)
}