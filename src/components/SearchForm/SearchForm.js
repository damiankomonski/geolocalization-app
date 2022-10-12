import React, { useState } from "react";
import "./SearchForm.scss";
import { Col, Form, InputGroup, Button, Alert } from "react-bootstrap";

function SearchForm(props){
    let searchInput = React.createRef();
    let [error, setError] = useState(null);

    // console.log("error", props.errorInfo);

    function checkIfIP(value){
        const regexExp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
        return regexExp.test(value);
    }

    function checkIfURL(value) {
        try { 
            return Boolean(new URL(value)); 
        }
        catch(e){ 
            return false; 
        }
    }

    function handleSubmit(e){
        e.preventDefault();

        if(checkIfIP(searchInput.current.value) || checkIfURL(searchInput.current.value)){
            props.onSearchSubmit(searchInput.current.value);
            props.handleSearchHistory(searchInput.current.value);
        } else{
            props.handleSetError("You don't type valid URL or IP Address. URL must start from http:// or https://");
        }
    }

    return (
        <Col xs="12">
            <h2 className="h5">Localize IP or URL address</h2>

            <Form className="mb-4" onSubmit={handleSubmit}>
                <InputGroup className="mb-3">
                    <Form.Control
                    placeholder="IP or URL address"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    size="lg"
                    ref={searchInput}
                    />
                    <Button variant="primary" id="button-addon2" type="submit">Search</Button>
                </InputGroup>
            </Form>

            {props.errorInfo  ?
            <Alert key={1} variant="danger">{props.errorInfo}</Alert>
            :
            null
            }

        </Col>
    )
}

export default SearchForm;