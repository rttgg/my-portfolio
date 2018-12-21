import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }
    //create a method
    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
               <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                 <CardTitle style={{color: 'black', height: '176px', background: 
                    'url(https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png) center / cover'}}>Html Project #1</CardTitle>
                    <CardText>
                        This is my first project using just HTML.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions> 
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu> 
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                 <CardTitle style={{color: 'black', height: '176px', background: 
                    'url(https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png) center / cover'}}>Html Project #1</CardTitle>
                    <CardText>
                        This is my first project using just HTML.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions> 
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu> 
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                 <CardTitle style={{color: 'black', height: '176px', background: 
                    'url(https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png) center / cover'}}>Html Project #1</CardTitle>
                    <CardText>
                        This is my first project using just HTML.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions> 
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu> 
                </Card>
                </div>
            )
        
            
        }  
        
        else if (this.state.activeTab ===1) {
            return(
                <div><h1>This is CSS</h1></div>  
            )
        }   else if (this.state.activeTab ===2) {
            return(
                <div><h1>This is JavaScript</h1></div>  
            )
    }   else if (this.state.activeTab ===3) {
        return(
            <div><h1>This is React</h1></div>  
        )
    }
}

    
    render() {
        return(
            <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({ activeTab: tabId })} ripple>
                <Tab>HTML</Tab>
                <Tab>CSS</Tab>
                <Tab>JAVASCRIPT</Tab>
                <Tab>REACT</Tab>
                </Tabs>
                {/* create grid inside this section*/}
                
                  <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                  </Grid>
                   
               
            </div>
        )
    }
}

export default Projects;