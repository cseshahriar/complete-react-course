import React from 'react';
import './profile.css';


class Profile extends React.Component {
    render() {
        return(
            <div className='container'>
                <div className='bio'>
                    <h3>Shahriar Hosen</h3>
                    <p>Fullstack Developer</p>
                </div>
                <div className='skills'>
                    <h3>Skills</h3>
                    <ul>
                        <li>Python</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
                <div className='links'>
                    <h3>Social Links: </h3>
                    <ul>
                        <li><a href="/facebook">Facebook</a></li>
                        <li><a href="/facebook">Twitter</a></li>
                        <li><a href="/facebook">Linkedin</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Profile;