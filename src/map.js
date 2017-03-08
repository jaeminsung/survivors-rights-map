import React from 'react';
import Popup from 'react-popup';
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
							scope="usa"
							geographyConfig={{
								highlightBorderColor: '#bada55',
								highlightFillColor: '${fills[data.fillKey]}',
								popupTemplate: function(geography, data) {
									Popup.alert('Hello, look at me');
									return [`<div class='hoverinfo'>
										<h2>${geography.properties.name}</h2>
										<h3>Lead Sponsors: </h3>
										<p>Representative Tricia-Farley Bouvier, Senator Cindy Creem, 31 bipartisan Co-Sponsors</p>
										<h3>Status: </h3>
										<p>Passed Unanimously through House and Senate; Signed by Governor Baker</p>
										<h3>Riser: Amanda Nguyen</h3>
										<br>
										<p>This legislation was born from my experience with a broken justice system. I am a rape survivor. I remember walking into the local area rape crisis center waiting room and seeing so many survivors there. The greatest injustice I have ever faced was not the act of rape itself, but the subsequent denial of my rights by the country I love. I grew up believing that America is special because it recognizes universal, inalienable rights. But as a rape survivor, I learned that not all are equal in the eyes of the law. Survivors are continually re-victimized by the very system that was built to seek justice for them. It’s completely unconscionable that a survivor in one state would have a completely different set of rights than a survivor in another state. In building a legal argument for why I deserve to know where the DNA samples taken from my body were stored, I found a patchwork of rights across America. Two survivors shouldn’t have two completely different sets of rights just because they are in two different states. Justice should not depend on geography. My story with a broken system is not mine alone. In facing all of these disparities I realized I had a choice. Accept the injustice or re-write the law. So I, along with an incredible team, wrote this bill. Now it is Federal law and Massachusetts law. I’m going to be honest. Talking about something so personal is scary. But I’m sharing this because I hope you see the importance of these civil rights and I hope that you join us to champion these rights in your state. 
										</p>
									</div>
									`];
							},
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