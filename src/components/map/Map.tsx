import React, { useEffect } from 'react'
import Basemap from './Basemap';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { Navigate } from 'react-router-dom'
import CheckLogIn from '../CheckLogIn';

let address: [number, number] = [51.505, -0.09]

export default function Map() {

    return (
        <>
            <CheckLogIn />
            <MapContainer style={{ width: '100%', height: '100vh', position: 'absolute' }} center={address} zoom={13} scrollWheelZoom={true} >
                <Marker position={address}>
                    <Popup>
                        This is a area
                    </Popup>
                </Marker>
                <Basemap />
            </MapContainer>
        </>
    )
}

