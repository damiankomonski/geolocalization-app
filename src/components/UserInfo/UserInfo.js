import React from "react";
import "./UserInfo.scss";
import { Col, Row } from "react-bootstrap";

function UserInfo(){
    return (
        <Col md="4" xs="12">
            <h3 className="h6">Your info</h3>
            <p className="mb-1">IP Address: 168.178.124.200</p>
            <p className="mb-1">City: Mielec</p>
            <p className="mb-1">Continent: EU</p>
            <p className="mb-1">Zip: 89-890</p>
            <p className="mb-1">Type: IPv4</p>
        </Col>
    )
}

export default UserInfo;