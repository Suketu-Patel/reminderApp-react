import React, { useContext, useEffect } from "react"
import mapboxgl from 'mapbox-gl'
import { StoreContext } from "../index"
import "./style.css"
import { reaction } from "mobx"
import { withRouter } from "react-router-dom"

const MapBody = (props) => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY
    const store = useContext(StoreContext);
    navigator.geolocation.getCurrentPosition((data)=>{
        store.mapState.lat =data.coords.latitude
        store.mapState.lng = data.coords.longitude
    }, (error)=>{console.log(error)});
    let my_app;
    useEffect(() => {

        const map = new mapboxgl.Map({
            container: my_app,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [store.mapState.lng, store.mapState.lat],
            zoom: store.mapState.zoom,
        })
        // https://i.imgur.com/MK4NUzI.png
        const marker = new mapboxgl.Marker({
            draggable:true,
            color: "rgb(233, 58, 58)"
        })
        .setLngLat([store.mapState.lng, store.mapState.lat])
        .addTo(map);

        reaction(() => [store.mapState.lng, store.mapState.lat], () => {
            map.flyTo(
                {
                    center: [store.mapState.lng, store.mapState.lat],
                    zoom: 16,
                    speed: 1.5,
                    curve: 1,
                    easing(t) {
                        return t;
                    }
                }
            );
            marker.setLngLat([store.mapState.lng, store.mapState.lat])
        })
        marker.on('dragend',()=>{
            let lnglat = marker.getLngLat();
            store.mapState.lat = lnglat.lat;
            store.mapState.lng = lnglat.lng;
        })
        console.log(store.mapState.lng, store.mapState.lat);
        //eslint-disable-next-line
    }, []);

    return (
        <div style={{height:"100%"}}>
            <div ref={el => my_app = el} className="my_app">
            </div>
            <pre id = "coordinates" className="coordinates"></pre>
            <button className="setcoordbtn btn btn-danger w-100" onClick={()=>{props.history.push('/addReminder')}}>Set Location</button>
        </div>

    )
}

export default withRouter(MapBody)