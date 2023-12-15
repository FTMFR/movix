import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfig } from "./store/homeSlice";
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
    <div className="App">
      App
      {/* {url?.total_pages} */}
    </div>
  );
}

export default App;
