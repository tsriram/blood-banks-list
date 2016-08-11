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
			city = <span className='bb-city'>{bloodbank.city}, </span>
		}
		if(bloodbank.dist && bloodbank.dist !== 'NA') {
			dist = <span className='bb-dist'>{bloodbank.district}, </span>
		}
		if(bloodbank.state && bloodbank.state !== 'NA') {
			state = <span className='bb-state'>{bloodbank.state}</span>
		}
		if(bloodbank.contact && bloodbank.contact !== 'NA') {
			contact = <div className='bb-contact'><span className='bb-label'>Contact: </span>{bloodbank.contact}</div>
		}
		if(bloodbank.helpline && bloodbank.helpline !== 'NA') {
			helpline = <div className='bb-helpline'><span className='bb-label'>Helpline: </span>{bloodbank.helpline}</div>
		}
		if(bloodbank.h_name && bloodbank.h_name !== 'NA') {
			h_name = <div className='bb-h_name'>{bloodbank.h_name}</div>
		}
		if(bloodbank.address && bloodbank.address !== 'NA') {
			address = <span className='bb-address'>{bloodbank.address} - </span>
		}
		if(bloodbank.pincode && bloodbank.pincode !== 'NA') {
			pincode = <span className='bb-pincode'>{bloodbank.pincode}</span>
		}
		if(bloodbank.category && bloodbank.category !== 'NA') {
			category = <span className='bb-category'>({bloodbank.category})</span>
		}
		if(bloodbank.email && bloodbank.email !== 'NA') {
			email = <span className='bb-email'>{bloodbank.email}</span>
		}
		if(bloodbank.web && bloodbank.web !== 'NA') {
			web = <span className='bb-web'>{bloodbank.web}</span>
		}

		return (
			<div className='bb'>

				<div className='bb-header bb-row bold'>
					{city}
					{dist}
					{state}
				</div>

				<div className='bb-row'>
					{contact}
				</div>

				<div className='bb-row'>
					{helpline}
				</div>

				<div className='bb-row bb-address-block'>
					{h_name} {category}
					{address}	{pincode}
				</div>

				<div className='bb-row'>
					{email}
				</div>

				<div className='bb-row'>
					{web}
				</div>

			</div>
		);
	}
}