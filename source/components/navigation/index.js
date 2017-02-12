import React, {Component} from 'react'
import styles from './style.css'

export default class Navigation extends Component {
  render() {
    return <div className={styles.navigation}>
      <a href="/" className={styles.back}>
        <i className={styles.arrowLeft}></i>
      </a>
      <a href="/" className={styles.forward}>
        <i className={styles.arrowRight}></i>
      </a>
    </div>
  }
}