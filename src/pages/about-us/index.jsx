import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Layout from '@/components/Layout/Layout'
import OtherArticles from '@/components/OtherArticles/OtherArticles'
import Contact from '@/components/Contact/Contact'
import Tag from '@/components/Tag/Tag'

function AboutUs() {
    return (
        <>
            <Layout>
                <div className="about-us">
                    <div className="container info">
                        <h1>ABOUT US</h1>
                        <p>Hello! I’m Melissa, a passionate software developer with a keen interest in building innovative and efficient digital solutions. With a background in [Your Background/Field], I specialize in creating user-friendly applications that not only solve problems but also enhance the user experience. My journey in software development has been fueled by a love for coding and a commitment to continuous learning.</p>
                        <h2>My values</h2>
                        <div className="values">
                            <Tag label={"Innovation"} />
                            <Tag label={"Collaboration"} />
                            <Tag label={"Quality"} />
                            <Tag label={"Integrity"} />
                        </div>
                        <p>I believe in staying at the forefront of technology. I constantly seek out new tools and methodologies that can enhance my work and provide better solutions for clients.
                            Working closely with clients and teams is essential to achieving the best results. I value open communication and collaborative problem-solving throughout every project.
                            I am dedicated to producing top-notch work. Quality is not just a goal; it’s a standard I uphold in every piece of code I write and every application I develop.
                            Honesty and transparency are fundamental to my approach. I believe in delivering what I promise and building long-lasting relationships based on trust.</p>
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

export default AboutUs