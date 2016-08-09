import React, {Component} from 'react';

export default class BloodBank extends Component{
	constructor(props){
		super(props)
	}

	render(){
		let city, dist, state, contact, helpline, h_name, 
				address, pincode, category, email, web = null;
		let bloodbank = this.props.bloodbank;

		if(bloodbank.city && bloodbank.city !== 'NA') {
			city = <span className='city'>{bloodbank.city}</span>
		}
		if(bloodbank.dist && bloodbank.dist !== 'NA') {
			dist = <span className='dist'>{bloodbank.district}</span>
		}
		if(bloodbank.state && bloodbank.state !== 'NA') {
			state = <span className='state'>{bloodbank.state}</span>
		}
		if(bloodbank.contact && bloodbank.contact !== 'NA') {
			contact = <span className='contact'>{bloodbank.contact}</span>
		}
		if(bloodbank.helpline && bloodbank.helpline !== 'NA') {
			helpline = <span className='helpline'>{bloodbank.helpline}</span>
		}
		if(bloodbank.h_name && bloodbank.h_name !== 'NA') {
			h_name = <div className='h_name'>{bloodbank.h_name}</div>
		}
		if(bloodbank.address && bloodbank.address !== 'NA') {
			address = <span className='address'>{bloodbank.address}</span>
		}
		if(bloodbank.pincode && bloodbank.pincode !== 'NA') {
			pincode = <span className='pincode'>{bloodbank.pincode}</span>
		}
		if(bloodbank.category && bloodbank.category !== 'NA') {
			category = <span className='category'>{bloodbank.category}</span>
		}
		if(bloodbank.email && bloodbank.email !== 'NA') {
			email = <span className='email'>{bloodbank.email}</span>
		}
		if(bloodbank.web && bloodbank.web !== 'NA') {
			web = <span className='web'>{bloodbank.web}</span>
		}

		return (
			<div>
			
				<div className='header'>
					{city}
					{dist}
					{state}
				</div>

				<div className='contact'>
					Contact: {contact} | Helpline: {helpline}
				</div>

				<div className='addressBlock'>
					{h_name} ({category})
					{address} - {pincode}
				</div>

				<div className='online'>
					{web} | {email}
				</div>

			</div>
		);
	}
}