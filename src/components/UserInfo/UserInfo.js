import React, { useState, useEffect } from "react";
import "./UserInfo.scss";
import { Col, Spinner } from "react-bootstrap";

function UserInfo(props){
    let [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(props.ip && props.country && props.city && props.continent && props.zip_code && props.capital){
            setIsLoading(false)
        }

    }, [props.ip, props.country, props.city, props.continent, props.zip_code, props.capital]);

    return (
        <Col md="4" xs="12" className="minh-240">

        {isLoading ? 
        
        <div className="d-flex justify-content-center align-items-center h-100">
            <Spinner animation="grow" variant="secondary" />
        </div>

        :

        <>
            <h3 className="h6">Your approximate location</h3>
            <p className="mb-1">IP Address: {props.ip}</p>
            <p className="mb-1">Country: {props.country}</p>
            <p className="mb-1">City: {props.city}</p>
            <p className="mb-1">Continent: {props.continent}</p>
            <p className="mb-1">Zip: {props.zip_code}</p>
            <p className="mb-1">Currency: {props.capital}</p>
        </>

        }
        </Col>
    )
}

export default UserInfo;