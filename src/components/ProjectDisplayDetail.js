import React from 'react'
import { Link } from 'react-router-dom';
import {useContext} from 'react';
import {ProjectContext} from '../context';
import PropTypes from 'prop-types';


export default function ProjectDisplayDetail({projects}) {
    //declare items
    const {name, time, images, slug} = projects;
    const context = useContext(ProjectContext);
    const {getProjectId} = context;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0]} alt="singleproject" />
                <div className="price-top">
                    {time} 
                    <p>hours</p>
                </div>
                <Link to={`/projects/${slug}`} className="btn-primary room-link" onClick={() => getProjectId(slug)}>Features</Link>
                <p className="room-info">{name}</p>
            </div>
        </article>
    )
}

ProjectDisplayDetail.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired
    })
}
