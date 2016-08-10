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

		return (
			<div className='bb-container'>
				<SearchBox />
				<BloodBanksList bloodbanks={this.state.bloodBanks} q={this.state.q} />
			</div>
		);
	}
}

BloodBanksContainer.displayName = 'BloodBanksContainer';