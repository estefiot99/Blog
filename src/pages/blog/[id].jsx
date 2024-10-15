import React from 'react'
import { useRouter } from 'next/router';
import useFetchPostById from '@/hooks/blog/useFetchPostById';
import Contact from '@/components/Contact/Contact';
import OtherArticles from '@/components/OtherArticles/OtherArticles';
import Tag from '@/components/Tag/Tag';
import Layout from '@/components/Layout/Layout';

function BlogDetail() {
    const router = useRouter();
    const { id } = router.query;
    const { post, loading, error } = useFetchPostById(id);
    const category = post?.categories ? post.categories[0] : null;

    return (
        <Layout>
            <div className="blog-detail">
                <div className="cover-image" style={{ backgroundImage: `url(${post.imageUrl})` }}></div>
                <div className="container">
                    <h1>{post.title}</h1>
                    <div className="tags">
                        {post.categories?.map((category) => (
                            <Tag label={category} />
                        ))}
                    </div>
                    <p>{post.description}</p>
                </div>
                {category && (
                    <div className="secondary-bg articles">
                        <OtherArticles category={category} />
                    </div>
                )}
                <Contact></Contact>
            </div>
        </Layout>
    )
}

export default BlogDetail