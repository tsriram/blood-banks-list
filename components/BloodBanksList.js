import React, {Component} from 'react';
import BloodBank from './BloodBank';

export default class BloodBanksList extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<div>
			{
				this.props.bloodbanks.map((bloodbank) => {
					return (
						<BloodBank key={bloodbank.id} bloodbank={bloodbank} />
					);
				})
			}
			</div>
		);
	}
}