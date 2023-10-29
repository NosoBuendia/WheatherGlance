import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import busIcon from './transit_assets/autobus.png';

export default function MainMap({ TransitData }) {

  const customIcon = L.icon({
    iconUrl: busIcon,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });  

  return (
    <MapContainer
      center={[TransitData[0]?.latitude, TransitData[0]?.longitude]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {TransitData.map((item, index) => (
        <Marker
          position={[TransitData[index]?.latitude, TransitData[index]?.longitude]}
          icon={customIcon}
          key={item.id}
        >
          <Popup>
            {TransitData[index]?.route_short_name} <br />
            {TransitData[index]?.trip_headsign}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};