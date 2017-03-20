import React from 'react';
import Datamap from './datamap';
import RiseStateData from './risestatedata';

export default class Map extends React.Component {

	render() {
		return (
			<div className="page">
				<div className="header">
					<h3 className="map-label">Follow the Movement: Click Your State</h3>
					<h4 className="map-label-h4">Join the fight!</h4>
					{/*<p className="map-legend">
						Follow the progress of the implementation of Sexual Assault Survivors' Rights in all 50 states.
					</p>*/}
				</div>
				<div className="map-container">
					<div className="map-header">
						<div className="category-container">
							<i className="fa fa-circle impl-icon no-impl"></i>
							<div className="category">Start the Movement Here</div>
						</div>
						<div className="category-container">
							<i className="fa fa-circle impl-icon partial-impl "></i>
							<div className="category">Rise Movement Here</div>
						</div>
						<div className="category-container">
							<i className="fa fa-circle impl-icon full-impl"></i>
							<div className="category">Victory</div>
						</div>
					</div>
					<div className="map">
						<Datamap
							id="dataMap"
							scope="usa"
							geographyConfig={{
								borderColor: 'white',
								highlightBorderColor: '#bada55',
								highlightFillColor: '${fills[data.fillKey]}',
								popupOnHover: false,
								highlightBorderWidth: 4
							}}
							fills={{
								'No Impl': '#d9d9d9',
								'Partial Impl': '#f9cb9c',
								'Full Impl': '#409fdf',
								'defaultFill': '#fffff'
							}}
							data={RiseStateData}
							labels
						/>
					</div>
				</div>
				{/*<div className="footer">
					<p className="map-footer">
						Copyright &#169; 2017 <a href="http://www.risenow.us/" className="rise">
							Rise Up, Inc
						</a>
					</p>
				</div>*/}
			</div>
		);
	}
}
