import React, { useState } from "react";
import "./SearchForm.scss";
import { Col, Form, InputGroup, Button, Alert } from "react-bootstrap";

function SearchForm(props){
    let searchInput = React.createRef();

    // console.log("error", props.errorInfo);

    function handleSubmit(e){
        e.preventDefault();

        props.onSearchSubmit(searchInput.current.value);
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

            {props.errorInfo ?
            <Alert key={1} variant="danger">{props.errorInfo}</Alert>
            :
            null
            }

        </Col>
    )
}

export default SearchForm;