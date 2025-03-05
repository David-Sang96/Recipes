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
  const response = await fetch("https://dummyjson.com/recipes");
  if (!response.ok) {
    throw new Error("Failed to retrieve data");
  }

  const data = await response.json();
  return data.recipes;
};
