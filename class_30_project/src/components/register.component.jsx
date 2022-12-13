import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'

import Card from 'react-bootstrap/Card';

import NavBarComponent from "./nav.component";
import FooterComponent from "./footer.component";

import APIService from "../APIService";

function RegisterComponent() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const registrationAction = () => {
        APIService.RegisterUser({username, password})
            .then(response => navigate('/login'))
            .catch(error => console.log(error));
    }

    return(
        <>
            <NavBarComponent/>
            <FooterComponent/>

            <div className="container py-5">
                <div className="row">
                    <div className="col-6 offset-3">
                        <Card>
                            <Card.Body>
                                <h3 className="mt-3 mb-3 text-center">SIGN UP</h3>

                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input
                                        type="text" className="form-control" id="username" placeholder="Please Enter Username"
                                        value={username} onChange={e => setUsername(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password" className="form-control" id="password" placeholder="Please Enter Password"
                                        value={password} onChange={e => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3 mt-3 text-center">
                                    <button onClick={registrationAction} className="btn btn-primary">SIGN UP</button>
                                    <small style={{display:'block', marginLeft: '15px', marginTop: '15px'}}>If You Have An Account, Please <a onClick={() => navigate('/login') }  style={{textDecoration: 'none'}}>Login</a> Here</small>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterComponent;