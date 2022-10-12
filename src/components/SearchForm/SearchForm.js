import React, { useState } from "react";
import "./SearchForm.scss";
import { Col, Form, InputGroup, Button, Alert } from "react-bootstrap";

function SearchForm(props){
    let searchInput = React.createRef();
    let [error, setError] = useState(null);

    function checkIfIP(value){
        const regexExp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return regexExp.test(value);
    }

    function checkIfURL(value) {
        const regexExp = /^(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}(:[0-9]{1,5})?(\/.*)?$/;
        return regexExp.test(value);
    }

    function handleSubmit(e){
        e.preventDefault();

        if(checkIfIP(searchInput.current.value) || checkIfURL(searchInput.current.value)){
            props.onSearchSubmit(searchInput.current.value);
            props.handleSearchHistory(searchInput.current.value);
            setError(null);
        } else{
            setError("You don't type valid URL or IP Address");
        }
    }

    return (
        <Col xs="12">
            <h2 className="h5">Localize IP or URL address</h2>

            <Form className="mb-4" onSubmit={handleSubmit}>
                <InputGroup className="mb-1">
                    <Form.Control
                    placeholder="IP or URL address"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    size="lg"
                    ref={searchInput}
                    />
                    <Button variant="primary" id="button-addon2" type="submit">Search</Button>
                </InputGroup>
                <Form.Text className="text-muted">Don't start URL from http:// or https://</Form.Text>
            </Form>

            {error  ?
            <Alert key={1} variant="danger">{error}</Alert>
            :
            null
            }

        </Col>
    )
}

export default SearchForm;