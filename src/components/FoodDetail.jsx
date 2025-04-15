import React, { useEffect, useState } from "react";

export default function FoodDetail({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information?apiKey=3b351d7b80b448c0923c57515abe4805`;
  const API_KEY = "3b351d7b80b448c0923c57515abe4805";
  const [food, setFood] = useState({});
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data);
      setFood(data);
    }
    fetchFood();
  }, [foodId]);
  return <div>
    <img src={food.image} alt={food.title} />
    <h2>{food.title}</h2>      <p dangerouslySetInnerHTML={{ __html: food.summary }} />

  </div>;
}
