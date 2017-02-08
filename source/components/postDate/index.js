import React, {
  Component
} from 'react'
import styles from  './style.css'

export default class Post extends Component {
  render() {
    return <div className={styles.date}>
      <i className="fa fa-calendar-o"></i>
      <div className={styles.date__text}>
        5 февраля 2017
      </div>
    </div>
  }
}