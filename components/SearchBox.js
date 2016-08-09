import React, {Component} from 'react';
import BloodBankActions from '../actions/BloodBankActions';

export default class SearchBox extends Component{
	constructor(props){
		super(props)
	}

	filterBloodBanks(e) {
		console.log('filterBloodBanks...', e.target.value);
		BloodBankActions.filterBloodBanks(e.target.value);
	}

	render(){
		return (
			<div>
				<input name='q' id='q' onChange={this.filterBloodBanks.bind(this)} />
				<button name='search'>Search</button>
			</div>
		)
	}
}