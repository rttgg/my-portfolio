import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Roman from './roman.png';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                    <img src={Roman} width="200" height="200" 
                    alt="avatar"
                       style={{height: '200px'}}/>
                       
                    </div>

                    <h2 style={{paddingTop: '2em'}}>Roman Gebrehiwot</h2>
                    <h4 style={{color: 'grey'}}>Full Stack Web Developer</h4>
                    <hr style={{borderTop: '3PX SOLID #833fb2',width: '50%'}}/>
                    <p> Full Stack Web developer able to build a web presence from concept, 
                    navigation, and layout. Skilled at writing well-designed, testable 
                    and efficient code using current best practices in web development. 
                    Fast learner and team player who is proficient in Web tools. 
                    Able and willing to learn new technology and deliver results in a timely manner.</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <h5>Address</h5>
                    <p> 19817 Sunnyside Drive North J 304 Shoreline, WA 98133</p>
                    <h5>Phone</h5>
                    <p>980-202-8552</p>
                    <h5>Email</h5>
                    <p>rttgg1@gmail.com</p>
                    <h5>Web</h5>
                    <p>mywebsite.com</p>
                    <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2000}
                            endYear={2005}
                            schoolName="University of North Carolina in Charlotte"
                            major="Bachelor in Chemistry"
                            />
                            <Education
                            startYear={2016}
                            endYear={2017}
                            schoolName="University of Washington"
                            major="Database Management in sql"
                            />
                            <Education
                            startYear={2018}
                            endYear={2018}
                            schoolName="SkillSpire"
                            major="Full Stuck Web Developer"
                            />
                            <hr style={{borderTop: '3px solid #e22947'}}/>
                            <h2>Experience</h2>
                        <Experience 
                        startYear={2017}
                        endYear={2018}
                        jobName="Data Anotation lab Analysit"
                        jobDescription="Analyzed resulting image sets for image and 
                        slide quality, and annotated malaria parasites, other blood-borne 
                        parasites, and white blood cells using a graphical user interface (GUI). This data is 
                        used to train the machine vision algorithms for the final product."
                        />
                        <Experience 
                        startYear={2014}
                        endYear={2016}
                        jobName="Quality Control Specialist and Lab Technologist"
                        jobDescription="Worked in developing processes and procedures to ensure data integrity, 
                        managing data and test results in database system. 
                        Worked in data managing software that provided sample management, decision making, and synchronize test result
                        Perform automated and manual test procedures on blood samples to assure the safety, potency and purity of the blood supply. 
                        Ability to correctly interpret test results, to include identification and correction of discrepancies."
                        />
                        <Experience 
                        startYear={2006}
                        endYear={2011}
                        jobName="Quality Control Lab Technician"
                        jobDescription="Analyzed shipment samples, as well as raw materials, in-process and finished products.
                                Operated, maintained, calibrated, and troubleshot analytical instrumentation. 
                                Used written test methodology to set-up and operate new or ancillary instrumentation. 
                                Performed routine analysis to support production and development labs. 
                                Interpreted analytical data, with the ability to recognize the difference between normal and abnormal results. 
                                Conducted Safe Behavior Audits along with additional site safety activities."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <Skills 
                        skill="javaScript"
                        progress={50}
                        />
                        <Skills 
                        skill="HTML/CSS"
                        progress={50}
                        />
                        <Skills 
                        skill="NodeJS"
                        progress={50}
                        />
                        <Skills 
                        skill="React"
                        progress={50}
                        />
                    </Cell>
                </Grid>
            </div>
            
        )
    }
}

export default Resume;