import React from 'react';
import $ from 'jquery';
import _ from 'underscore';
import styles from '../dist/main.css';
import Testing from './testing.jsx';
import Map from './map.jsx';
import Cate from './cate.jsx';
import RatingsCont from './ratingsCont.jsx';
import Buttons from './sideButtons.jsx';

export default class Header extends React.Component {
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
      showDetails: false
    };
    this.getRes = this.getRes.bind(this);
    this.showRatings = this.showRatings.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    this.getData();
    window.addEventListener('click', (e)=> {
      if (e.target === document.getElementById('modal')) {
        this.setState({
          showDetails: false
        });
      }
    });
  }

  getData() {
    var name = {data: this.state.name};
    $.get('/res', name, (response)=> {
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

  getRes(e) {
    e.preventDefault();
    this.setState({
      input: e.target.value
    });
  }

  changeRestaurant(e) {
    e.preventDefault();
    let res = this.state.input;
    this.setState({
      name: res
    }, () => {
      this.getData();
    });
  }

  showRatings(e) {
    e.preventDefault();
    this.setState({
      showDetails: true
    });
  }

  close(e) {
    e.preventDefault();
    this.setState({
      showDetails: false
    });
  }

  render() {
    return (<div id="header" className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.mainContainer}>
          <div className={styles.part1}>
            <h1 className={styles.name}>{this.state.name}</h1>
            <div className={styles.claimed}>
              {this.state.claimed ? <div className={styles.claim} ><img className={styles.claimImage} src="icons/claimed.png" width="18px" height="20px"/>Claimed</div> : <div><img src="icons/unclaimed.png" width="18px" height="20px"/>Unclaimed</div>}
            </div>
          </div>
          <RatingsCont ratings={this.state.ratings} showRatings={this.showRatings} showDetails={this.state.showDetails} yelpingSince={this.state.yelpingSince} close={this.close} />
          <Cate dollars={this.state.dollars} categories={this.state.categories} />
        </div>
        <Buttons />
      </div>
      <img src="icons/template.png" width="960px" height="112px"/>
      <Testing changeRestaurant={this.changeRestaurant.bind(this)} getRes={this.getRes}/>
      <Map address={this.state.address} city={this.state.city} state={this.state.state} postalCode={this.state.postalCode} latitude={this.state.latitude} longitude={this.state.longitude} tel={this.state.tel} url={this.state.url} />
    </div>);
  }
}