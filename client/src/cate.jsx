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
        <div>{this.props.dollars}</div>
        <div>{_.map(this.props.categories, (category)=> {
          return category.specific;
        })}</div>
        <button onClick={this.edit.bind(this)} >edit</button>
        { this.state.edit ? 
          <EditCate /> : null
        }
      </div>
    );
  }
}