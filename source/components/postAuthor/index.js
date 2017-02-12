import React, {Component} from 'react'
import styles from './style.css'

export default class Post extends Component {
  render() {
    const {author} = this.props
    return <a href="/" className={styles.author}>
      <i className={styles.userIcon}></i>
      <div className={styles.authorName}>{author}</div>
    </a>
  }
}