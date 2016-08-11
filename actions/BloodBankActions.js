import alt from '../alt';
// import BloodBanksSource from '../sources/BloodBanksSource';
import {fetchBloodBanks} from '../sources/BloodBanksSource';
var ij = require('index-json');

class BloodBankActions {

	updateBloodBanks(bloodBanks) {
		return bloodBanks;
	}

	fetchBloodBanks() {
		let indexKeys = ['city', 'pincode'];
		let skipValue = 'NA';
		return (dispatch) => {
			dispatch();
			fetchBloodBanks()
				.then((bloodbanks) => {
					this.updateBloodBanks(ij.index(bloodbanks, indexKeys, skipValue));
				})
				.catch((errorMessage) => {
					this.bloodBanksFailed(errorMessage);
				});
		}
	}

	bloodBanksFailed(errorMessage) {
		return errorMessage;
	}

	filterBloodBanks(q) {
		return q;
	}
}

export default alt.createActions(BloodBankActions);