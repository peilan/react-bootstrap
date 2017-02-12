import React, {Component} from 'react'
import PostAuthor from '../postAuthor'
import PostDate from '../postDate'
import styles from './style.css'

export default class Post extends Component {
  render() {
    const {title, author, date, image, textPreview} = this.props
    return <div className={styles.preview}>
      <a href="/" className={styles.header}>{title}</a>
      <div className={styles.container}>
        <img className={styles.image} src={image} alt=""/>
        <div className={styles.content}>{textPreview}</div>
      </div>
      <div className={styles.date}>
        <PostDate date={date}/>
      </div>
      <div className={styles.author}>
        <PostAuthor author={author}/>
      </div>
    </div>
  }
}