import React from 'react';
// import styles from '../dist/main.css';
import styles from 'https://s3-us-west-1.amazonaws.com/yelp-reactor-header/main.css';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.mapContainer}>
        <div className={styles.map}><img src="https://s3-us-west-1.amazonaws.com/yelp-reactor-header/tempMap.png" width="286px" height="135px"></img></div>
        <div className={styles.mapBody} >
          <ul className={styles.mapInfo}>
            <li>
              <div className={styles.addd}>
                <img className={styles.mapImg} src="https://s3-us-west-1.amazonaws.com/yelp-reactor-header/loc.png" width="14px" height="16px"></img>
                <div className={styles.addressInfo}>
                  <a><address className={styles.address}><div>{this.props.address}</div> {this.props.city}, {this.props.state} {this.props.postalCode}</address></a>
                </div>
                <a className={styles.mapEdit}><img src="https://s3-us-west-1.amazonaws.com/yelp-reactor-header/edit.png" width="12px" height="12px"></img>Edit</a>
              </div>
            </li>
            <li className={styles.moveInfo}>
              <img src="https://s3-us-west-1.amazonaws.com/yelp-reactor-header/direction.png" width="16px" height="16px"></img>
              <a className={styles.highlight}>Get Directions</a>
            </li>
            <li className={styles.moveInfo}>
              <img src="https://s3-us-west-1.amazonaws.com/yelp-reactor-header/phone.png" width="16px" height="16px"></img>
              <a className={styles.tell}>{this.props.tel}</a>
            </li>
            <li className={styles.moveInfo}>
              <img src="https://s3-us-west-1.amazonaws.com/yelp-reactor-header/share.png" width="16px" height="16px"></img>
              <a className={styles.highlight}>{this.props.url}</a>
            </li>
            <li className={styles.moveInfo}>
              <img src="https://s3-us-west-1.amazonaws.com/yelp-reactor-header/message.png" width="16px" height="14px"></img>
              <a className={styles.highlight}>Message the business</a>
            </li>
            <li className={styles.moveInfo}>
              <img src="https://s3-us-west-1.amazonaws.com/yelp-reactor-header/reservation.png" width="16px" height="16px"></img>
              <a className={styles.highlight}>Make a Reservation</a>
            </li>
            <li className={styles.moveInfo}>
              <img src="https://s3-us-west-1.amazonaws.com/yelp-reactor-header/sendPhone.png" width="14px" height="17px"></img>
              <a className={styles.highlight}>Send to your Phone</a>
            </li>
          </ul>
        </div>
        {/* <div>{this.props.address}</div>
        <div>{this.props.city}</div>
        <div>{this.props.state}</div>
        <div>{this.props.postalCode}</div>
        <div>{this.props.latitude}</div>
        <div>{this.props.longitude}</div>
        <div>{this.props.tel}</div>
        <div>{this.props.url}</div> */}
      </div>
    );
  }
}