import React from 'react';
import Datamaps from 'datamaps';
import Popup from 'react-popup';
import './datamap.css'

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
    return (
      <div>
      	<h1>State: {this.props.stateName}</h1>
      	<h2>{this.props.leadSponsors}</h2>
      	<h2>{this.props.status}</h2>
      </div>
    );
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
						let leadSponsors = dataInfo["leadSponsors"]
						let status = dataInfo["status"]
						let stateName = geography.properties["name"]
						Popup.alert(<PopUpComponent stateName={stateName} leadSponsors={leadSponsors} status={status} />);
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
			map.labels({labelColor: 'navy', fontSize: 11});
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