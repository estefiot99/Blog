import React from 'react'
import styles from "./other-articles.module.scss";
import Article from '../Article/Article';

function OtherArticles({ category }) {
    return (
        <div className={styles.otherArticles}>
            <div className="container">
                <h2>{category ? "RELATED" : "LATEST"} ARTICLES</h2>
                <div className={styles.articles}>
                    <div className={styles.articleSingle}>
                        <Article></Article>
                    </div>
                    <div className={styles.articleSingle}>
                        <Article></Article>
                    </div>
                    <div className={styles.articleSingle}>
                        <Article></Article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherArticles