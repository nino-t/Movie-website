import React from 'react'

export default class Header extends React.Component {
	render() {
		const { people } = this.props
		return (
			<div className="header">
				<div className="header-title">
					<h3>{people.name}</h3>
				</div>

				<div className="header-body">
					<div className="row">
						<div className="col-xs-4 col-sm-4 col-md-2 col-lg-2">
							<div className="wrap-header-img">
								<img src="./assets/img/personal.png" className="img-responsive" style={{ width:'100%' }} />
							</div>
						</div>

						<div className="col-xs-8 col-sm-8 col-md-10 col-lg-10">
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
						</div>
					</div>
				</div>
			</div>
		);
	}
}


