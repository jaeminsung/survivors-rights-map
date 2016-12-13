import React from 'react';
import Datamap from './datamap';

export default class Map extends React.Component {

	evaluateState(numRights){
		if (numRights == 'No Rights') {
			return `<li><span>&#10006;</span> Right to have rape kit perserved</li>
				<li><span>&#10006;</span> Right to be notified of the destruction of rape kit</li>
				<li><span>&#10006;</span> Right to extend the preservation of rape kit</li>
				<li><span>&#10006;</span> Right to request forensic exams and informed of the results</li>
				<li><span>&#10006;</span> Right to access services and conseling by medical and legal professionals</li>`;
		} else if (numRights == '1 Right') {
			return `<li><span>&#10004;</span> Right to have rape kit perserved</li>
				<li><span>&#10006;</span> Right to be notified of the destruction of rape kit</li>
				<li><span>&#10006;</span> Right to extend the preservation of rape kit</li>
				<li><span>&#10006;</span> Right to request forensic exams and informed of the results</li>
				<li><span>&#10006;</span> Right to access services and conseling by medical and legal professionals</li>`;
		} else if (numRights == '2 Rights') {
			return `<li><span>&#10004;</span> Right to have rape kit perserved</li>
				<li><span>&#10004;</span> Right to be notified of the destruction of rape kit</li>
				<li><span>&#10006;</span> Right to extend the preservation of rape kit</li>
				<li><span>&#10006;</span> Right to request forensic exams and informed of the results</li>
				<li><span>&#10006;</span> Right to access services and conseling by medical and legal professionals</li>`;
		} else if (numRights == '3 Rights') {
			return `<li><span>&#10004;</span> Right to have rape kit perserved</li>
				<li><span>&#10004;</span> Right to be notified of the destruction of rape kit</li>
				<li><span>&#10004;</span> Right to extend the preservation of rape kit</li>
				<li><span>&#10006;</span> Right to request forensic exams and informed of the results</li>
				<li><span>&#10006;</span> Right to access services and conseling by medical and legal professionals</li>`;
		} else if (numRights == '4 Rights') {
			return `<li><span>&#10004;</span> Right to have rape kit perserved</li>
				<li><span>&#10004;</span> Right to be notified of the destruction of rape kit</li>
				<li><span>&#10004;</span> Right to extend the preservation of rape kit</li>
				<li><span>&#10004;</span> Right to request forensic exams and informed of the results</li>
				<li><span>&#10006;</span> Right to access services and conseling by medical and legal professionals</li>`;
		} else {
			return `<li><span>&#10004;</span> Right to have rape kit perserved</li>
				<li><span>&#10004;</span> Right to be notified of the destruction of rape kit</li>
				<li><span>&#10004;</span> Right to extend the preservation of rape kit</li>
				<li><span>&#10004;</span> Right to request forensic exams and informed of the results</li>
				<li><span>&#10004;</span> Right to access services and conseling by medical and legal professionals</li>`;
		}
	}

	render() {
		return (
			<div className="page">
				<div className="header">
					<h2 className="map-label">Sexual Assault Survivors' Rights Map</h2>
					<p className="map-legend">
						Here is a summary of the state laws for sexual assault surviviors. Click on each state for more details.
						<br/>
						[Disclaimer: the displayed information below is not accurate]
					</p>
				</div>
				<div className="map-container">
					<div className="map-header">
						<div className="category-container">
							<img className="category-img" src={require("./images/no_rights.png")} alt="no_right_color"/>
							<div className="category">no rights</div>
						</div>
						<div className="category-container">
							<img className="category-img" src={require("./images/1_right.png")} alt="2_rights_color"/>
							<img className="category-img" src={require("./images/2_rights.png")} alt="2_rights_color"/>
							<img className="category-img" src={require("./images/3_rights.png")} alt="2_rights_color"/>
							<img className="category-img" src={require("./images/4_rights.png")} alt="2_rights_color"/>
							<div className="category">some rights</div>
						</div>
						<div className="category-container">
							<img className="category-img" src={require("./images/5_rights.png")} alt="5_rights_color"/>
							<div className="category">full rights</div>
						</div>
					</div>
					<div className="map">
						<Datamap
							scope="usa"
							geographyConfig={{
								highlightBorderColor: '#bada55',
								highlightFillColor: '${fills[data.fillKey]}',
								popupTemplate: (geography, data) =>
									`<div class='hoverinfo' style='color: black;'>
										<strong class='title'>${geography.properties.name}</strong>
										<p></p>
										<ul style='list-style: none; padding-left:0;'>
											${this.evaluateState(data.fillKey)}
										</ul>
									</div>
									`,
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
									fillKey: '3 Rights'
								},
								DE: {
									fillKey: '1 Right'
								},
								FL: {
									fillKey: '2 Rights'
								},
								GA: {
									fillKey: '4 Rights'
								},
								HI: {
									fillKey: '1 Right'
								},
								ID: {
									fillKey: 'No Rights'
								},
								IL: {
									fillKey: '1 Right'
								},
								IN: {
									fillKey: 'No Rights'
								},
								IA: {
									fillKey: '3 Rights'
								},
								KS: {
									fillKey: '4 Rights'
								},
								KY: {
									fillKey: 'No Rights'
								},
								LA: {
									fillKey: 'No Rights'
								},
								MD: {
									fillKey: '1 Right'
								},
								ME: {
									fillKey: '1 Right'
								},
								MA: {
									fillKey: '1 Right'
								},
								MN: {
									fillKey: '1 Right'
								},
								MI: {
									fillKey: '1 Right'
								},
								MS: {
									fillKey: 'No Rights'
								},
								MO: {
									fillKey: '4 Rights'
								},
								MT: {
									fillKey: 'No Rights'
								},
								NC: {
									fillKey: 'Full Rights'
								},
								NE: {
									fillKey: 'No Rights'
								},
								NV: {
									fillKey: '2 Rights'
								},
								NH: {
									fillKey: '3 Rights'
								},
								NJ: {
									fillKey: '1 Right'
								},
								NY: {
									fillKey: '1 Right'
								},
								ND: {
									fillKey: 'No Rights'
								},
								NM: {
									fillKey: '1 Right'
								},
								OH: {
									fillKey: '2 Rights'
								},
								OK: {
									fillKey: 'No Rights'
								},
								OR: {
									fillKey: '1 Right'
								},
								PA: {
									fillKey: '1 Right'
								},
								RI: {
									fillKey: '1 Right'
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
									fillKey: '1 Right'
								},
								VA: {
									fillKey: '3 Rights'
								},
								VT: {
									fillKey: '1 Right'
								},
								WA: {
									fillKey: '1 Right'
								},
								WV: {
									fillKey: 'No Rights'
								},
								WY: {
									fillKey: 'No Rights'
								},
								CA: {
									fillKey: '1 Right'
								},
								CT: {
									fillKey: '1 Right'
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
						Copyright &#169; 2016 <a href="http://www.risenow.us/" className="rise">
							Rise Up, Inc
						</a>
					</p>
				</div>
			</div>
		);
	}

}