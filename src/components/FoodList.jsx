import FoodItem from "./FoodItem";

export default function FoodList({ foodData,setFoodId }) {
  return (
    <div className="food-list">
      {foodData.map((food) => {
        return <FoodItem setFoodId={setFoodId} key={food.id} food={food} />;
      })}
    </div>
  );
}
