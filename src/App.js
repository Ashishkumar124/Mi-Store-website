import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PreNavbar from './components/PreNavbar/PreNavbar';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import data from './data/data.json';
import Offers from './components/Offers/Offers';
import Heading from './components/Heading/Heading';
import StarProducts from './components/StarProducts/StarProducts';
import HotAccessoriesMenu from './components/HotAccessoriesMenu/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories/HotAccessories';
import ProductReviews from './components/ProductReviews/ProductReviews';
import Videos from './components/Videos/Videos';
import Banner from './components/Banner/Banner';
import Footer from "./components/Footer/Footer";
import NavOptions from "./components/NavOptions/NavOptions";

const App = () => {
  return (
    <div>
      <Router>
        <PreNavbar />
        <Navbar />

        <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>

        <Slider start={data.banner.end} />
        <Offers offer={data.offer} />
        <Heading text="STAR PRODUCTS" />
        <StarProducts starProduct={data.starProduct} />
        <Heading text="HOT ACCESSORIES" />
        {data.hotAccessories && <HotAccessoriesMenu />}
        <Routes>
          <Route path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
          <Route path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
          <Route path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
          <Route path="/lifestyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} />
          <Route path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
        </Routes>
        <Heading text="PRODUCT REVIEWS" />
        <ProductReviews productReviews={data.productReviews} />
        <Heading text="VIDEOS" />
        <Videos videos={data.videos} />
        <Heading text="IN THE PRESS" />
        <Banner banner={data.banner} />

        <Footer footer={data.footer} />
       </Router>
    </div>
  );
};

export default App;
