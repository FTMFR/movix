import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchDataFromApi } from "./utils/api";
import { getApiConfig } from "./store/homeSlice";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import pageNotFound from "./pages/404/pageNotFound";
import Details from "./pages/details/Details";
import Explore from "./pages/explore/Explore";
import SearchResults from "./pages/searchResult/SearchResults";
import "./App.css";

function App() {
  const disPatch = useDispatch();
  const url = useSelector((state) => state.home);
  console.log(url);

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      disPatch(getApiConfig(res));
    });
  };

  return (
    <Routes>
      <Route path="/" element />
    </Routes>
  );
}

export default App;
