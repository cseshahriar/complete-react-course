import React from 'react';
import './profile.css';

import Bio from './Bio';
import Skills from './Skills';
import Links from './Links';


class Profile extends React.Component {
    me = {
        name: 'Shhariar Hosen',
        title: 'Fullstack Developer',
        skillA: 'Python',
        skillB: 'Django',
        skillC: 'JavaScript'
    }

    render() {
        
        console.log('Profile - ', this.props);

        return(
            <div className='container'>
                <Bio name={this.me.name} title={this.me.title}/>
                <Skills
                    skillA={this.me.skillA}
                    skillB={this.me.skillB}
                    skillC={this.me.skillC}
                />
                <Links/>
            </div>
        )
    }
}

export default Profile;