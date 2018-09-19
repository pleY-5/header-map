import React from 'react';
// import styles from '../dist/main.css';
import styles from 'https://s3-us-west-1.amazonaws.com/yelp-reactor-header/main.css';
import _ from 'underscore';

export default class EditCate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryAmt: 0,
      rendered: [],
      init: 0,
      addClicked: false
    };
    this.reRender = this.reRender.bind(this);
  }

  componentDidMount() {
    this.reRender();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.categories !== this.props.categories) {
      this.reRender();
    }
  }

  reRender() {
    let amt = this.props.categories.length;
    this.setState({
      categoryAmt: amt
    }, ()=> {
      let rendered = this.renderIndCate();
      this.setState({
        rendered: rendered
      });
    });
  }

  renderIndCate() {
    let rendered = [];
    let amt = this.state.categoryAmt;
    for (let i = 0; i < 3; i++) {
      if (amt > 0) {
        rendered.push(<div class={styles.cateRendered}><div>{this.props.categories[i].type}</div><img src="https://s3-us-west-1.amazonaws.com/yelp-reactor-header/rArrow.png" width="24px" height="24px" /><div>{this.props.categories[i].specific}</div><a id={i} onClick={this.removeCate.bind(this)} class={styles.removeCate}>Remove</a></div>);
        amt--;
      } 
    }
    return rendered;
  }

  removeCate(e) {
    e.preventDefault();
    let id = e.target.id;
    let tempCate = this.props.categories.slice();
    tempCate.splice(id, 1);
    this.props.changeCate(tempCate);
  }

  render() {
    return (<div id="edit" className={styles.modal}>
      <div className={styles.editCont}>
        <div className={styles.editHeader}>
          <div onClick={this.props.close} className={styles.close}>&times;</div>
          <h2>Add or remove categories</h2>
        </div>
        <div className={styles.editBody}>
          <form width="358px" height="137px">
            <div className={styles.cateCC}>
              <label className={styles.editBodyLabel}>Select up to 3 categories</label>
              <span className={styles.editBodySpan}>The more specific the better</span>
            </div>
            <div className={styles.catePicker}>
              { this.state.rendered }
              { this.state.categoryAmt < 3 && !this.state.addClicked ?
                <a className={styles.cateEdit} onClick={() => { this.setState({ addClicked: true}); } }>Add another category</a> : null
              }
              { this.state.categoryAmt < 3 && this.state.addClicked ? 
                <input type="text" className={styles.addCateInput} placeholder="Add another category" /> : null
              }
            </div>
          </form>
        </div>
        <div className={styles.cateFooter}>
          <div>
            <button className={styles.cateFooterBtn}>Submit</button>
            <a className={styles.cateFooterCancel}>Cancel</a>
          </div>
        </div>
      </div>
    </div>);
  }
}