import React, {
  Component
} from 'react'
import PostAuthor from '../postAuthor'
import PostDate from '../postDate'
import styles from  './style.css'

export default class Post extends Component {
  render() {
    return <div className={styles.preview}>
      <a href="/" className={styles.preview__header}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, molestiae?
      </a>
      <div className={styles.preview__box}>
        <img className={styles.preview__img} src="./source/components/preview/images/telegram.jpg" alt=""/>
        <div className={styles.preview__content}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam magni quo provident! Iste nisi, excepturi sequi accusamus, omnis cupiditate, officia nihil quaerat sunt facere id ab pariatur maxime sapiente perspiciatis!  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, placeat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet vero adipisci officia omnis cum recusandae quae accusamus consectetur distinctio repellendus, alias labore. Consequuntur odio, iure fugiat, vel numquam saepe, repellat voluptas tempora eius facere aut sapiente. Blanditiis fuga tenetur cupiditate, expedita! Sapiente, eius voluptatibus, quos atque dolore sequi ullam recusandae!
        </div>
      </div>
      <div className={styles.preview__date}>
        <PostDate />
      </div>
      <div className={styles.preview__author}>
        <PostAuthor />
      </div>
    </div>             
  }
}