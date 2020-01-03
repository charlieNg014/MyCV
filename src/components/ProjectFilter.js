import React from 'react'
import Title from './Title';
import {useContext} from 'react';
import { ProjectContext } from '../context';

const getUniqueValue = (items, value) => {
    return [...new Set(items.map(items => items[value]))]
}

export default function ProjectFilter({projects}) {
    //get data
    const context = useContext(ProjectContext);
    const {handleChange, type, difficulty, time, maxTime, minTime, iOS, android} = context;
    let types = getUniqueValue(projects, 'type');
    let difficultlev = getUniqueValue(projects, 'difficulty');

    types = ['all', ...types];
    difficultlev = [...difficultlev];

    //map to jsx
    types = types.map((item, index) => {
        return (
            <option value={item} key={index}>{item}</option>
        )
    })

    difficultlev = difficultlev.map((item, index)=> {
        return(
            <option value={item} key={index}>{item}</option>
        )
    })

    return (
        <section className="filter-container">
            <Title title="Search my projects"/>
            <form className="filter-form">
                {/* Project types  */}
                <div className="form-group">
                    <label htmlFor="type">Project Types</label>
                    <select 
                        name="type"
                        id="type"
                        className="form-control"
                        type={type}
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>

                {/* Dificulty */}
                <div className="form-group">
                    <label htmlFor="difficulty">Dificulty</label>
                    <select 
                        name="difficulty"
                        id="difficulty"
                        className="form-control"
                        value={difficulty}
                        onChange={handleChange}
                    >
                        {difficultlev}
                    </select>
                </div>

                {/* Time spent */}
                <div className="form-group">
                    <label htmlFor="time">Time {time}</label>
                    <input 
                        type="range"
                        name="time"
                        id="time"
                        className="form-control"
                        min={minTime}
                        max={maxTime}
                        value={time}
                        onChange={handleChange}
                    >
                    </input>
                </div>

                {/* check box for extras  */}
                <div className="form-group" style={{marginTop:35}}>
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="iOS"
                            id="iOS"
                            checked={iOS}
                            onChange={handleChange}
                        >
                        </input>
                        <label htmlFor="iOS">iOS</label>

                        <input style={{marginLeft:20}}
                            type="checkbox"
                            name="android"
                            id="android"
                            checked={android}
                            onChange={handleChange}
                        >
                        </input>
                        <label htmlFor="android">Android</label>
                    </div>
                </div>
            </form>
        </section>
    )
}
