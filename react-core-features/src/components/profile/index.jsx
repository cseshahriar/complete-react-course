import React from 'react';
import './profile.css';

import Bio from './Bio';
import Skills from './Skills';
import Links from './Links';


class Profile extends React.Component {
    render() {
        return(
            <div className='container'>
                <Bio/>
                <Skills/>
                <Links/>
            </div>
        )
    }
}

export default Profile;