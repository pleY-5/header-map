import React from 'react';
import styles from '../dist/main.css';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.tempMap}>Map Data
        <div>{this.props.address}</div>
        <div>{this.props.city}</div>
        <div>{this.props.state}</div>
        <div>{this.props.postalCode}</div>
        <div>{this.props.latitude}</div>
        <div>{this.props.longitude}</div>
        <div>{this.props.tel}</div>
        <div>{this.props.url}</div>
      </div>
    );
  }
}