import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import customMarkerImg from "../../assets/icon-location.svg";

type MapProps = {
 lat: number;
 lng: number;
};

//* Creating my custom Icon
const customIcon = L.icon({
 iconUrl: customMarkerImg,
 iconSize:[38, 45],
 iconAnchor:[22, 94],
 popupAnchor:[-3, -84]
})

const Map = ({lat, lng}: MapProps) => {
 const defaultLat = lat ?? 51.505; 
 const defaultLng = lng ?? -0.09; 
 return (
  <>
   <MapContainer center={[defaultLat, defaultLng]} style={{height: "100vh", width:"100%"}} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[defaultLat, defaultLng]} icon={customIcon}>
     <Popup>Hello World!</Popup>
    </Marker>
   </MapContainer>
  </>
 );
}
 
export default Map;