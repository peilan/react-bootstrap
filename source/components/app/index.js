import React, {
  Component
} from 'react'
import styles from  './style.css'
import Preview from '../../components/preview'

export default class App extends Component {
  render() {
    return  <div className={styles.body}> 
      <Preview/>
      <Preview/>
      <Preview/>
      <Preview/>
      <Preview/>
    </div>
  }
}