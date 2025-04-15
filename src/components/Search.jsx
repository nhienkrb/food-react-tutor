import React, { useEffect, useState } from 'react';
import style from "./css-components/search.module.css";

const API_KEY = '3b351d7b80b448c0923c57515abe4805';
const API_URL = 'https://api.spoonacular.com/recipes/complexSearch';
const API_URL_SEARCH = 'https://api.spoonacular.com/recipes/complexSearch?query=';
export default function Search({foodData, setFoodData}) {
    const [query, setQuery] = useState('pizza');
    useEffect(() => {
      async function fetchFood(){
        const res = await fetch(`${API_URL_SEARCH}${query}&apiKey=${API_KEY}`);
        const data = await res.json();
        setFoodData(data.results);
       }
       fetchFood();
    },[query])
  return (
    <div className={style.search}>
      <input onChange={(e)=>setQuery(e.target.value)} value={query}
            type="text" 
            placeholder="Search..."  className={style.input}/>
           <hr/>
      <button>Search</button>
    </div>
  );
}
 