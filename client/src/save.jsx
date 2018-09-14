import React from 'react';
import styles from '../dist/main.css';

export default class Save extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div id="save" className={styles.modal}>
      <div className={styles.ratings}>
        <h1>save</h1>
        <div>save
          <button>save</button>
          <button>save</button>
          <button>save</button>
        </div>
      </div>
    </div>);
  }
}