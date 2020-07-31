import React, { Component } from "react";
import * as emailjs from "emailjs-com";

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            message: "",
            email: "",
            valid: {
                email: ""
            },
            submit: false,
            
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    closeSuccesModal = (e) => {
        this.setState({
            submit: false
        })
    }
    closeValidationModal = (e) => {
        this.setState({
            valid: true
        })
    }
    closeErrorModal = (e) => {
        this.setState({
            errorMessage: false
        })
    }
    handleChange = (e) => {
       
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("in")
        const regex = /\S+@\S+\.\S+/;
        const valid = regex.test(this.state.email)
        if (valid) {
            console.log("valid")
            this.setState({ valid: true })
            emailjs.sendForm(
                "gmail",
                "diana",
                "#form",
                "user_r5Gq5xpMD84WQJEC9jXRP"
            )
                .then((response) => {
                    this.setState({
                        name: "",
                        message: "",
                        email: "",
                        submit: true
                    })
                })
                .catch((error) => {
                    this.setState({
                        errorMessage: error

                    })
                })
           
        } else {
            console.log("invalid")
            this.setState({

                valid: false
            })
        }
    };
    render() {
        let modal = false
        if (this.state.submit) {
            modal =
                (<div className="modal-succes" onClick={this.closeSuccesModal}>
                    Thank you for your email. I'll reply to you as soon as possible !
                </div>)
        } else if (this.state.errorMessage) {
            modal =
                (<div className="modal-error"
                    onClick={this.closeErrorModal}>
                    {this.state.errorMessage}
                </div>)
        } else if (!this.state.valid) {
            modal =
                (<div className="modal-error" onClick={this.closeValidationModal}>
                    Your message was not sent. Please check your email adress again !
                </div>)
        }
        return (
            <div >
                <form
                    onSubmit={this.handleSubmit.bind(this)}
                    id="form">
                    <h2>Let's talk !</h2>
                    <div className="inputs">
                        <label>Name: </label>
                        <input type="text"
                            id="name"
                            name="name"
                            paceholeder="enter name"
                            value={this.state.name}
                            onChange={this.handleChange.bind(this)}
                            required
                        ></input>
                    </div>
                    <div className="inputs">
                        <label>Message: </label>
                        <textarea type="text"
                            id="message"
                            name="message"
                            paceholeder="enter name"
                            value={this.state.message}
                            onChange={this.handleChange.bind(this)}
                            required
                        ></textarea>
                    </div>
                    <div className="inputs">
                        <label>Email: </label>
                        <input type="text"
                            id="email"
                            name="email"
                            paceholeder="enter your email"
                            value={this.state.email}
                            onChange={this.handleChange.bind(this)}
                            required
                        ></input>
                    </div>
                    <input className="button " type="submit"
                    ></input>
                </form>
                {modal && (<div>{modal}</div>)}
            </div>
        )
    }
}

export default Form