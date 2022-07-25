import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [videosProductions, setVideosProductions] = useState([]);

  useEffect(() => {
    axios("https://venice-films-api.herokuapp.com/db").then((res) => setData(res.data.plants));
  }, []);

  useEffect(() => {
    axios("https://venice-films-api.herokuapp.com/categories").then((res) => setCategories(res.data));
  }, []);

  useEffect(() => {
    axios("https://venice-films-api.herokuapp.com/videos").then((res) => setVideosProductions(res.data));
  }, []);

  return (
    <dataContext.Provider
      value={{
        data,
        categories,
        videosProductions,
      }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
