import React, { useState, useEffect } from "react";
import "./ApplicationSearch.scss";
import { Col, Row } from "react-bootstrap";
import Map from "../Map/Map.js";
import UserInfo from "../UserInfo/UserInfo.js";
import SearchResultsInfo from "../SearchResultsInfo/SearchResultsInfo.js";
import SearchForm from "../SearchForm/SearchForm.js";

function ApplicationSearch(){
    let [searchQuery, setSearchQuery] = useState(null);
    let [userData, setUserData] = useState(null);

    function getUserInfo(){
        return fetch("http://api.ipstack.com/check?access_key=1390a344e426248dd0ae8a40015141ca")
            .then(response => response.json())
            .then(data => data)
            .catch((err) => {console.error(err)})
    };

    function onSearchSubmit(){
        fetch("http://api.ipstack.com/134.201.250.155?access_key=1390a344e426248dd0ae8a40015141ca")
            .then(response => response.json())
            .then(data => console.log(data));
    }

    useEffect(() => {
        getUserInfo()
            .then((data) => {
                console.log(data);
                setUserData(data);
            });
    }, []);

    return (
        <Col md="9" xs="12" className="pt-4">
            <Row>
                <Map
                    latitude={userData ? userData.latitude : null}
                    longitude={userData ? userData.longitude : null}
                />
                <UserInfo
                    ip={userData ? userData.ip : null}
                    continent={userData ? userData.continent_name : null}
                    country={userData ? userData.country_name : null}
                    city={userData ? userData.city : null}
                    zip_code={userData ? userData.zip : null}
                    country_flag={userData ? userData.location.country_flag : null}
                    capital={userData ? userData.location.capital : null}
                />
            </Row>
            <Row>
                <SearchForm onSearchSubmit={onSearchSubmit} />
            </Row>
            <Row>
                <Map />
                <SearchResultsInfo />
            </Row>
        </Col>
    )
}

export default ApplicationSearch;