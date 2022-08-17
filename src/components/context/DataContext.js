import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [videosProductions, setVideosProductions] = useState([]);
  const [photoProductions, setPhotoProductions] = useState([]);
  const [photoProductionsResults, setPhotoProductionsResults] = useState([]);

  useEffect(() => {
    axios("https://venice-films-api.herokuapp.com/db").then((res) => setData(res.data.plants));
  }, []);

  useEffect(() => {
    axios("https://venice-films-api.herokuapp.com/categories").then((res) => setCategories(res.data));
  }, []);

  useEffect(() => {
    axios("https://venice-films-api.herokuapp.com/videos").then((res) => setVideosProductions(res.data));
  }, []);

  useEffect(() => {
    axios("https://venice-films-api.herokuapp.com/photos").then((res) => setPhotoProductions(res.data));
  }, []);
  useEffect(() => {
    axios("https://venice-films-api.herokuapp.com/photos").then((res) =>
      setPhotoProductionsResults(res.data.imageResults)
    );
  }, []);
  return (
    <dataContext.Provider
      value={{
        data,
        categories,
        videosProductions,
        photoProductions,
        photoProductionsResults,
      }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
