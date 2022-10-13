import React from "react";
import "./AllSearches.scss";
import { Col, Button } from "react-bootstrap";

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
                        </li>
                    );
                })
                .reverse()}
            </ul>
            
            <Button variant="link" onClick={clearHistory}>Clear history</Button>
            </>
            }
            
        </Col>
    )
}

export default AllSearches;