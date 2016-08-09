import React, {Component} from 'react';

export default class SearchBox extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<div>
				<input name='q' id='q' />
				<button name='search'>Search</button>
			</div>
		)
	}
}