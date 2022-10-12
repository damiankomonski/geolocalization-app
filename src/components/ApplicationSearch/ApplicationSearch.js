import React, { useState, useEffect } from "react";
import "./ApplicationSearch.scss";
import { Col, Row } from "react-bootstrap";
import Map from "../Map/Map.js";
import UserInfo from "../UserInfo/UserInfo.js";
import SearchResultsInfo from "../SearchResultsInfo/SearchResultsInfo.js";
import SearchForm from "../SearchForm/SearchForm.js";

function ApplicationSearch(props){
    let [searchQuery, setSearchQuery] = useState(null);
    let [userData, setUserData] = useState(null);
    let [searchResults, setSearchResults] = useState(null);
    let [APIerror, setAPIError] = useState(null);
    let [showResults, setShowResults] = useState(false);

    function getUserInfo(){
        return fetch("http://api.ipstack.com/check?access_key=aa9b3e7a752e1e89a70450a96fc9b423")
            .then(response => response.json())
            .then(data => data)
            .catch((error) => {console.error(error)})
    };

    function onSearchSubmit(searchInput){
        let searchQuery = searchInput;
        setAPIError(null);
        setSearchResults(null);
        setShowResults(true);

        fetch("http://api.ipstack.com/" + searchQuery + "?access_key=aa9b3e7a752e1e89a70450a96fc9b423")
            .then(response => response.json())
            .then((data) => {
                console.log(data);
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
                    latitude={userData ? userData.latitude : 0}
                    longitude={userData ? userData.longitude : 0}
                    show={true}
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
                <SearchForm handleSearchHistory={props.setSearchHistory} onSearchSubmit={onSearchSubmit} />
            </Row>

            <Row>
                <Map 
                    latitude={searchResults ? searchResults.latitude : 0}
                    longitude={searchResults ? searchResults.longitude : 0} 
                    show={showResults}
                />
                <SearchResultsInfo 
                    ip={searchResults ? searchResults.ip : null}
                    continent={searchResults ? searchResults.continent_name : null}
                    country={searchResults ? searchResults.country_name : null}
                    city={searchResults ? searchResults.city : null}
                    zip_code={searchResults ? searchResults.zip : null}
                    country_flag={searchResults ? searchResults.location.country_flag : null}
                    capital={searchResults ? searchResults.location.capital : null}
                    show={showResults}
                />
            </Row>
            
        </Col>
    )
}

export default ApplicationSearch;