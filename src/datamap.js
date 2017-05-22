import React from 'react';
import Datamaps from 'datamaps';
import Popup from 'react-popup';
import './datamap.css';

const MAP_CLEARING_PROPS = [
	'height', 'scope', 'setProjection', 'width'
];

const propChangeRequiresMapClear = (oldProps, newProps) => {
	return MAP_CLEARING_PROPS.some((key) =>
		oldProps[key] !== newProps[key]
	);
};

var PopUpComponent = React.createClass({
	render: function() {
		let victory = null;
		let riserText = null;

		if (this.props.victory === true) {
			const victoryText = 'The Survivors\' Bill of Rights has been implemented here. ';
            let riserImages = '';
            if (this.props.riserImages.length) {
                riserImages = this.props.riserImages.map(function(url, index) {
                    return <img alt="riser" src={url} key={index} className='riser-image'/>;
                })
            }
            riserText = 	<span>
								The Riser(s) responsible for leading the movement:
								<span style={{fontWeight: 'bold'}}> {this.props.riser}</span>.
							</span>
			victory = <div>
						<h1 style={{textAlign: 'center', color: '#da6a50'}}>VICTORY!!</h1>
						<br/>
						<p style={{margin: 'margin: 0 20px 0 20px', textAlign: 'center'}}> {victoryText}
							{this.props.riser.length ? riserText : ''}
						</p>
                        <div className="riser-images">{riserImages}</div>
					</div>;
			return (
				<div>
					{victory}
				</div>
			);
		} else if(this.props.fillKey === 'Partial Impl') {
            let narrative = null;
            let narrative2 = null;
            let riserImages = null;
            let riser2 = this.props.riser2 ? ` and ${this.props.riser2}` : '';
            if(this.props.riserImages.length) {
                riserImages = this.props.riserImages.map(function(url, index) {
                    return <img alt="riser" src={url} key={index} className='riser-image'/>;
                })
            }
			if (this.props.narrative !== '') {
				const narrativeLabel = `${this.props.riser}'s Story`
				narrative = <div><div className='popup-label'>{narrativeLabel} : </div><p>{this.props.narrative}</p></div>;
			}
            if (this.props.narrative2) {
                const narrative2Label = `${this.props.riser2}'s Story`
                narrative2 = <div><div className='popup-label'>{narrative2Label} : </div><p>{this.props.narrative2}</p></div>;
            }

			return (
				<div>
					<p><span className='popup-label'>Riser: </span>{this.props.riser}{riser2}</p>
					<br/>
                    <div className="riser-images">{riserImages}</div>
					{narrative}
					{narrative2}
				</div>
			);
		} else {
            return (
                <div>
                    <p>We aren’t active in this state yet, please join the movement so we can get in touch when we launch here!</p>
                </div>
            );
        }
	}
});

export default class Datamap extends React.Component {

	static propTypes = {
		arc: React.PropTypes.array,
		arcOptions: React.PropTypes.object,
		bubbleOptions: React.PropTypes.object,
		bubbles: React.PropTypes.array,
		data: React.PropTypes.object,
		graticule: React.PropTypes.bool,
		height: React.PropTypes.any,
		labels: React.PropTypes.bool,
		style: React.PropTypes.object,
		updateChoroplethOptions: React.PropTypes.object,
		width: React.PropTypes.any
	};

	componentDidMount() {
		this.drawMap();
	}

	componentWillReceiveProps(newProps) {
		if (propChangeRequiresMapClear(this.props, newProps)) {
			this.clear();
		}
	}

	componentDidUpdate() {
		this.drawMap();
	}

	componentWillUnmount() {
		this.clear();
	}

	clear() {
		const { container } = this.refs;

		for (const child of Array.from(container.childNodes)) {
			container.removeChild(child);
		}

		delete this.map;
	}

	drawMap() {
		const {
			arc,
			arcOptions,
			bubbles,
			bubbleOptions,
			data,
			graticule,
			labels,
			updateChoroplethOptions,
			...props
		} = this.props;

		let map = this.map;

		if (!map) {
			map = this.map = new Datamaps({
				...props,
				data,
				element: this.refs.container,
				responsive: true,
				done: function(datamap) {
					datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
						let dataInfo = JSON.parse(event.target.getAttributeNode('data-info').value)
						let sponsors = dataInfo["sponsors"];
						let status = dataInfo["status"];
						let riser = dataInfo["riser"];
                        let riser2 = dataInfo['riser2'];
						let help_riser = riser === 'RISER NEEDED' ? 'the Movement' : (riser2 ? `${riser} and ${riser2}` : riser);
						let narrative = dataInfo["narrative"];
                        let narrative2 = dataInfo['narrative2'];
						let stateName = geography.properties["name"];
						let victory = !!dataInfo["victory"];
						let url = dataInfo["url"];
                        let riserImages = dataInfo["riserImages"] || [];
                        let fillKey = dataInfo['fillKey'];
						if (victory) {
							Popup.create({
								title: stateName,
								content: <PopUpComponent sponsors={sponsors} status={status} riser={riser} narrative={narrative} victory={victory} riserImages={riserImages} />,
								className: 'alert',
								buttons: {
									right: [{
										text: `Return and Help Another State`,
										className: 'success',
										action: function () {
											Popup.close();
										}
									}]
								}
							});
						} else {
							Popup.create({
								title: stateName,
								content: <PopUpComponent fillKey={fillKey} sponsors={sponsors} status={status} riser={riser} riser2={riser2} narrative={narrative} narrative2={narrative2} riserImages={riserImages}/>,
								className: 'alert',
								buttons: {
									right: [{
										text: `Help ${help_riser}`,
										className: 'success',
										action: function () {
											if (url != null) {
												window.open(url);
											} else {
												window.open('https://actonthis.org/causes/rise');
											}
											Popup.close();
										}
									}]
								}
							});
						}
					});
				}
			});

			window.addEventListener('resize', function() {
				map.resize();
			});
		} else {
			map.updateChoropleth(data, updateChoroplethOptions);
		}

		if (arc) {
			map.arc(arc, arcOptions);
		}

		if (bubbles) {
			map.bubbles(bubbles, bubbleOptions);
		}

		if (graticule) {
			map.graticule();
		}

		if (labels) {
			map.labels({labelColor: 'black', fontSize: 11});
		}
	}

	render() {
		const style = {
			height: '100%',
			position: 'relative',
			width: '100%',
			...this.props.style
		};

		return (
				<div>
					<Popup />
					<div ref="container" style={style} />
				</div>
			);
	}

}
