import React, {Component} from 'react';
import Title from '../components/Title';
import {FaEye, FaRegHandRock, FaRegHandshake} from 'react-icons/fa';

export default class HardSkills extends Component {
    //set the state
    state = {
        softskills: [
            {icon: <FaEye/>, title: "Highly Adaptable", info: "Well-developed observational skills, quickly get familiar with new working environment"},
            {icon: <FaRegHandRock/>, title: "Problem Solving", info: "Solution-driven person, hard to be cracked down under pressure"},
            {icon: <FaRegHandshake/>, title: "Communication skills", info: "Well-equipped communication skills practiced through several volunteer activities throughout uni life"}
        ]
    }
    render() {
        return (
            <section className="services" style={{backgroundColor:'lightcyan'}}>
                <Title title="Soft Skills"/>
                <div className="services-center">
                    {this.state.softskills.map((item, index) => {
                        return(
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}