import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Layout from '@/components/Layout/Layout'
import OtherArticles from '@/components/OtherArticles/OtherArticles'
import Contact from '@/components/Contact/Contact'

function Home() {
    return (
        <>
            <Layout>
                <div className="home">
                    <div className="container">
                        <div className="hero-section">
                            <div className="hero-image"></div>
                            <div className="hero-description">
                                <h1>Igniting Ideas,<br />
                                    Crafting Digital Experiences</h1>
                                <p className='subtitle'>Software specializing in transforming bold visions into dynamic, engaging digital solutions. Let’s build something extraordinary together!</p>
                                <p className='description'>Believe in the power of creativity and technology to solve problems, connect people, and create unforgettable digital experiences. Whether you're looking for a fresh identity or an established brand seeking a digital transformation, we’ve got the tools and the team to bring your vision to life.</p>
                            </div>
                        </div>
                    </div>
                    <div className="secondary-bg articles">
                        <OtherArticles />
                    </div>
                    <Contact />
                </div>
            </Layout>
        </>
    )
}

export default Home