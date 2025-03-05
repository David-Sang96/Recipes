import { Recipe } from "../types/recipe";

type CardProps = {
  recipe: Recipe;
};

const Card = ({ recipe }: CardProps) => {
  return (
    <div className="shadow-md p-2">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="object-cover rounded-md"
      />
      <h2>{recipe.name}</h2>
      <p>Difficulty - {recipe.difficulty}</p>
      <p>Rating - {recipe.rating}</p>
    </div>
  );
};

export default Card;
