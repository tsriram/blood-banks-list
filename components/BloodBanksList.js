import React, {Component} from 'react';
import BloodBank from './BloodBank';

export default class BloodBanksList extends Component{
	constructor(props){
		super(props)
	}

	render(){
		var bloodbanks = [];
		if(this.props.q.length > 2) {
			bloodbanks = this.props.bloodbanks.filter((bloodbank) => {
				return bloodbank._index && bloodbank._index.indexOf(this.props.q) !== -1;
			});
		}else {
			return (
				<div>Enter at least 3 characters to see blood bank list!</div>
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