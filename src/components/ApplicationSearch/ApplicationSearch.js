import React, { useState, useEffect } from "react";
import "./ApplicationSearch.scss";
import { Col, Row } from "react-bootstrap";
import Map from "../Map/Map.js";
import UserInfo from "../UserInfo/UserInfo.js";
import SearchResultsInfo from "../SearchResultsInfo/SearchResultsInfo.js";
import SearchForm from "../SearchForm/SearchForm.js";

function ApplicationSearch(props){
    let [searchQuery, setSearchQuery] = useState("");
    let [userData, setUserData] = useState(null);
    let [searchResults, setSearchResults] = useState(null);
    let [APIerror, setAPIError] = useState(null);
    let [showResults, setShowResults] = useState(false);

    // I use https://ip-api.com/ 

    function handleChangeSearchQuery(value){
        setSearchQuery(value);
    }

    function getUserInfo(){
        let url = new URL("http://ip-api.com/json/");
        url.searchParams.append("fields", "9498623");

        return fetch(url)
            .then(response => response.json())
            .then(data => data)
            .catch((error) => {console.error(error)})
    };

    function onSearchSubmit(){
        let url = new URL("http://ip-api.com/json/" + searchQuery);
        url.searchParams.append("fields", "9498623");

        setAPIError(null);
        setSearchResults(null);
        setShowResults(true);

        fetch(url)
            .then(response => response.json())
            .then((data) => {
                if(data.hasOwnProperty("error")){
                    setAPIError(data.error.info);
                } else{
                    setSearchResults(data);
                }
            })
            .catch((error) => {console.error(error)});
    }

    useEffect(() => {
        getUserInfo()
            .then((data) => {
                setUserData(data);
            });
    }, []);

    return (
        <Col md="9" xs="12" className="pt-4">
            <Row>
                <Map
                    latitude={userData ? userData.lat : 0}
                    longitude={userData ? userData.lon : 0}
                    show={true}
                />
                <UserInfo
                    ip={userData ? userData.query : null}
                    continent={userData ? userData.continent : null}
                    country={userData ? userData.country : null}
                    city={userData ? userData.city : null}
                    zip_code={userData ? userData.zip : null}
                    currency={userData ? userData.currency : null}
                />
            </Row>
            <Row>
                <SearchForm 
                    handleSearchHistory={props.setSearchHistory} 
                    onSearchSubmit={onSearchSubmit} 
                    searchQuery={searchQuery} 
                    onSearchQueryChange={handleChangeSearchQuery}
                />
            </Row>

            <Row>
                <Map 
                    latitude={searchResults ? searchResults.lat : 0}
                    longitude={searchResults ? searchResults.lon : 0} 
                    show={showResults}
                />
                <SearchResultsInfo 
                    ip={searchResults ? searchResults.query : null}
                    continent={searchResults ? searchResults.continent : null}
                    country={searchResults ? searchResults.country : null}
                    city={searchResults ? searchResults.city : null}
                    zip_code={searchResults ? searchResults.zip : null}
                    currency={searchResults ? searchResults.currency : null}
                    show={showResults}
                />
            </Row>
            
        </Col>
    )
}

export default ApplicationSearch;