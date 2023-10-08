import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => state +1);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/daniloohenriquee.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Danilo Henrique</strong>
                            <time title="7 de outubro as 08:13:30" dateTime="2023-10-7 08:13:30">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir 
                        { likeCount > 0 ? <span>{likeCount}</span> : '' }
                    </button>
                </footer>
            </div>
        </div>
    );
}