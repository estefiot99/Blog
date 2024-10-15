import React from 'react'
import Layout from '@/components/Layout/Layout'
import useFetchPosts from "@/hooks/blog/useFetchPosts";
import Article from '@/components/Article/Article';
import Contact from '@/components/Contact/Contact';

function Blog() {
    const { posts, loading, error } = useFetchPosts();

    return (
        <>
            <Layout>
                <div className="blog">
                    <div className="container">
                        <h1>BLOG</h1>
                        <div className="articles-list">
                            {posts.map((post) => (
                                <div className="third">
                                    <Article post={post}></Article>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Contact />
                </div>
            </Layout>
        </>
    )
}

export default Blog