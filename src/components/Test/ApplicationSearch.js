import React from "react";
import "./ApplicationSearch.scss";
import { Col, Row } from "react-bootstrap";
import Map from "../Map/Map.js";
import UserInfo from "../UserInfo/UserInfo.js";
import SearchResultsInfo from "../SearchResultsInfo/SearchResultsInfo.js";
import SearchForm from "../SearchForm/SearchForm.js";

function ApplicationSearch(){
    return (
        <Col md="9" xs="12" className="pt-4">
            <Row>
                <Map />
                <UserInfo />
            </Row>
            <Row>
                <SearchForm />
            </Row>
            <Row>
                <Map />
                <SearchResultsInfo />
            </Row>
        </Col>
    )
}

export default ApplicationSearch;