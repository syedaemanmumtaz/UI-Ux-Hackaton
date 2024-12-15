import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import Items from "./components/Items";
import FoodCategory from "./components/FootCategory";
import MenuComponent from "./components/MenuItems";
import MeetShef from "./components/MeetShef";
import Testimonials from "./components/Testimonials";
import RestaurantActive from "./components/RestarurntActive";
import Blog from "./components/Blog";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer/Footer";
// import LanguageDropdown from "./components/LanguageDropDown";
export default function Home() {
  return (
    <>
    <Header />
    <Navbar />
    <Hero />
    <AboutUs />
    <FoodCategory />
    <Items />

    <MenuComponent />
    <MeetShef />

    <Testimonials />
    <RestaurantActive />
    <Blog />

    <Footer />
    </>
  );
}
