import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  let [favIds, setFavIds] = useState([]);

  function addNewFavorite(id) {
    setFavIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorite(id) {
    setFavIds((currentFavIds) => currentFavIds.filter((favId) => favId != id));
  }

  let value = {
    ids: favIds,
    addFavorite: addNewFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
