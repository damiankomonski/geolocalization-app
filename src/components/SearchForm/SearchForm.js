import React from "react";
import "./SearchForm.scss";
import { Col, Row, Form, InputGroup, Button } from "react-bootstrap";

function SearchForm(){
    return (
        <Col xs="12">
            <h2 className="h5">Localize IP or URL address</h2>

            <Form className="mb-4">
                <InputGroup className="mb-3">
                    <Form.Control
                    placeholder="IP or URL address"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    size="lg"
                    />
                    <Button variant="primary" id="button-addon2" type="submit">Search</Button>
                </InputGroup>
            </Form>
        </Col>
    )
}

export default SearchForm;