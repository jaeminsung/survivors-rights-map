import React from 'react';
import Datamap from './datamap';

export default class Map extends React.Component {

	render() {
		return (
			<div className="page">
				<div className="header">
					<h3 className="map-label">Sexual Assault Survivors' Rights Map</h3>
					<p className="map-legend">
						Here is a summary of the state laws for sexual assault surviviors. Click on each state for more details.
					</p>
				</div>
				<div className="map-container">
					<div className="map-header">
						<div className="category-container">
							<img className="category-img" src={require("./images/no_rights.png")} alt="no_right_color"/>
							<div className="category">no implementation</div>
						</div>
						<div className="category-container">
							<img className="category-img" src={require("./images/1_right.png")} alt="2_rights_color"/>
							<img className="category-img" src={require("./images/2_rights.png")} alt="2_rights_color"/>
							<img className="category-img" src={require("./images/3_rights.png")} alt="2_rights_color"/>
							<img className="category-img" src={require("./images/4_rights.png")} alt="2_rights_color"/>
							<div className="category">partially implemented</div>
						</div>
						<div className="category-container">
							<img className="category-img" src={require("./images/5_rights.png")} alt="5_rights_color"/>
							<div className="category">fully implemented</div>
						</div>
					</div>
					<div className="map">
						<Datamap
							id="dataMap"
							scope="usa"
							geographyConfig={{
								highlightBorderColor: '#bada55',
								highlightFillColor: '${fills[data.fillKey]}',
								popupOnHover: false,
								highlightBorderWidth: 4
							}}
							fills={{
								'No Rights': '#d9d9d9',
								'1 Right': '#fff2cc',
								'2 Rights': '#f8eb84',
								'3 Rights': '#f9cb9c',
								'4 Rights': '#ea9999',
								'Full Rights': '#da6a50',
								'defaultFill': '#fffff'
							}}
							data={{
								AZ: {
									fillKey: 'No Rights'
								},
								CO: {
									fillKey: 'No Rights'
								},
								DE: {
									fillKey: 'No Rights'
								},
								FL: {
									fillKey: 'No Rights'
								},
								GA: {
									fillKey: 'No Rights'
								},
								HI: {
									fillKey: 'No Rights'
								},
								ID: {
									fillKey: 'No Rights'
								},
								IL: {
									fillKey: 'No Rights'
								},
								IN: {
									fillKey: 'No Rights'
								},
								IA: {
									fillKey: 'No Rights'
								},
								KS: {
									fillKey: 'No Rights'
								},
								KY: {
									fillKey: 'No Rights'
								},
								LA: {
									fillKey: 'No Rights'
								},
								MD: {
									fillKey: 'No Rights'
								},
								ME: {
									fillKey: 'No Rights'
								},
								MA: {
									fillKey: 'No Rights'
								},
								MN: {
									fillKey: 'No Rights'
								},
								MI: {
									fillKey: 'No Rights'
								},
								MS: {
									fillKey: 'No Rights'
								},
								MO: {
									fillKey: 'No Rights'
								},
								MT: {
									fillKey: 'No Rights'
								},
								NC: {
									fillKey: 'No Rights'
								},
								NE: {
									fillKey: 'No Rights'
								},
								NV: {
									fillKey: 'No Rights'
								},
								NH: {
									fillKey: 'No Rights'
								},
								NJ: {
									fillKey: 'No Rights'
								},
								NY: {
									fillKey: 'No Rights'
								},
								ND: {
									fillKey: 'No Rights'
								},
								NM: {
									fillKey: 'No Rights'
								},
								OH: {
									fillKey: 'No Rights'
								},
								OK: {
									fillKey: 'No Rights'
								},
								OR: {
									fillKey: 'No Rights'
								},
								PA: {
									fillKey: 'No Rights'
								},
								RI: {
									fillKey: 'No Rights'
								},
								SC: {
									fillKey: 'No Rights'
								},
								SD: {
									fillKey: 'No Rights'
								},
								TN: {
									fillKey: 'No Rights'
								},
								TX: {
									fillKey: 'No Rights'
								},
								UT: {
									fillKey: 'No Rights'
								},
								WI: {
									fillKey: 'No Rights'
								},
								VA: {
									fillKey: 'No Rights'
								},
								VT: {
									fillKey: 'No Rights'
								},
								WA: {
									fillKey: 'No Rights'
								},
								WV: {
									fillKey: 'No Rights'
								},
								WY: {
									fillKey: 'No Rights'
								},
								CA: {
									fillKey: 'No Rights'
								},
								CT: {
									fillKey: 'No Rights'
								},
								AK: {
									fillKey: 'No Rights'
								},
								AR: {
									fillKey: 'No Rights'
								},
								AL: {
									fillKey: 'No Rights'
								}
							}}
							labels
						/>
					</div>
				</div>
				<div className="footer">
					<p className="map-footer">
						Copyright &#169; 2017 <a href="http://www.risenow.us/" className="rise">
							Rise Up, Inc
						</a>
					</p>
				</div>
			</div>
		);
	}

}