import style from "./css-components/foodItem.module.css";

export default function FoodItem({ food , setFoodId}) {
  
  return (
    <div className={style.foodItemContainer}>
      <img className={style.itemImage} src={food.image} alt={food.name} />
      <div className={style.itemContent}>
        <p className={style.itemName}>{food.title}</p>
        <button onClick={()=>  {
          console.log(food.id);
          setFoodId(food.id)
        }} className={style.btnView}>View Recipe</button>{" "}
      </div>
    </div>
  );
}

