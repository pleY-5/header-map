import React from 'react';
import styles from '../dist/main.css';

export default class Testing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Testing</h1>
        <form>
          <input type="text" className={styles.input} onChange={this.props.getRes} />
          <input type="submit" onClick={this.props.changeRestaurant} />
        </form>
      </div>
    );
  }

}