import React, { Component } from 'react';

import img from '../assets/avatar.jpg';
import cv from '../assets/file.pdf'
import { List, ListItem, ListItemContent } from 'react-mdl'
import Form from './form'

class Contact extends Component {
    render() {
        return (
            <div >
                <div className="contact-body" id="contact-body">

                    <div className="banner-text"id="contact-dimention">
                        <h2>Toth Diana</h2>
                        <img className="contact-image" src={img} alt="diana toth" />
                        <button className="button ">
                         
                            <a href={cv} download> Download</a>
                        </button>

                    </div>
                    <div className="banner-text"id="contact-dimention">
                        <h2>Contact Me !</h2>
                        <List>
                            <ListItem >
                                <ListItemContent>
                                    <i id="icons"className="fa fa-phone-square"></i>
                                    0745 951 222
                                    </ListItemContent>
                            </ListItem>
                            <ListItem >
                                <ListItemContent >
                                    <i id="icons"className="fa fa-envelope"></i>
                                     dianatoth.dtt@gmail.com
                                    </ListItemContent>
                            </ListItem>
                        </List>


                    </div>

                   
                </div>
                <div className="banner-text" id="contact-dimention form">
                        <Form></Form>
                    </div>
            </div>
        )
    }
}

export default Contact