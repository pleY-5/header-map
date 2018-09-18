import React from 'react';
import $ from 'jquery';
import _ from 'underscore';
// import styles from '../dist/main.css';
import styles from 'https://s3-us-west-1.amazonaws.com/yelp-reactor-header/main.css';
import Map from './map.jsx';
import Cate from './cate.jsx';
import RatingsCont from './ratingsCont.jsx';
import Buttons from './sideButtons.jsx';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Yelp Restaurant',
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
      showDetails: false, 
      shortEnough: false
    };
    this.getRes = this.getRes.bind(this);
    this.showRatings = this.showRatings.bind(this);
    this.close = this.close.bind(this);
    this.changeCate = this.changeCate.bind(this);
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

    //prevent Enter fromt submitting form/input
    const node = document.getElementsByTagName('form')[0];
    const addEvent = node.addEventListener;
    addEvent('keypress', this.handleKeyPress, false);
  }
  
  componentWillUnmount() {
    const removeEvent = node.removeEventListener;
    removeEvent('keypress', this.handleKeyPress);
  }

  handleKeyPress(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  }

  getData() {
    var id = window.location.pathname;
    id = id.substring(1, id.length - 1).toLowerCase();
    $.get(`/${id}/res`, id, (response)=> {
      console.log(`get request success to "/res" with restaurant name: ${id} data: `, response);
      this.setState({
        name: response.name,
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
      }, () => {
        if (this.state.name.length < 20) {
          this.setState({
            shortEnough: true
          });
        }
      });
    }, 'json');
  }

  getRes(e) {
    e.preventDefault();
    this.setState({
      input: e.target.value
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

  changeCate(arr) {
    this.setState({
      categories: arr
    });
  }

  render() {
    return (<div id="header" className={styles.topContainer}>
      <form type="hidden" />
      <div className={styles.headerContainer}>
        <div className={styles.mainContainer}>
          <div className={styles.part1}>
            { this.state.shortEnough ? 
              <h1 className={styles.sname}>{this.state.name}</h1> :
              <h1 className={styles.name}>{this.state.name}</h1>
            }
            <div className={styles.claimed}>
              {this.state.claimed ? <div className={styles.claim} ><img className={styles.claimImage} src="https://s3-us-west-1.amazonaws.com/yelp-reactor-header/claimed.png" width="18px" height="20px"/>Claimed</div> : <div className={styles.unclaim}><img className={styles.unclaimImg} src="https://s3-us-west-1.amazonaws.com/yelp-reactor-header/unclaimed.png" width="18px" height="18px"/>Unclaimed</div>}
            </div>
          </div>
          <RatingsCont ratings={this.state.ratings} showRatings={this.showRatings} showDetails={this.state.showDetails} yelpingSince={this.state.yelpingSince} close={this.close} />
          <Cate dollars={this.state.dollars} categories={this.state.categories} changeCate={this.changeCate}/>
        </div>
        <Buttons />
      </div>
      <div className={styles.subHeader}>
        <Map address={this.state.address} city={this.state.city} state={this.state.state} postalCode={this.state.postalCode} latitude={this.state.latitude} longitude={this.state.longitude} tel={this.state.tel} url={this.state.url} />
      </div>
    </div>);
  }
}