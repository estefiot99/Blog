import React from 'react'
import Tag from '../Tag/Tag';
import styles from "./article.module.scss";

function Article() {
    return (
        <div className={styles.article}>
            <div className={styles.image}></div>
            <div className={styles.tags}>
                <Tag label={"Label"} />
                <Tag label={"Label"} />
            </div>
            <h4>The Power of Minimalism in Web Design</h4>
            <p>In an age where attention spans are shrinking, less is truly more. Minimalist web design has become a key trend, allowing brands to communicate their message clearly without overwhelming users.</p>
        </div>
    )
}

export default Article