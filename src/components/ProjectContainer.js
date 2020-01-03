import React from 'react'
import ProjectDisplay from './ProjectDisplay';
import ProjectFilter from './ProjectFilter';
import {ProjectConsumer} from '../context';


export default function ProjectContainer({context}) {
    return (
        <>
            <ProjectConsumer>
                {value => {
                    const {projects, sortedProjects} = value;
                    return (
                        <div>
                            <ProjectFilter projects = {projects}/>
                            <ProjectDisplay projects = {sortedProjects} />
                        </div>
                    )
                }}
            </ProjectConsumer>
        </>
    )
}
