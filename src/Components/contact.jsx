import React, { Component } from 'react';
// import { Grid, Cell } from 'react-mdl';
import img from '../assets/avatar.jpg';
import cv from '../assets/file.pdf'
import { List, ListItem, ListItemContent } from 'react-mdl'

class Contact extends Component {
    render() {
        return (
            <div className="card" id="contact-body">
                {/* <Grid className="contact-grid">
                    <Cell coll={6}> */}
                <div id="contact-left">
                    <h2>Toth Diana</h2>
                    <img src={img} alt="diana toth" />
                    <button>
                        <a href={cv} download>Click to Download!</a>
                    </button>

                </div>

                {/* </Cell>
                    <Cell coll={6}> */}


                <div id="contact-right">
                    <h2>Contact Me</h2>
                    <List>
                        <ListItem >
                            <ListItemContent>
                                <i className="fa fa-phone-square"></i>
                                   +40 745-951-222
                                    </ListItemContent>
                        </ListItem>
                        <ListItem >
                            <ListItemContent >
                                <i className="fa fa-envelope"></i>
                                    dianatoth.dtt@gmail.com
                                    </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent >
                                <i className="fa fa-skype"></i>
                                    live:.cid.de5ed57d39af7dd4
                                    </ListItemContent>
                        </ListItem>


                    </List>

                </div>

                {/* </Cell>
                </Grid> */}
            </div>
        )
    }
}

export default Contact