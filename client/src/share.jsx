import React from 'react';
// import styles from '../dist/main.css';
import styles from 'https://s3-us-west-1.amazonaws.com/yelp-reactor-header/main.css';

export default class Share extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div id="share" className={styles.modal} >
      <div className={styles.shareCont} >
        <div onClick={this.props.close} className={styles.close}>&times;</div>
        <div className={styles.shareHeader}><h2>Share business</h2></div>
        <div className={styles.shareBody}>
          <div className={styles.shareMedia}>
            <div className={styles.shareFb}><img src="https://s3-us-west-1.amazonaws.com/yelp-reactor-header/fb.png" width="25.5px" height="25.5px"></img><div className={styles.shareFbtext}>Share on Facebook</div></div>
            <div className={styles.shareTw}><img src="https://s3-us-west-1.amazonaws.com/yelp-reactor-header/tw.png" width="21.5px" height="21.5px"></img><div className={styles.shareTwtext}>Share on Twitter</div></div>
          </div>
          <label className={styles.link}></label>
          <fieldset className={styles.shareOr}>
            <legend align="center">OR</legend>
          </fieldset>
          <form className={styles.shareForm}>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Your Email</label>
            <input type="text"></input>
            <div className={styles.shareAD}>
              <label >To
                <span className={styles.shareSpan}> Email addresses</span>
              </label>
              <input type="text"></input>
            </div>
            <label>Add a note
              <span className={styles.shareSpan}> Optional</span>
            </label>
            <textarea className={styles.shareTA}></textarea>
          </form>
        </div>
        <div className={styles.shareFooter}>
          <button>Share</button>
        </div>
      </div>
    </div>);
  }
}