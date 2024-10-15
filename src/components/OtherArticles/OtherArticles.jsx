import React from 'react'
import styles from "./other-articles.module.scss";
import Article from '../Article/Article';
import useFetchPosts from '@/hooks/blog/useFetchPosts';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function OtherArticles({ category }) {
    console.log("aki", category)
    const { posts, loading, error } = useFetchPosts(3, category ? category : "");

    const responsive = {
        superLarge: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className={styles.otherArticles}>
            <div className="container">
                <h2>{category ? "RELATED" : "LATEST"} ARTICLES</h2>
                <div className="hide-sm">
                    <div className={styles.articles}>
                        {posts.map((post) => (
                            <div className={styles.articleSingle}>
                                <Article post={post}></Article>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="show-sm">
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        arrows={false}
                    >
                        {posts.map((post) => (
                            <Article post={post}></Article>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default OtherArticles