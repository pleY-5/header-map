import React from 'react';
// import styles from '../dist/main.css';
import styles from 'https://s3-us-west-1.amazonaws.com/yelp-reactor-header/main.css';

export default class Ratings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="modal" className={styles.modal} >
        <div className={styles.ratingsCont} >
          <div onClick={this.props.close} className={styles.close}>&times;</div>
          <div className={styles.ratings}>
            <div className={styles.ratingsHeader}><h2>Rating Details</h2></div>
            <div className={styles.ratingsBody} >
              <div className={styles.monthlyTrend}>
                <div className={styles.rateMidHeader}>
                  <p>Monthly Trend</p>
                  <div className={styles.rateMidYears}>
                    <div className={styles.rateYrCont}>
                      <ul className={styles.rateTable}>
                        <li className={styles.rateCell}>
                          <a>2018</a>
                        </li>
                        <li className={styles.rateCell}>
                          <a>2017</a>
                        </li>
                        <li className={styles.rateCell}>
                          <a>2016</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <h3>Overall Rating</h3>
              <div>Yelping Since {this.props.yelpingSince} with {this.props.ratings.amount} reviews</div>
              <p>We calculate the overall star rating with randomly stored data!</p>
              <p>Learn More.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}