import React from 'react'
import ProjectContainer from '../components/ProjectContainer';
import StyleImage from '../components/StyleImage';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

export default function Projects() {
    return(
        <>
        <StyleImage>
            <Banner title="My projects" subtitle="Explore my projects">
                <Link  to="/" className="btn-primary">
                    Back to home page
                </Link>
            </Banner>
        </StyleImage>
        <ProjectContainer />
        </>
    )
}