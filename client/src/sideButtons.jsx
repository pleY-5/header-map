import React from 'react';
import styles from '../dist/main.css';
import Share  from './share.jsx';
import Save from './save.jsx';

export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      share: false,
      save: false
    };
    this.share = this.share.bind(this);
    this.save = this.save.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', (e)=> {
      if (e.target === document.getElementById('share')) {
        this.setState({
          share: false
        } );
      }
      if (e.target === document.getElementById('save')) {
        this.setState({
          save: false
        } );
      }
    });
  }

  share(e) {
    e.preventDefault();
    this.setState({
      share: true
    });
  }

  save(e) {
    e.preventDefault();
    this.setState({
      save: true
    });
  }

  render() {
    return (
      <div className={styles.sideModules}>
        <button className={styles.WAR}>Write a Review</button>
        <button className={styles.addPhoto}>Add Photo</button>
        <button onClick={this.share}>Share</button>
        <button onClick={this.save}>Save</button>
        <div>
          { this.state.share ? 
            <Share /> : null
          }
          { this.state.save ? 
            <Save /> : null
          }
        </div>
      </div>
    );
  }
}