import React, {
  Component
} from 'react'
import styles from  './style.css'
import Preview from '../../components/preview'
import Navigation from '../../components/navigation'
import testData from './testData/data'

export default class App extends Component {
  render() {
    return  <div className={styles.body}> 
      {testData.map( (item, index) => <Preview 
        key={index}
        title={item.title}
        author={item.author}
        date={item.date}
        image={item.image}
        textPreview={item.textPreview}
        title={item.title}  />
      )}
      <Navigation />
    </div>
  }
}