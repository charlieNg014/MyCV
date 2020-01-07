import React, {Component} from 'react';
import { FaCopyright} from 'react-icons/fa';
import axios from "axios";

export default  class Footer extends Component {
    //declare the state first
    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            contacts: [
                {title:"Stay Connected", subtitle:"Monash University", details1: "14/201 Auburn Road, Hawthorn VIC 3122", details2: "0450 766 930", details3: "mngu0070@student.monash.edu"},
                {title:"Self-Introduction", subtitle: "Australian permanent resident and first year Monash software development student looking for an entry role or internship as a junior developer. Being a fast-learner, well-equipped knowledge in pogramming plus highly adaptable, I am expecting to participate in exciting projects to gain as much as possible hands-on experiences and contribute to the team.", details1: "", details2: "", details3: ""},
                {title:"References", subtitle: "Nawfal Ali, PhD", details1: "Teaching Associate. Faculty of Information Technology, Monash University", details2: "", details3: ""}
            ], 

            email: ""
        }
    }

    componentDidMount() {
    
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    alertEmail() {
        alert("Email submitted successfully. I will contact you shortly!")
    }

    onSubmit(e) {
        e.preventDefault();

        const emailAlert = {
            email: this.state.email
        }

        console.log(emailAlert);

        axios.post("http://localhost:5000/email/add", emailAlert)
            .then(response => console.log(response.data))

        this.setState({
            email: " "
        })

        this.alertEmail();

        window.location = "/";

    }

    render(){
        return(
            <>
            <section className="services" style={{backgroundColor:'lightgrey', marginTop:-60}}>
                <div className="services-center">
                    <section style={{textTransform:"uppercase", fontWeight:"bold"}}>
                    <h6 className="contact-info">Please leave your email below. I will contact with you shortly.</h6>
                    <form style={{marginBottom:40}}>
                        <input className="contact-input1" type="email" placeholder="_Email Address" name="emailaddress" onChange={this.onChangeEmail} /> 
                        <input className="contact-input2" type="submit" onClick={this.onSubmit}/>
                    </form> 
                    Copyright by Charlie Nguyen <FaCopyright />
                    </section> 
                </div>
                
            </section>
            </>
        )
    }
}