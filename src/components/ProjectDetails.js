import React from 'react';
import {ProjectConsumer} from '../context';
import StyledImage from './StyleImage';
import Banner from './Banner';
import {Link} from 'react-router-dom';

export default function ProjectDetails({context}) {
    return(
        <ProjectConsumer>
            {value => {
                const {detailProject} = value;
                console.log(detailProject);
                console.log(detailProject.name);
                
                
                return(
                    <>
                    <StyledImage>
                        <Banner title={detailProject.name}>
                            <Link to="/rooms" className="btn-primary">
                                    Back to rooms
                            </Link>
                        </Banner>
                    </StyledImage>

                    <section className="single-room">
                        <div className="single-room-images">
                            {detailProject.images.map((item, index) => {
                            return (
                                <img key={index} src={item} alt={detailProject.name} />
                                )
                            })}
                        </div>

                        <div className="single-room-info">
                            {/* description */}
                            <article className="desc">
                                <h3>{detailProject.description}</h3> 
                            </article>
                            {/* details */}
                            <article className="info">
                                <h3>Infomation</h3>
                                <h6>Time Spent: {detailProject.time} hours</h6>
                                <h6>Difficulty Level: {detailProject.difficulty > "1" ? `${detailProject.difficulty} stars`: `${detailProject.difficulty} star`}</h6>
                                <h6>{detailProject.android? "android application": ""}</h6>
                                <h6>{detailProject.iOS && "iOS application"}</h6> 
                            </article>
                        </div>
                    </section>

                    <section className="room-extras">
                        <h6>Tools</h6>
                        <ul className="extras">
                            
                            {detailProject.extras.map((item, index) => {
                                        return (
                                            <li key = {index} >- {item} </li>
                                        )
                            })}
                        </ul>
                    </section> 
                    </>
                )
            }}
        </ProjectConsumer>
    )
}