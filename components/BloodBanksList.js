import React, {Component} from 'react';
import BloodBank from './BloodBank';

export default class BloodBanksList extends Component{
	constructor(props){
		super(props)
	}

	render(){
		var bloodbanks = [];
		if(this.props.q.length) {
			bloodbanks = this.props.bloodbanks.filter((bloodbank) => {
				return bloodbank.pincode === this.props.q;
			});
		}else {
			bloodbanks = this.props.bloodbanks;
		}

		return (
			<div>
			{
				bloodbanks.map((bloodbank) => {
					return (
						<BloodBank key={bloodbank.id} bloodbank={bloodbank} />
					);
				})
			}
			</div>
		);
	}
}