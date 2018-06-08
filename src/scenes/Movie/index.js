import React from 'react'

import { Flex, FlexItem, Container, Well, Title, Box, TableOnBody, BoxItem, TitleOfContent, ImageSingle, WellItem } from '../../styledComponents'

import Header from './components/Header'

export default class Movie extends React.Component {
	renderMovieInfo(){
		const dataTable = [
			{
				name: 'Title',
				value: 'Hello World'
			},
			{
				name: 'Director',
				value: 'Hello World'
			},
			{
				name: 'Producer',
				value: 'Hello World'
			},
			{
				name: 'Release Date',
				value: 'Hello World'
			}
		]

		return (
			<div>
				<TableOnBody
					paddingBottom="8px"
					content={dataTable} />

					<br />
					<p style={{ lineHeight: '25px' }}>
						One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. 
						He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. 
						The bedding was hardly able to cover it and seemed ready to slide off any moment. 
						His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. 						
					</p>
			</div>
		)
	}
	render() {
		return (
			<Container>
				<Header title="Hello World" />
				<Flex 
					direction="row" 
					paddingVertical='0px'
					paddingHorizontal='0px'>

					<FlexItem md={1}>
						<Box>
							<ImageSingle
								src="../../assets/img/play.png" />
						</Box>
					</FlexItem>

					<FlexItem md={4}>
						<Box>
							<Well WrapUp={this.renderMovieInfo()} />
						</Box>

						<Box>
							<TitleOfContent
								title="Cast" />

							<Flex 
								direction="row" 
								paddingVertical='0px'
								paddingHorizontal='0px'>
								{
								 	Array.apply(null, Array(6)).map((ar, index) => (
								 		<FlexItem md="50%" key={index}>
								 			<BoxItem clearPadding desktopResponsive index={index}>
								 				<WellItem
								 					thumb="../../assets/img/personal_dark.png"
								 					title="Nino"
								 					desc="Bintang Film" />								 					
								 			</BoxItem>
								 		</FlexItem>
								 	))
								}							
							</Flex>							
						</Box>

						<Box>
							<TitleOfContent
								title="Related Another Movie's" />

							<Flex 
								direction="row" 
								paddingVertical='0px'
								paddingHorizontal='0px'>
								{
								 	Array.apply(null, Array(8)).map((ar, index) => (
								 		<FlexItem md="25%" key={index}>
								 			<BoxItem>
								 				<div style={{ paddingRight: '20px' }}>
									 				<div style={{ width: '100%', height: '70px', boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)', marginBottom: '20px', display: 'flex', flexDirection:'row', alignItems:'center', padding: '10px'}}>
									 					<div style={{ padding: '10px', paddingRight: '15px' }}>
									 						<img src="../../assets/img/personal_dark.png" width="30" />
									 					</div>
									 					<div>
										 					<strong style={{ fontSize: '15px' }}>Nino</strong>
										 					<p style={{ fontSize: '14px' }}>Bintang Film</p>
									 					</div>								 					
									 				</div>
								 				</div>
								 			</BoxItem>
								 		</FlexItem>
								 	))
								}							
							</Flex>							
						</Box>						
					</FlexItem>					
				</Flex>
			</Container>
		);
	}
}