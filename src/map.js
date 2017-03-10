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
							<i className="fa fa-circle impl-icon no-impl"></i>
							<div className="category"> no implementation</div>
						</div>
						<div className="category-container">
							<i className="fa fa-circle impl-icon partial-impl "></i>
							<div className="category"> partially implemented</div>
						</div>
						<div className="category-container">
							<i className="fa fa-circle impl-icon full-impl"></i>
							<div className="category"> fully implemented</div>
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
								'No Rights': '#d9d9d9',
								'Partial Rights': '#f9cb9c',
								'Full Rights': '#409fdf',
								'defaultFill': '#fffff'
							}}
							data={{
								AZ: {
									fillKey: 'Partial Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'Sabrina Dobson',
									narrative: ''
								},
								CO: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'Emily Ivker',
									narrative: ''
								},
								DE: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'Sage Carson',
									narrative: ''
								},
								FL: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								GA: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								HI: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								ID: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								IL: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								IN: {
									fillKey: 'Partial Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'Grace Watkins',
									narrative: ''
								},
								IA: {
									fillKey: 'Partial Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'Maridith Morris',
									narrative: ''
								},
								KS: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								KY: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								LA: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								MD: {
									fillKey: 'Partial Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								ME: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								MA: {
									fillKey: 'Full Rights',
									sponsors: "Representative Tricia-Farley Bouvier, Senator Cindy Creem, 31 bipartisan Co-Sponsors",
									status : "Passed Unanimously through House and Senate; Signed by Governor Baker",
									riser : "Amanda Nguyen and Sophie Gould",
									narrative : "This legislation was born from my experience with a broken justice system. I am a rape survivor. I remember walking into the local area rape crisis center waiting room and seeing so many survivors there. The greatest injustice I have ever faced was not the act of rape itself, but the subsequent denial of my rights by the country I love. I grew up believing that America is special because it recognizes universal, inalienable rights. But as a rape survivor, I learned that not all are equal in the eyes of the law. Survivors are continually re-victimized by the very system that was built to seek justice for them. It’s completely unconscionable that a survivor in one state would have a completely different set of rights than a survivor in another state. In building a legal argument for why I deserve to know where the DNA samples taken from my body were stored, I found a patchwork of rights across America. Two survivors shouldn’t have two completely different sets of rights just because they are in two different states. Justice should not depend on geography. My story with a broken system is not mine alone. In facing all of these disparities I realized I had a choice. Accept the injustice or re-write the law. So I, along with an incredible team, wrote this bill. Now it is Federal law and Massachusetts law. I’m going to be honest. Talking about something so personal is scary. But I’m sharing this because I hope you see the importance of these civil rights and I hope that you join us to champion these rights in your state. "
								},
								MN: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'Jamie Cheever',
									narrative: ''
								},
								MI: {
									fillKey: 'Partial Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								MS: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								MO: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								MT: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								NC: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'Patty Killmer',
									narrative: ''
								},
								NE: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'Julia Reilly',
									narrative: ''
								},
								NV: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								NH: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								NJ: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								NY: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'Amanda Wingle',
									narrative: ''
								},
								ND: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								NM: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								OH: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'Nadia Dawisha and Selena Baumgardner',
									narrative: ''
								},
								OK: {
									fillKey: 'Partial Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'Danielle Tudor',
									narrative: ''
								},
								OR: {
									fillKey: 'Full Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'Jackie Swanson and Brenda Tracy',
									narrative: ''
								},
								PA: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								RI: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								SC: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								SD: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								TN: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								TX: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'Wendy Davis',
									narrative: ''
								},
								UT: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								WI: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'John Scanlon',
									narrative: ''
								},
								VA: {
									fillKey: 'Full Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'Lara McLoed',
									narrative: ''
								},
								VT: {
									fillKey: 'Partial Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								WA: {
									fillKey: 'Full Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'Leah Griffin',
									narrative: ''
								},
								WV: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								WY: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								CA: {
									fillKey: 'Partial Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'Jennifer Li',
									narrative: ''
								},
								CT: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'Sergio Lopez',
									narrative: ''
								},
								AK: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								AR: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								AL: {
									fillKey: 'No Rights',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
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