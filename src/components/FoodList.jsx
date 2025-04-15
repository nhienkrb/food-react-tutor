import FoodItem from "./FoodItem";

export default function FoodList({ foodData }) {
  return (
    <div className="food-list">
      {foodData.map((food) => {
        return <FoodItem key={food.id} food={food} />;
      })}
    </div>
  );
}
