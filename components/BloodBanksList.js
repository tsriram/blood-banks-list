import React, {Component} from 'react';

export default class BloodBanksList extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<ul>
				{this.props.bloodbanks.map((bloodbank) => {
					return (
						<li key={bloodbank.id}>{bloodbank.state}</li>
					);
				})}
			</ul>
		);
	}
}