import React from 'react'
import Tag from '../Tag/Tag';
import styles from "./article.module.scss";
import { useRouter } from 'next/navigation'
function Article({ post }) {
    const router = useRouter()
    return (
        <div className={styles.article} key={`post-${post.id}`} onClick={() => router.push(`/blog/${post.id}`)}>
            <div className={styles.image} style={{ backgroundImage: `url(${post.imageUrl})` }}></div>
            <div className={styles.tags}>
                {post.categories.map((category) => (
                    <Tag label={category} />
                ))}
            </div>
            <h4>{post.title}</h4>
            <p>{post.summary}</p>
        </div>
    )
}

export default Article