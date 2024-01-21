import React, { useState, useContext, createContext } from "react";
import axios from "axios";

export const DataContext = createContext();



const DataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [result, setResult] = useState(null);

  const fetchCategories = () => {
    axios.get('https://opentdb.com/api_category.php')
      .then((res) => setCategories(res.data.trivia_categories))
      .catch((error) => console.log(error));
  }

  const fetchQuestions = (qesNo, id, diffValue) => {
    axios.get(`https://opentdb.com/api.php?amount=${qesNo}&category=${id}&difficulty=${diffValue}`)
      .then((res) => setResult(res.data.results))
      .catch((error) => console.log(error));
  }


  const value = { categories, result, fetchCategories, fetchQuestions };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider;