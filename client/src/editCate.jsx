import React from 'react';
import styles from '../dist/main.css';

export default class EditCate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div id="edit" className={styles.modal}>
      <div className={styles.editCont}>
        <div className={styles.editHeader}>
          <div onClick={this.props.close} className={styles.close}>&times;</div>
          <h2>Add or remove categories</h2>
        </div>
        <div className={styles.editBody}>
        
        </div>
      </div>
    </div>);
  }
}