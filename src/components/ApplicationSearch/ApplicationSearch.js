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
    let [error, setError] = useState(null);
    let [showResults, setShowResults] = useState(false);
    let [searchHistory, setSearchHistory] = useState([]);

    function getUserInfo(){
        return fetch("http://api.ipstack.com/check?access_key=bc9c9aaf5439b5057d9ae9683b79c924")
            .then(response => response.json())
            .then(data => data)
            .catch((error) => {console.error(error)})
    };

    function onSearchSubmit(searchInput){
        let searchQuery = searchInput;
        setError(null);
        setSearchResults(null);
        setShowResults(true);

        fetch("http://api.ipstack.com/" + searchQuery + "?access_key=bc9c9aaf5439b5057d9ae9683b79c924")
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                if(data.hasOwnProperty("error")){
                    setError(data.error.info);
                } else{
                    setSearchResults(data);
                }
            })
            .catch((error) => {console.error(error)});
    }

    function handleSetError(value){
        setError(value);
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
                <SearchForm handleSearchHistory={props.setSearchHistory} onSearchSubmit={onSearchSubmit} errorInfo={error ? error : null} handleSetError={handleSetError} />
            </Row>
            {showResults ? 
            <Row>
                <Map 
                    latitude={searchResults ? searchResults.latitude : 0}
                    longitude={searchResults ? searchResults.longitude : 0} 
                    error={error ? error : null}
                />
                <SearchResultsInfo 
                    ip={searchResults ? searchResults.ip : null}
                    continent={searchResults ? searchResults.continent_name : null}
                    country={searchResults ? searchResults.country_name : null}
                    city={searchResults ? searchResults.city : null}
                    zip_code={searchResults ? searchResults.zip : null}
                    country_flag={searchResults ? searchResults.location.country_flag : null}
                    capital={searchResults ? searchResults.location.capital : null}
                    error={error ? error : null}
                />
            </Row>
            :
            null
            }
            
        </Col>
    )
}

export default ApplicationSearch;