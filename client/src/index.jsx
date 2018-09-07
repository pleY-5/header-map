import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Minhas Micro Brewery",
			restaurant: '',
			categories: [],
			ratings: {},
			address: '',
			city: '',
			state: '',
			postalCode: '',
			latitude: '',
			longitude: '',
			dollars: 1,
			claimed: true,
			tel: '', 
			url: '',
			yelpingSince: ''
		}
	}

	componentDidMount(){
		this.getData();
	}

	getData() {
		var name = this.state.name
		console.log(typeof name, name)
		$.get('/res', name , (response)=> {
			console.log(`get request success to "/res" with restaurant name: ${name} data: `, response);	
			this.setState({
				restaurant: response,
				categories: response.categories,
				ratings: response.ratings,
				address: response.address,
				city: response.city,
				state: response.state,
				postalCode: response.postalCode,
				latitude: response.latitude,
				longitude: response.longitude,
				dollars: response.dollars,
				claimed: response.claimed,
				tel: response.tel,
				url: response.url,
				yelpingSince: response.yelpingSince
			})
		}, 'json')
	}

	changeRestaurant(e) {
		e.preventDefault();
		let input = $('#input').val();
		console.log(typeof input, input)
		this.setState({
			name: input
		}, () => {
			this.getData();
		});
	}

	render() {
		return (<div>
			<form>
				<input type="text" id="input"/>
				<button onClick={this.changeRestaurant.bind(this)}>input restaurant name</button>
			</form>
			<h1>{this.state.name}</h1>
			<div>{JSON.stringify(this.state.categories)}</div>
			<div>{JSON.stringify(this.state.ratings)}</div>
			<div>{this.state.address}</div>
			<div>{this.state.city}</div>
			<div>{this.state.state}</div>
			<div>{this.state.postalCode}</div>
			<div>{this.state.latitude}</div>
			<div>{this.state.longitude}</div>
			<div>{this.state.dollars}</div>
			<div>{this.state.claimed}</div>
			<div>{this.state.tel}</div>
			<div>{this.state.url}</div>
			<div>{this.state.yelpingSince}</div>			
		</div>)
	}
}

ReactDOM.render(
  <Header />,
  document.getElementById('app')
);