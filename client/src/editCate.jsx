import React from 'react';
import styles from '../dist/main.css';

export default class EditCate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div id="edit" className={styles.modal}>
      <div className={styles.ratings}>
        <h1>Edit</h1>
        <div>Edit
          <button>edit</button>
          <button>edit</button>
          <button>edit</button>
        </div>
      </div>
    </div>);
  }
}