import { createContext, useState } from "react";
import { recetas } from "../assets/recetas";

export const RecipeListContext = createContext({ recipes: recetas });
export const RecipeListProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(recetas);
  return (
    <RecipeListContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipeListContext.Provider>
  );
};
