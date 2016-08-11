import React, {Component} from 'react';
import BloodBankActions from '../actions/BloodBankActions';
import BloodBankStore from '../stores/BloodBankStore';
import BloodBanksList from './BloodBanksList';
import SearchBox from './SearchBox';

export default class BloodBanksContainer extends Component {
	constructor(props) {
		super(props);
		this.state = BloodBankStore.getState();
		this.onBBStoreChange = this.onStateChange.bind(this);
		const LOADING_IMG = 'http://localhost:8000/loader.gif';
	}

	componentDidMount() {
	    BloodBankStore.listen(this.onBBStoreChange);

	    BloodBankActions.fetchBloodBanks();
	}

	componentWillMount() {
	    BloodBankStore.unlisten(this.onBBStoreChange);  
	}

	onStateChange(state) {
		this.setState(state);
	}

	render() {
		if(this.state.errorMessage) {
			return (
				<div>Something went wrong!</div>
			);
		}

		if(!this.state.bloodBanks.length) {
			return (
				<div>
					<img src="loader.gif" />
				</div>
			);
		}

		var filteredBloodbanks = [];

		if(this.state.q.length > 2) {
			filteredBloodbanks = this.state.bloodBanks.filter((bloodbank) => {
				return bloodbank._index && bloodbank._index.indexOf(this.state.q) !== -1;
			});
		}else {
			return (
				<div className='bb-container'>
					<SearchBox />
					<div className='bb'>Enter at least 3 characters to see blood bank list!</div>
				</div>
			);
		}

		if(!filteredBloodbanks.length) {
			return (
				<div className='bb-container'>
					<SearchBox />
					<div className='bb'>No bloodbank for query - {this.state.q}</div>
				</div>
			);
		}

		return (
			<div className='bb-container'>
				<SearchBox />
				<BloodBanksList bloodbanks={filteredBloodbanks} />
			</div>
		);
	}
}

BloodBanksContainer.displayName = 'BloodBanksContainer';