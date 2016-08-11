import React, {Component} from 'react';
import BloodBankActions from '../actions/BloodBankActions';

export default class SearchBox extends Component{
	constructor(props){
		super(props)
	}

	filterBloodBanks(e) {
		BloodBankActions.filterBloodBanks(e.target.value.toLowerCase());
	}

	render(){
		let placeholder = 'Enter PIN code or city name to search';
		return (
			<div>
				<input name='bbq' className='bb-q' autoFocus placeholder={placeholder} id='bbq' onChange={this.filterBloodBanks.bind(this)} />
			</div>
		)
	}
}