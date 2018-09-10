import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import _ from 'underscore';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Minhas Micro Brewery',
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
      yelpingSince: '',
      input: '',
      showDetails: 0
    }
  }

  componentWillMount() {
    this.getData();
    window.onclick = (e)=> {
      if (e.target == document.getElementById('modal')) {
        this.setState({
          showDetails: 0
        } );
      }
    }
  }

  getData() {
    var name = {data: this.state.name};
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
      });
    }, 'json');
  }

  changeRestaurant(e) {
    e.preventDefault();
    let input = this.state.input;
    console.log(typeof input, input)
    this.setState({
      name: input
    }, () => {
      this.getData();
    });
  }

  showRatings(e) {
    e.preventDefault();
    let show = (this.state.showDetails + 1)%2;
    this.setState({
      showDetails: show
    });
  }

  close(e) {
    e.preventDefault();
    this.setState({
      showDetails: 0
    });
  }

  render() {
    return (<div id="header">
      <div id="headerContainer">
        <div id="mainContainer">
          <div id="part1"><h1>{this.state.name}</h1><div>{this.state.claimed}</div></div>
          <div id="part2">
            <div>Stars: {this.state.ratings.current/2}</div>
            <div>{this.state.ratings.amount} reviews</div>
            <button onClick={this.showRatings.bind(this)}>Details</button>
            <div>{!!(this.state.showDetails) ?
              <div id="modal" >
                <div id="ratings">
                  <div id="btnContainer">
                    <button onClick={this.close.bind(this)} class="close">&times;</button>
                  </div>
                  <h1>Rating Details</h1>
                  <div>Monthly Trend
                    <button>2018</button>
                    <button>2017</button>
                    <button>2016</button>
                  </div>
                  <img src="https://cdn1.iconfinder.com/data/icons/line-essentials-88/20/4327-512.png" alt="Graph here for monthly trends..." min-height="300px" width="300px" />
                  <h3>Overall Rating</h3>
                  <div>Yelping Since {this.state.yelpingSince} with {this.state.ratings.amount} reviews</div>
                  <img src="https://cdn1.iconfinder.com/data/icons/line-essentials-88/20/4327-512.png" alt="Graph here for individual stars..." min-height="300px" width="300px" />
                  <p>We calculate the overall star rating with randomly stored data!</p>
                  <p>Learn More.</p>
                </div>
              </div> : null
            }</div>
          </div>
          <div id="part3">
            <div>{this.state.dollars}</div>
            <div>{_.map(this.state.categories, (category)=> {
              return category.specific;
            })}</div>
            <button>edit</button>
          </div>
        </div>
        <div id="sideModules">
          <button id="WAR">Write a Review</button>
          <button id="add-photo">Add Photo</button>
          <button>Share</button>
          <button>Save</button>
        </div>
      </div>
      <h1>Testing</h1>
      <form>
        <input type="text" id="input" onChange={(e)=> { this.setState({input: e.target.value})}} />
        <input type="submit" onClick={this.changeRestaurant.bind(this)} />
      </form>
      <div id="tempMap">Map Data
        <div>{this.state.address}</div>
        <div>{this.state.city}</div>
        <div>{this.state.state}</div>
        <div>{this.state.postalCode}</div>
        <div>{this.state.latitude}</div>
        <div>{this.state.longitude}</div>
        <div>{this.state.tel}</div>
        <div>{this.state.url}</div>
      </div>
    </div>);
  }
}

ReactDOM.render(
  <Header />,
  document.getElementById('app')
);