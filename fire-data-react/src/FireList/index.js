import React, { Component } from 'react';


class FireList extends Component {
render(){
	let fireList = this.props.firesData.map((fire, index) => {
		return <li key={index}>
			{fire.report.name}
			{fire.loc.long}
			{fire.loc.lat}
		</li>
		})

		return (
			<div>
				<ul>
					{fireList}
				</ul>
			</div>
		)
	}
}

export default FireList