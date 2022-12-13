import React, {useState, useEffect} from "react";
import {useCookies} from 'react-cookie';
import { useNavigate } from 'react-router-dom'

import Card from 'react-bootstrap/Card';

import APIService from "../APIService";

function LoginComponent() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useCookies(['token']);

    const navigate = useNavigate();

    useEffect(() => {
        if(token['token']) {
            navigate('/')
        }
    }, [token]) // one time

    const loginAction = () => {
        APIService.LoginUser({username, password})
            .then(response => setToken('token', response.token))
            .catch(error => console.log(error));
    }

    return(
        <div className="container py-5">
            <div className="row">
                <div className="col-6 offset-3">
                    <Card>
                        <Card.Body>
                            <h3 className="mt-3 mb-3 text-center">SIGN IN TO STORE</h3>

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
                                <button onClick={loginAction} className="btn btn-primary">Login</button>
                                <small style={{display:'block', marginLeft: '15px', marginTop: '15px'}}>If You Don't Have Account, Please <a href="/register" style={{textDecoration: 'none'}}>Register</a> Here</small>
                            </div>

                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent;