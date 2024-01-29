import React from 'react'
import { MapContainer , Marker, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"

export default function BookMapSection() {
  return (
    <section data-aos="zoom-in-up" data-aos-duration="1000">
        <MapContainer center={[31.560822, 31.076047]} dragging={false} zoom={16} scrollWheelZoom={false}>
            <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[31.560822, 31.076047]} >

            </Marker>
        </MapContainer>
    </section>
  )
}
