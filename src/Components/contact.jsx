import React, { Component } from 'react';

import img from '../assets/avatar.jpg';
import cv from '../assets/file.pdf'
import { List, ListItem, ListItemContent } from 'react-mdl'
import Form from './form'
import Card from "./card"
class Contact extends Component {
    render() {
        return (
            <>
                <div className="card" id="contact-body">

                    <div id="contact-left">
                        <h2>Toth Diana</h2>
                        <img src={img} alt="diana toth" />
                        <button>
                            <a href={cv} download>Click to Download</a>
                        </button>
                    </div>
                    <div id="contact-right">
                        <h2>Contact Me</h2>
                        <List>
                            <ListItem >
                                <ListItemContent>
                                    <i className="fa fa-phone-square"></i>
                                    0745 951 222
                                    </ListItemContent>
                            </ListItem>
                            <ListItem >
                                <ListItemContent >
                                    <i className="fa fa-envelope"></i>
                                     dianatoth.dtt@gmail.com
                                    </ListItemContent>
                            </ListItem>
                        </List>
                    </div>
                </div>
                <div className="card">
                    <Form></Form>
                </div>
            </>
        )
    }
}

export default Contact