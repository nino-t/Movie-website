import React from 'react'
import { Title, Well, Flex, FlexItem, Image, TableOnBody, Box, LoadingProgres } from '../../../styledComponents'

export default class Header extends React.Component {
	renderPersonalImg(){
		return (
			<FlexItem md={2} sm="20%" xs="30%">
				<Box>
					<Image 
						src="./assets/img/personal.png" 
						paddingVertical="60px"
						paddingHorizontal="0px"
						backgroundColor= '#576574' />
				</Box>
			</FlexItem>			
		)
	}

	renderPersonalInfo(){
		const { people } = this.props
		const dataTable = [
			{
				name: 'Height',
				value: people.height + 'cm'
			},
			{
				name: 'Mass',
				value: people.mass
			},			
			{
				name: 'Hair Color',
				value: people.hair_color
			},
			{
				name: 'Skin Color',
				value: people.skin_color
			},
			{
				name: 'Birth Year',
				value: people.birth_year
			},
			{
				name: 'Gender',
				value: people.gender
			}			
		]

		return (
			<Flex 
				direction="row" 
				paddingVertical='10px'
				paddingHorizontal='10px'>
				{this.renderPersonalImg()}
				<FlexItem md={13} sm="70%" xs="70%">
					<Box>
						{
							(people.height) ?
								<TableOnBody
									paddingBottom="8px"
									content={dataTable} />
								:
								Array.apply(null, Array(6)).map((item, index) => (
									<LoadingProgres key={index} medium color="#ced6e0" />
								))

						}
					</Box>
				</FlexItem>
			</Flex>
		)
	}
	render() {
		const { people } = this.props
		return (
			<div style={{ marginBottom: '50px' }}>
				<Title title={people.name} />
				<Well WrapUp={this.renderPersonalInfo()} />
			</div>
		);
	}
}


