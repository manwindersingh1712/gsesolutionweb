import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 12.9163,
    lng: 77.6974,
  };

  return (
    <div className="xl:w-full w-[375px] m-auto xl:m-0 xl:pt-8 xl:mt-0 mt-10 xl:pr-[140px] xl:pb-12 xl:pl-[140px]">
      <div className="relative mx-auto  xl:mt-30 xl:mb-20 flex flex-col gap-[40px] xl:w-[484px] w-[335px] overflow-hidden">
        <div className="xl:w-[210px] m-auto font-montserrat font-bold xl:text-[32px] text-[26px] text-center text-black">
          <span className="text-[#6449FF]"> Visit</span> us here
        </div>

        <div className="w-[484px]">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>

        <div className="text-left">
          <p className="font-commissioner uppercase  font-medium opacity-90 text-[#5B6674] text-[18px]">
            ABC Building, XYZ Road, Delhi - 123456
          </p>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=12.9163,77.6974"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6449FF] mt-2 text-[18px]  block"
          >
            Get Directions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Map;
