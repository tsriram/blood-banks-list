import alt from '../alt';
// import BloodBanksSource from '../sources/BloodBanksSource';
import {fetchBloodBanks} from '../sources/BloodBanksSource';

class BloodBankActions {
	updateBloodBanks(bloodBanks) {
		return bloodBanks;
	}

	fetchBloodBanks() {
		// console.log('fetchBloodBanks', BloodBanksSource);
		return (dispatch) => {
			dispatch();
			fetchBloodBanks()
				.then((bloodbanks) => {
					this.updateBloodBanks(bloodbanks);
				})
				.catch((errorMessage) => {
					this.bloodBanksFailed(errorMessage);
				});
		}
	}

	bloodBanksFailed(errorMessage) {
		return errorMessage;
	}
}

export default alt.createActions(BloodBankActions);