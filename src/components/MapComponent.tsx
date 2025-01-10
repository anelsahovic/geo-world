'use client';

//Map component Component from library
import { GoogleMap, Marker } from '@react-google-maps/api';

//Map's styling
export const defaultMapContainerStyle = {
  width: '100%',
  height: '16rem',
  borderRadius: '15px 0px 0px 15px',
};

const defaultMapZoom = 3;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: 'auto',
};

type Props = {
  lat: number;
  lng: number;
};

const MapComponent = ({ lat, lng }: Props) => {
  const defaultMapCenter = {
    lat: lat,
    lng: lng,
  };
  return (
    <div className="w-full">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      >
        <Marker position={{ lat: lat, lng: lng }} />
      </GoogleMap>
    </div>
  );
};

export { MapComponent };
