import React from 'react';
import styles from '../dist/main.css';

export default class Ratings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="modal" className={styles.modal} >
        <div className={styles.ratings}>
          <div className={styles.btnContainer}>
            <button onClick={this.props.close} className={styles.close}>&times;</button>
          </div>
          <h1>Rating Details</h1>
          <div>Monthly Trend
            <button>2018</button>
            <button>2017</button>
            <button>2016</button>
          </div>
          <img src="https://cdn1.iconfinder.com/data/icons/line-essentials-88/20/4327-512.png" alt="Graph here for monthly trends..." min-height="300px" width="300px" />
          <h3>Overall Rating</h3>
          <div>Yelping Since {this.props.yelpingSince} with {this.props.ratings.amount} reviews</div>
          <img src="https://cdn1.iconfinder.com/data/icons/line-essentials-88/20/4327-512.png" alt="Graph here for individual stars..." min-height="300px" width="300px" />
          <p>We calculate the overall star rating with randomly stored data!</p>
          <p>Learn More.</p>
        </div>
      </div>
    );
  }
}