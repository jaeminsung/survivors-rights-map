import React from 'react';
// import Image from 'react-native';
import Datamap from './datamap';
import { Form, Modal, ModalHeader, ModalBody } from 'react-bootstrap';

export default class Map extends React.Component {

	render() {
		return (
			<div className="body-container">
				<h3 className="map-label">Sexual Assault Survivors' Rights Map</h3>
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
				<div className="map-container">
					<Datamap
						scope="usa"
						geographyConfig={{
							highlightBorderColor: '#bada55',
							highlightFillColor: '${fills[data.fillKey]}',
							popupTemplate: (geography, data) =>
								`<div class='hoverinfo'>
									${geography.properties.name}
								</div>
								`,
								//`<div class='hoverinfo'>${geography.properties.name}\nElectoral Votes: ${data.electoralVotes}`,
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
								fillKey: 'No Rights',
								electoralVotes: 5
							},
							CO: {
								fillKey: '3 Rights',
								electoralVotes: 5
							},
							DE: {
								fillKey: '1 Right',
								electoralVotes: 32
							},
							FL: {
								fillKey: '2 Rights',
								electoralVotes: 29
							},
							GA: {
								fillKey: '4 Rights',
								electoralVotes: 32
							},
							HI: {
								fillKey: '1 Right',
								electoralVotes: 32
							},
							ID: {
								fillKey: 'No Rights',
								electoralVotes: 32
							},
							IL: {
								fillKey: '1 Right',
								electoralVotes: 32
							},
							IN: {
								fillKey: 'No Rights',
								electoralVotes: 11
							},
							IA: {
								fillKey: '3 Rights',
								electoralVotes: 11
							},
							KS: {
								fillKey: '4 Rights',
								electoralVotes: 32
							},
							KY: {
								fillKey: 'No Rights',
								electoralVotes: 32
							},
							LA: {
								fillKey: 'No Rights',
								electoralVotes: 32
							},
							MD: {
								fillKey: '1 Right',
								electoralVotes: 32
							},
							ME: {
								fillKey: '1 Right',
								electoralVotes: 32
							},
							MA: {
								fillKey: '1 Right',
								electoralVotes: 32
							},
							MN: {
								fillKey: '1 Right',
								electoralVotes: 32
							},
							MI: {
								fillKey: '1 Right',
								electoralVotes: 32
							},
							MS: {
								fillKey: 'No Rights',
								electoralVotes: 32
							},
							MO: {
								fillKey: '4 Rights',
								electoralVotes: 13
							},
							MT: {
								fillKey: 'No Rights',
								electoralVotes: 32
							},
							NC: {
								fillKey: 'Full Rights',
								electoralVotes: 32
							},
							NE: {
								fillKey: 'No Rights',
								electoralVotes: 32
							},
							NV: {
								fillKey: '2 Rights',
								electoralVotes: 32
							},
							NH: {
								fillKey: '3 Rights',
								electoralVotes: 32
							},
							NJ: {
								fillKey: '1 Right',
								electoralVotes: 32
							},
							NY: {
								fillKey: '1 Right',
								electoralVotes: 32
							},
							ND: {
								fillKey: 'No Rights',
								electoralVotes: 32
							},
							NM: {
								fillKey: '1 Right',
								electoralVotes: 32
							},
							OH: {
								fillKey: '2 Rights',
								electoralVotes: 32
							},
							OK: {
								fillKey: 'No Rights',
								electoralVotes: 32
							},
							OR: {
								fillKey: '1 Right',
								electoralVotes: 32
							},
							PA: {
								fillKey: '1 Right',
								electoralVotes: 32
							},
							RI: {
								fillKey: '1 Right',
								electoralVotes: 32
							},
							SC: {
								fillKey: 'No Rights',
								electoralVotes: 32
							},
							SD: {
								fillKey: 'No Rights',
								electoralVotes: 32
							},
							TN: {
								fillKey: 'No Rights',
								electoralVotes: 32
							},
							TX: {
								fillKey: 'No Rights',
								electoralVotes: 32
							},
							UT: {
								fillKey: 'No Rights',
								electoralVotes: 32
							},
							WI: {
								fillKey: '1 Right',
								electoralVotes: 32
							},
							VA: {
								fillKey: '3 Rights',
								electoralVotes: 32
							},
							VT: {
								fillKey: '1 Right',
								electoralVotes: 32
							},
							WA: {
								fillKey: '1 Right',
								electoralVotes: 32
							},
							WV: {
								fillKey: 'No Rights',
								electoralVotes: 32
							},
							WY: {
								fillKey: 'No Rights',
								electoralVotes: 32
							},
							CA: {
								fillKey: '1 Right',
								electoralVotes: 32
							},
							CT: {
								fillKey: '1 Right',
								electoralVotes: 32
							},
							AK: {
								fillKey: 'No Rights',
								electoralVotes: 32
							},
							AR: {
								fillKey: 'No Rights',
								electoralVotes: 32
							},
							AL: {
								fillKey: 'No Rights',
								electoralVotes: 32
							}
						}}
						labels
					/>
				</div>
			</div>
		);
	}

}