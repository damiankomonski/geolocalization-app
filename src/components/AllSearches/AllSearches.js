import React from "react";
import "./AllSearches.scss";
import { Col } from "react-bootstrap";

function AllSearches(){
    return (
        <Col xs="12" md="3" className="pt-4">
            <h3 className="h5">All your searches:</h3>
            
            <ul>
                <li>
                    <a href="./">192.168.10.10</a>
                </li>
                <li>
                    <a href="./">192.168.10.10</a>
                </li>
                <li>
                    <a href="./">192.168.10.10</a>
                </li>
            </ul>
        </Col>
    )
}

export default AllSearches;