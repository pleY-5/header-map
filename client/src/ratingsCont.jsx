import React from 'react';
// import styles from '../dist/main.css';
import styles from 'https://s3-us-west-1.amazonaws.com/yelp-reactor-header/main.css';
import Ratings from './ratings.jsx';

export default class RatingsCont extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.part2}>
        <div className={styles['stars' + this.props.ratings.current] + ' ' + styles.stars}></div>
        <div>{this.props.ratings.amount} reviews</div>
        <a className={styles.rateBtn} onClick={this.props.showRatings}><div className={styles.stats}> </div><div className={styles.text}>Details</div></a>
        <div>
          {this.props.showDetails ?
            <Ratings close={this.props.close} yelpingSince={this.props.yelpingSince} ratings={this.props.ratings}/> : null
          }
        </div>
      </div>
    );
  }
}