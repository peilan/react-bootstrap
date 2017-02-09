import React, {
  Component
} from 'react'
import styles from  './style.css'

export default class Post extends Component {
  render() {
    const {date} = this.props
    return <div className={styles.date}>
      <i className="fa fa-calendar-o"></i>
      <div className={styles.date__text}>{date}</div>
    </div>
  }
}