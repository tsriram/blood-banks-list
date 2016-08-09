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
			return (
				<div>Enter a search query to see blood bank list!</div>
			);
		}

		if(!bloodbanks.length) {
			return (
				<div>No bloodbank for query - {this.props.q}</div>
			);
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