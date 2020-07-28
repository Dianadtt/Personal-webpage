import React, { Component } from "react";
import * as emailjs from "emailjs-com";

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {

            name: "",
            message: "",
            email: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        console.log("name")
        console.log(e.target.value)
        this.setState({[e.target.name]:e.target.value});
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("in")
        emailjs.sendForm(
            "gmail",
            "diana",
            "#form",
            "user_r5Gq5xpMD84WQJEC9jXRP"
        )
            .then()
            .catch()
        this.setState({
            name: "",
            message: "",
            email: "",
        })
    };
    render() {
        return (
            <div >
                <form  onSubmit={this.handleSubmit.bind(this)}
                id="form"
                >
                      <h2>Let's talk !</h2>
                    <div>
                      
                        <label>Name: </label>
                        <input type="text"
                                id="name"
                                name="name"
                                paceholeder="enter name"
                                value={this.state.name}
                                onChange={this.handleChange.bind(this)}
                        ></input>
                    </div>
                    <p></p>
                        <label>Message: </label>
                        <textarea type="text"
                                id="message"
                                name="message"
                                paceholeder="enter name"
                                value={this.state.message}
                                onChange={this.handleChange.bind(this)}
                        ></textarea>
                    
                    <p></p>
                        <label>Email: </label>
                        <input type="text"
                                id="email"
                                name="email"
                                paceholeder="enter your email"
                                value={this.state.email}
                                onChange={this.handleChange.bind(this)}
                        ></input>
                     <p></p>
                    <input type="submit"></input>


                </form>
            </div>
        )
    }
}

export default Form