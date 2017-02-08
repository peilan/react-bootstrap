import React, {
  Component
} from 'react'
import styles from  './style.css'

export default class Post extends Component {
  render() {
    return <a href="/" className={styles.author}>
      <i className="fa fa-user-o"></i>
      <div className={styles.author__name}>
        peilan
      </div>
    </a>
  }
}