import React, { useEffect, useState, useRef } from "react";
import "./Map.scss";
import { Col, Row, Spinner } from "react-bootstrap";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import "leaflet/dist/leaflet.css"
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

function Map(props){
    let [isLoading, setIsLoading] = useState(true);

    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });
    
    L.Marker.prototype.options.icon = DefaultIcon;

    useEffect(() => {
        if(props.longitude && props.latitude){
            setIsLoading(false);
        } else{
            setIsLoading(true);
        }
    }, [props.latitude, props.longitude])

    return (
        <>
        {!props.error ?
        <Col md="8" xs="12" className="minh-240">

        {isLoading ? 
        <div className="d-flex justify-content-center align-items-center h-100">
            <Spinner animation="grow" variant="secondary" />
        </div>
    
        :
    
        <MapContainer center={[props.latitude, props.longitude]} zoom={12} scrollWheelZoom={true} className="h-240 mb-4 rounded-3">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[props.latitude, props.longitude]}>
                <Popup>
                    Tekst marker
                </Popup>
            </Marker>
        </MapContainer>
        
        }

        </Col>

        :

        null

        }
        </>
    )
}

export default Map;