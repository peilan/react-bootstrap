import React, {Component} from 'react'
import styles from './style.css'
import testData from '../../testData/data'
import PostAuthor from '../../components/postAuthor'
import PostDate from '../../components/postDate'

export default class Post extends Component {
  render() {
    const id = this.props.params.postId
    const {content, title, post, date, author} = testData.find( x => x.id == id)

    return <div>
      <div className={styles.header}>{title}</div>
      <div className={styles.content}>{content}</div>
      <PostDate date={date} />
      <PostAuthor author={author} />
    </div>
  }
}