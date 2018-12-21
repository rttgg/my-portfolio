import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'
import Roman from './roman.png';

class Contact extends Component {
    render() {
        return(
             <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}> 
                    <h2>Roman Gebrehiwot</h2>
                    <img src={Roman} width="300" height="200"
                        //src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhRJMKyPdfvmG8WZoElaxf9Ay6IBDKbQUpfbpuH_eD6LBZzX318A"
                        alt="avatar"
                        style={{height: '250px'}}
                    />
                    <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>This is Roman Gebrehiwot. I hope you like my website. This is my first project building my portfolio, hope you like it 
                    and please give me a feedback. Thank you!</p>
                    </Cell>
                    <Cell col={6}> 
                    <h2>Contact Me</h2>
                    <hr/>

                    <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                980-202-8552
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-envelope" aria-hidden="true"/>
                                rttgg1@gmail.com
                                </ListItemContent>
                            </ListItem>
                            
                         </List>
                      </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;