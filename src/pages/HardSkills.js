import React, {Component} from 'react';
import Title from '../components/Title';
import {FaJava, FaReact, FaMobile, FaDesktop} from 'react-icons/fa';

export default class HardSkills extends Component {
    //set the state
    state = {
        hardskills: [
            {icon: <FaJava/>, title: "Programming", info: "Java, C++, HTML, CSS, JavaScript, Python, R, XML or even Assembly"},
            {icon: <FaDesktop/>, title: "Software & Testing", info: "Agile methodogy, SDLC, Waterfall, JIRA, X-Ray for JIRA, Confluence"},
            {icon: <FaReact/>, title: "Web Development", info: "React, ContextAPI, Contentful, Nodejs, JSX, HTML, CSS"},
            {icon: <FaMobile/>, title: "Others", info: "AWS, Business Analysis, Mobile Applications"}
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Hard Skills"/>
                <div className="services-center">
                    {this.state.hardskills.map((item, index) => {
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