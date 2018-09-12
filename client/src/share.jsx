import React from 'react';
import styles from '../dist/main.css';

export default class Share extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div id="share" className={styles.modal}>
      <div className={styles.ratings}>
        <h1>share</h1>
        <div>share
          <button>share</button>
          <button>share</button>
          <button>share</button>
        </div>
      </div>
    </div>);
  }
}