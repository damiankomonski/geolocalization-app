import React, { useState, useEffect } from "react";
import "./SearchResultsInfo.scss";
import { Col, Spinner } from "react-bootstrap";

function SearchResultsInfo(props){
    let [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(props.ip && props.continent && props.country && props.city && props.zip_code && props.currency){
            setIsLoading(false);
        } else{
            setIsLoading(true);
        }

    }, [props.ip, props.continent, props.country, props.city, props.zip_code, props.currency]);

    return (
        <>
        {props.show ? 
        <Col md="4" xs="12">

        {isLoading ? 
        
        <div className="d-flex justify-content-center align-items-center h-100">
            <Spinner animation="grow" variant="secondary" />
        </div>

        :

        <>
            <h3 className="h6">Search results info</h3>
            <p className="mb-1">IP Address: {props.ip}</p>
            <p className="mb-1">City: {props.city}</p>
            <p className="mb-1">Continent: {props.continent}</p>
            <p className="mb-1">Country: {props.country}</p>
            <p className="mb-1">Zip: {props.zip_code}</p>
            <p className="mb-1">Currency: {props.currency}</p>
        </>

        }

        </Col>

        :

        null

        } 
        </>
    )
}

export default SearchResultsInfo;