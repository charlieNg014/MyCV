import React, { Component } from 'react'
import data from './data';

//create context
const ProjectContext = React.createContext();

//set the default values
class ProjectProvider extends Component {
    state = {
        projects: [],
        sortedProjects: [],
        detailProject: [],
        slug: true,
        type: 'all',
        difficulty: 1,
        time: 0,
        minTime: 0,
        maxTime: 0, 
        iOS: false,
        android: false
    }

    componentDidMount() {
        let projects = this.formatProject(data);
        let slug = projects.find(room => room.slug === true);
        let maxTime = Math.max(...projects.map(item => item.time));
        
        this.setState({
            projects,
            slug,
            sortedProjects: projects,
            detailProject: projects,
            time: maxTime,
            maxTime
        })
    }

    //get the room to display using slug
    getProject = slug => {
        let tempProjects = [...this.state.projects];
        const project = tempProjects.find(room => room.slug === true);
        return project;        
    }

    //get project slug
    getProjectId = slug => {
        let {projects} = this.state;
        const id = projects.find(room => room.slug === slug);

        this.setState({
            detailProject: id
        })
        
        console.log(id);

        return id;
        
    }

    //format project
    formatProject(items) {
            let tempProjects = items.map(item => {
            let id = item.sys.id;
            let image = item.fields.image;
            let images = item.fields.images.map(image => image.fields.file.url);
            let project = {...item.fields, id, image, images};

            return project;
        })

        return tempProjects;
    }

    handleChange = event => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked: target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        },
            
        this.filterProject

        )
    }

    filterProject = () => {
        let {projects, type, difficulty, time, iOS, android} = this.state;
        let tempProjects = [...projects];

        difficulty = parseInt(difficulty);
        time = parseInt(time);

        //check the type of the project
        if (type !== 'all') {
            tempProjects = tempProjects.filter(room => room.type === type);
        }

        //check the difficult level 
        if (difficulty !== 1) {
            tempProjects= tempProjects.filter(room => room.difficulty >= difficulty);
        }  

        //check the time spent
        tempProjects = tempProjects.filter(room=> room.time <= time);

        //check the iOS or android project
        if (iOS) {
            tempProjects = tempProjects.filter(room => room.iOS === true);
        }

        if (android) {
            tempProjects = tempProjects.filter(room => room.android === true);
        }

        this.setState({
            sortedProjects: tempProjects
        })
    }

    render() {
        return(
            <ProjectContext.Provider value={{...this.state, getProjectId: this.getProjectId, handleChange: this.handleChange}}>
                {this.props.children}
            </ProjectContext.Provider>
        )
    }
}

const ProjectConsumer = ProjectContext.Consumer;
export function withProjectConsumer(Component) {
    return function ConsumerWrapper(props) {
        return (
            <ProjectConsumer>
                {value => <Component {...props} context={value} />}
            </ProjectConsumer>
        )
    }
}

export {ProjectContext, ProjectProvider, ProjectConsumer};