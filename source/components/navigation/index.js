import React, {
  Component
} from 'react'
import styles from  './style.css'

export default class Navigation extends Component {
  render() {
    return <div className={styles.navigation}>
      <a href="/" className={styles.back }> 
        <i className="fa fa-arrow-left" aria-hidden="true"></i>
      </a>
      <a href="/" className={styles.forward}> 
        <i className="fa fa-arrow-right fa-6" aria-hidden="true"></i>
      </a>
    </div>
  }
}