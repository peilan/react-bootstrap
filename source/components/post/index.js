import React, {Component} from 'react'
import styles from './style.css'

export default class Post extends Component {
  render() {
    return <h2 className={styles.pink}>
      {this.props.params.postId}
    </h2>
  }
}