import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="M.Tech Software Engineering" where="IK Gujral punjab technical University" />
            <Widecard title="SSLC | HSC" where="Kendriya Vidyalaya Masimpur" from="2013" to="2015"/>
            </div>
            )
        }
    }
    
export default Education
    