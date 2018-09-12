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
        <div>Stars: {this.props.ratings.current / 2}</div>
        <div>{this.props.ratings.amount} reviews</div>
        <button onClick={this.props.showRatings}>Details</button>
        <div>
          {this.props.showDetails ?
            <Ratings close={this.props.close} yelpingSince={this.props.yelpingSince} ratings={this.props.ratings}/> : null
          }
        </div>
      </div>
    );
  }
}