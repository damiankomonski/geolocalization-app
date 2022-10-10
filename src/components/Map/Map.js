import React from "react";
import "./Map.scss";
import { Col, Row, Spinner } from "react-bootstrap";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import "leaflet/dist/leaflet.css"
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

function Map(){
    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });
    
    L.Marker.prototype.options.icon = DefaultIcon;

    return (
        <Col md="8" xs="12">
            <Spinner animation="grow" variant="secondary" />
            
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className="h-240 mb-4 rounded-3">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        Tekst marker
                    </Popup>
                </Marker>
            </MapContainer>
        </Col>
    )
}

export default Map;