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
        <a className={styles.WAR}><img src="icons/star.png" height="20px" width="20px" /><div>Write a Review</div></a>
        <span className={styles.btns}>
          <a className={styles.addPhoto}><img src="icons/picture.png" width="20px" height="15px"/><div className={styles.photo}>Add Photo</div></a>
          <a className={styles.share} onClick={this.share}><img src="icons/share.png" width="18px" height="18px"/><div className={styles.sha}>Share</div></a>
          <a className={styles.save} onClick={this.save}><img src="icons/save.png" width="13px" height="17.5px"/><div className={styles.sa}>Save</div></a>
        </span>
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