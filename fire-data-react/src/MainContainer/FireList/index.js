import React, { Component } from 'react';


class FireList extends Component {
render(){
	let fireList = this.props.firesData.map((fire, index) => {
		return <li key={index}>
			{fire.report.name}
				</li>
		})

		return (

		<div class="panel panel-primary" id="result_panel">
    		<div class="panel-heading">
    			<h3 class="panel-title">Fire List</h3>
    		</div>
    
    	<div class="panel-body">
        	<ul class="list-group">
            	<li class="list-group-item"><strong>
            	{fireList}</strong></li>
            </ul>
        </div>
        </div>
        )
	}
}

export default FireList