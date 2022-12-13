import React, {useState, useEffect} from "react";
import {useCookies} from 'react-cookie';
import { useNavigate } from 'react-router-dom'

import Card from 'react-bootstrap/Card';

import NavBarComponent from "./nav.component";
import FooterComponent from "./footer.component";


function PageNotFound() {
    const navigate = useNavigate();

    return(
        <>
            <NavBarComponent/>
            <FooterComponent/>

            <div className="container py-5">
                <div className="row">
                    <div className="col">
                        <Card>
                            <Card.Body>
                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="text-center">
                                        <h1 className="display-1 fw-bold">404</h1>
                                        <p className="fs-3"><span className="text-danger">Opps!</span> Page not found.
                                        </p>
                                        <p className="lead">
                                            The page you’re looking for does not exist.
                                        </p>
                                        <a onClick={() => navigate('/') } className="btn btn-primary">Go Home</a>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageNotFound;