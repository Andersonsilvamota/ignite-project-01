import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment(){
    setLikeCount((state) => {
      return state + 1;
    });
  }
 
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://github.com/Andersonsilvamota.png' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Anderson Silva</strong>
              <time title="11 de abril de 2021 as 08:13h" dateTime='2022-05-11 08:13:45'>Publicado há 1h</time>
      
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}