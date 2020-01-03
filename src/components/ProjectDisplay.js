import React from 'react'
import ProjectDisplayDetail from './ProjectDisplayDetail';

export default function RoomDisplay({projects}) {
    if (projects.length === 0) {
        return (
            <div className="emtpty-search">
                <h3>Unfortunately, there is no room matching your search</h3>
            </div>
        )
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {projects.map(item => {
                    return(
                        <ProjectDisplayDetail key ={item.id} projects ={item}/>
                    )
                })}
            </div>
        </section>        
    )
}
