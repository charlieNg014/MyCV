import React from 'react'
import StyleImage from '../components/StyleImage';
import Banner from "../components/Banner";
import { Link } from 'react-router-dom';
import HardSkills from '../pages/HardSkills';
import SoftSkills from '../pages/SoftSkills';
import Contact from './Contact';
import Footer from './Footer';

export default function Home() {
    return (
        <>
        <StyleImage>
            <Banner title="Charlie Nguyen" subtitle="Welcome to my world">
                <Link to="/projects" className="btn-primary">
                    Explore my projects
                </Link>
            </Banner>
        </StyleImage>
        <HardSkills />
        <SoftSkills />
        <Contact />
        <Footer />
        </>
    )
}
