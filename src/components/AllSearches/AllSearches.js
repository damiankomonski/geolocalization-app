import React from "react";
import "./AllSearches.scss";
import { Col } from "react-bootstrap";

function AllSearches(props){
    console.log(Array.isArray(props.searchHistory));

    function clearHistory(e){
        e.preventDefault();
        props.clearHistory();
    }
    
    return (
        <Col xs="12" md="3" className="pt-4">
            <h3 className="h5">All your searches:</h3>

            {!props.searchHistory.length ? 
            <p>History empty.</p>
            :
            <>
            <ul>
                {props.searchHistory.map((element, index) => {
                    return (
                        <li key={index++}>
                            {element}
                            {/* <a href="">{element}</a> */}
                        </li>
                    );
                })
                .reverse()}
            </ul>

            <a href="#" onClick={clearHistory}>Clear history</a>
            </>
            }
            
        </Col>
    )
}

export default AllSearches;