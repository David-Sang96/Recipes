import { LoaderFunctionArgs, useLoaderData } from "react-router";
import { Recipe } from "../types/recipe";

const Recipepage = () => {
  const recipe: Recipe = useLoaderData();
  return (
    <div className="grid grid-cols-2 gap-4">
      <img
        src={recipe?.image}
        alt={recipe?.name}
        className="object-cover size-full rounded-md"
      />
      <div className="space-y-3 py-3">
        <div>
          <h2 className="text-3xl font-bold pb-2">{recipe.name}</h2>
          <p className="text-sm font-medium">
            Difficulty - {recipe.difficulty}
          </p>
          <p className="text-sm font-medium">Rating - {recipe.rating}</p>
        </div>
        <div>
          <h3 className="font-medium pb-2">Ingredients</h3>
          <ol className="list-decimal ps-6">
            {recipe.ingredients.map((ing, idx) => (
              <li key={idx}>{ing}</li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="font-medium pb-2">Instructions</h3>
          <ol className="list-decimal ps-6">
            {recipe.instructions.map((ins, idx) => (
              <li key={idx}>{ins}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Recipepage;

// eslint-disable-next-line react-refresh/only-export-components
export const recipeLoader = async ({ params }: LoaderFunctionArgs) => {
  const id = params.id;
  const response = await fetch(`https://dummyjson.com/recipes/${id}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Response("", {
      status: response.status,
      statusText: data.message,
    });
  }

  return data;
};
