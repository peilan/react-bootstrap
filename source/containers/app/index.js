import React, {Component} from 'react'
import styles from './style.css'
import Header from '../../components/header'

export default class App extends Component {
  render() {
    return <div className={styles.body}>
      <Header/> 
      {this.props.children}
    </div>
  }
}