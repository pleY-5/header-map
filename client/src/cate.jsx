import React from 'react';
import styles from '../dist/main.css';
import _ from 'underscore';
import EditCate from './editCate.jsx';

export default class Cate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };
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
    this.setState({
      edit: true
    });
  }

  render() {
    return (
      <div className={styles.part3}>
        <div>{this.props.dollars === 1 ? '$ ' : this.props.dollars === 2 ? '$$ ' : '$$$ '}&#183;</div>
        <div className={styles.categories} >{
          _.map(this.props.categories, (category, i, cate)=> {
            return i === cate.length - 1 ? <div>{category.specific }</div> : <div>{category.specific + ','}</div>;
          })
        }</div>
        <button className={styles.editBtn} onClick={this.edit.bind(this)} ><img src="icons/edit.png" width="14px" height="14px"/>edit</button>
        { this.state.edit ? 
          <EditCate /> : null
        }
      </div>
    );
  }
}