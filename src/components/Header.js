import React from 'react'
import { Title, Well, Flex, FlexItem, Image } from '../styledComponents'

export default class Header extends React.Component {
	renderPersonalInfo(){
		const { people } = this.props
		return (
			<Flex 
				direction="row" 
				paddingVertical='10px'
				paddingHorizontal='0px'>

				<FlexItem flex={1}>
					<Image 
						src="./assets/img/personal.png" 
						paddingVertical="80px"
						paddingHorizontal="0px"
						backgroundColor= '#576574' />
				</FlexItem>

				<FlexItem flex={1}>
					<table className="table me-table">
						<tbody>
							<tr>
								<td width="15%">Height:</td>
								<td style={{ textTransform:'lowercase' }}>{people.height}cm</td>
							</tr>
							<tr>
								<td width="15%">Mass:</td>
								<td>{people.mass}</td>
							</tr>
							<tr>
								<td width="15%">Hair Color:</td>
								<td>{people.hair_color}</td>
							</tr>
							<tr>
								<td width="15%">Skin Color:</td>
								<td>{people.skin_color}</td>
							</tr>
							<tr>
								<td width="15%">Birth Year:</td>
								<td>{people.birth_year}</td>
							</tr>									
							<tr>
								<td width="15%">Gender:</td>
								<td>{people.gender}</td>
							</tr>																		
						</tbody>
					</table>
				</FlexItem>
			</Flex>
		)
	}
	render() {
		const { people } = this.props
		return (
			<div>
				<Title title={people.name} />
				<Well WrapUp={this.renderPersonalInfo()} />
			</div>
		);
	}
}


