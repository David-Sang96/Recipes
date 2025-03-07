/* eslint-disable react-refresh/only-export-components */

import { useLoaderData } from "react-router";
import Card from "../components/Card";
import { Recipe } from "../types/recipe";

const HomePage = () => {
  const recipes: Recipe[] = useLoaderData();

  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {recipes.length &&
        recipes.map((rec) => <Card recipe={rec} key={rec.id} />)}
    </section>
  );
};

export default HomePage;

export const homeLoader = async () => {
  const response = await fetch("https://dummyjson.com/recipes?limit=8");
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data.recipes;
};
