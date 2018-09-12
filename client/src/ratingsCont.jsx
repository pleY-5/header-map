import React from 'react';
import styles from '../dist/main.css';
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
        <button onClick={this.props.showRatings}><img src="icons/stats.png" width="14px" height="14px"/>Details</button>
        <div>
          {this.props.showDetails ?
            <Ratings close={this.props.close} yelpingSince={this.props.yelpingSince} ratings={this.props.ratings}/> : null
          }
        </div>
      </div>
    );
  }
}