import React from 'react';
// import styles from '../dist/main.css';
import styles from 'https://s3-us-west-1.amazonaws.com/yelp-reactor-header/main.css';
import _ from 'underscore';
import EditCate from './editCate.jsx';

export default class Cate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };
    this.edit = this.edit.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', (e)=> {
      if (e.target === document.getElementById('edit')) {
        this.setState({
          edit: false
        } );
      }
    });
  }

  edit(e) {
    e.preventDefault();
    let editt = !this.state.edit;
    this.setState({
      edit: editt
    });
  }

  render() {
    return (
      <div className={styles.part3}>
        <div className={styles.dollars}>{this.props.dollars === 1 ? '$ ' : this.props.dollars === 2 ? '$$ ' : '$$$ '}&#183;</div>
        <div className={styles.categories} >{
          _.map(this.props.categories, (category, i, cate)=> {
            return i === cate.length - 1 ? <a>{category.specific }</a> : <a>{category.specific + ','}</a>;
          })
        }</div>
        <a className={styles.editBtn} onClick={this.edit.bind(this)} ><div className={styles.edit} ></div><div className={styles.text}>Edit</div></a>
        { this.state.edit ? 
          <EditCate close={this.edit} categories={this.props.categories} changeCate={this.props.changeCate}/> : null
        }
      </div>
    );
  }
}