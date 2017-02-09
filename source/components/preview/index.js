import React, {
  Component
} from 'react'
import PostAuthor from '../postAuthor'
import PostDate from '../postDate'
import styles from  './style.css'

export default class Post extends Component {
  render() {
    const { title, author, date, image, textPreview } = this.props
    return <div className={styles.preview}>
      <a href="/" className={styles.preview__header}>{title}</a>
      <div className={styles.preview__box}>
        <img className={styles.preview__img} src={image} alt=""/>
        <div className={styles.preview__content}>{textPreview}</div>
      </div>
      <div className={styles.preview__date}>
        <PostDate date={date}/>
      </div>
      <div className={styles.preview__author}>
        <PostAuthor author={author}/>
      </div>
    </div>             
  }
}