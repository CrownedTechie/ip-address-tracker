import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import customMarkerImg from "../../assets/icon-location.svg";

//* Creating my custom Icon
const customIcon = L.icon({
 iconUrl: customMarkerImg,
 iconSize:[38, 45],
 iconAnchor:[22, 94],
 popupAnchor:[-3, -84]
})

const Map = () => {
 return (
  <>
   <MapContainer center={[51.505, -0.09]} style={{height: "100vh", width:"100%"}} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]} icon={customIcon}>
     <Popup>Hello World!</Popup>
    </Marker>
   </MapContainer>
  </>
 );
}
 
export default Map;