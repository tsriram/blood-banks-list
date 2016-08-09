import alt from '../alt';
import BloodBankActions from '../actions/BloodBankActions';

class BloodBankStore{
	constructor(){
		this.bloodBanks = [];
		this.errorMessage = null;
		this.q = "";

		this.bindListeners({
			handleUpdateBloodBanks: BloodBankActions.UPDATE_BLOOD_BANKS,
			handleFetchBloodBanks: BloodBankActions.FETCH_BLOOD_BANKS,
			handleBloodBanksFailed: BloodBankActions.BLOOD_BANKS_FAILED,
			handleFilter: BloodBankActions.FILTER_BLOOD_BANKS
		})
	}

	handleUpdateBloodBanks(bloodBanks){
		this.bloodBanks = bloodBanks;
		this.errorMessage = null;
	}

	handleFetchBloodBanks() {
		this.bloodBanks = [];
	}

	handleBloodBanksFailed(errorMessage) {
		this.errorMessage = errorMessage;
	}

	handleFilter(q) {
		this.q = q;
	}
}

export default alt.createStore(BloodBankStore, 'BloodBankStore')