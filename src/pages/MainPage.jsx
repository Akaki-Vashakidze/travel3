import React from "react";
import Hotel from "../components/Hotel";
import ImageSlider from "../components/ImageSlider";
import Navbar from "../components/Navbar";
import { SliderData } from "../data/SliderData";
import { WyndhamBatumiImages } from "../data/HotelImages";
import Plan from "../components/Plan";
import GeoMap from "../components/GeoMap";
import { Link } from "react-scroll";

const MainPage = () => {
  return (
    <div>
      <ImageSlider slides={SliderData} />
      <GeoMap />

      <div className="max-w-[1240px] m-auto py-16 px-4 text-center z-10">
        <h1 className="text-3xl text-[#f51767]">Choose Your Plan</h1>
        <p className="text-lg">Tap on your favourite and check it on the map</p>
        <div className="grid grid-rows-none md:grid-cols-2 lg:grid-cols-3 py-4 gap-2 md:gap-4">
          <div className="w-full col-span-2 md:col-span-1 row-span-1 xl:col-span-1 relative">
            <Link to="Map" smooth={true} duration={300}>
              <Plan PlanTitle="Standard" />
            </Link>
          </div>
          <div
            // className="w-full h-[350px] object-cover col-span-1 md:col-span-1 row-span-1 lg:col-span-1"
            className="w-full col-span-2 md:col-span-1 row-span-1 xl:col-span-1"
          >
            <Link to="Map" smooth={true} duration={300}>
              <Plan PlanTitle="VIP" />
            </Link>
          </div>
          <div
            // className="w-full h-[350px] object-cover col-span-1 md:col-span-1 row-span-1 lg:col-span-1"
            className="w-full col-span-2 md:col-span-2 row-span-1 lg:col-span-1"
          >
            <Link to="Map" smooth={true} duration={300}>
              <Plan PlanTitle="Premium" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] m-auto py-16 px-4 text-center">
        <h1 className="text-3xl text-[#f51767]">Choose Your Hotel</h1>
        <p className="text-lg">Tap on your favourite</p>
        <div className="grid grid-rows-none md:grid-cols-2 lg:grid-cols-3 py-4 gap-2 md:gap-4">
          <div className="w-full col-span-2 md:col-span-1 row-span-1 xl:col-span-1 relative">
            <Hotel
              HotelTitle="Wyndham Batumi"
              stars="5"
              HotelSelectedImage={WyndhamBatumiImages[0].image}
              HotelImages={WyndhamBatumiImages}
              priceOnOneDay="170"
              reviews="1,341"
              rating="8.6"
            />
          </div>
          <div
            // className="w-full h-[350px] object-cover col-span-1 md:col-span-1 row-span-1 lg:col-span-1"
            className="w-full col-span-2 md:col-span-1 row-span-1 xl:col-span-1"
          >
            <Hotel
              HotelTitle="Kakheti Batumi"
              stars="3"
              HotelSelectedImage={WyndhamBatumiImages[0].image}
              HotelImages={WyndhamBatumiImages}
              priceOnOneDay="170"
              reviews="1,341"
              rating="8.6"
            />
          </div>
          <div
            // className="w-full h-[350px] object-cover col-span-1 md:col-span-1 row-span-1 lg:col-span-1"
            className="w-full col-span-2 md:col-span-2 row-span-1 lg:col-span-1"
          >
            <Hotel
              HotelTitle="Kakheti Batumi"
              stars="3"
              HotelSelectedImage={WyndhamBatumiImages[0].image}
              HotelImages={WyndhamBatumiImages}
              priceOnOneDay="170"
              reviews="1,341"
              rating="8.6"
            />
          </div>
        </div>
      </div>
      {/* <div className="w-[400px]">
        <Hotel />
      </div> */}
    </div>
  );
};

export default MainPage;
