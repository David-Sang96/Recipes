import { Link } from "react-router";
import { Recipe } from "../types/recipe";

type CardProps = {
  recipe: Recipe;
};

const Card = ({ recipe }: CardProps) => {
  return (
    <Link
      to={`/recipe/${recipe.id}`}
      className="shadow-md p-3 rounded-md bg-sky-50"
    >
      <img
        src={recipe.image}
        alt={recipe.name}
        className="object-cover rounded-md"
      />
      <h2 className="font-bold pb-3 text-lg">
        {recipe.name.length > 24
          ? recipe.name.slice(0, 24) + "..."
          : recipe.name}
      </h2>
      <p className="text-sm font-medium">Difficulty - {recipe.difficulty}</p>
      <p className="text-sm font-medium">Rating - {recipe.rating}</p>
    </Link>
  );
};

export default Card;
