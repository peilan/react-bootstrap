import React, {Component} from 'react'
import styles from './style.css'

export default class Post extends Component {
  render() {
    const {date} = this.props
    return <div className={styles.date}>
      <i className={styles.calendarIcon}></i>
      <div className={styles.dateText}>{date}</div>
    </div>
  }
}