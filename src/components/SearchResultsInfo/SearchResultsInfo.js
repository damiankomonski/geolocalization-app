import React from "react";
import "./SearchResultsInfo.scss";
import { Col, Row, Spinner } from "react-bootstrap";

function SearchResultsInfo(){
    return (
        <Col md="4" xs="12">
            <Spinner animation="grow" variant="secondary" />

            <h3 className="h6">Search results info</h3>
            <p className="mb-1">IP Address: 168.178.124.200</p>
            <p className="mb-1">City: Mielec</p>
            <p className="mb-1">Continent: EU</p>
            <p className="mb-1">Zip: 89-890</p>
            <p className="mb-1">Type: IPv4</p>
        </Col>
    )
}

export default SearchResultsInfo;