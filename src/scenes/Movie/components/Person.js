import React from 'react'
import { 
	FlexItem, BoxItem, WellItem, LoadingProgres 
} from '../../../styledComponents'


export default class Person extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			person: {}
		}
	}

	componentWillMount() {
		fetch(this.props.person)
	    .then((response) => response.json())
	    .then((data) => {
	    	this.setState({
	    		person: data
	    	})
	    })
	    .catch((error) => {
	    	console.error(error);
	    })
	}

	getPrimaryId(url){
		if (url) {
			url = url.split('/')

			if (url[url.length - 2]) {
				return url[url.length - 2]
			}
		}
	}

	render() {
		const { person } = this.state
		const { index } = this.props

		return (
	 		<FlexItem md="50%" xs="100%" key={index}>
	 			<BoxItem paddingTwoCol index={index}>
	 				{
	 					(person.name)?
			 				<WellItem
			 					href={"/person/"+ this.getPrimaryId(person.url)}
			 					thumb="../../assets/img/personal_dark.png"
			 					title={person.name}
			 					desc="Characters" />								 					
			 				:
			 				<LoadingProgres color='#ecf0f1' /> 
	 				}
	 			</BoxItem>
	 		</FlexItem>
		)
	}
}
