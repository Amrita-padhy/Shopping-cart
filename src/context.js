import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext({
  products: [],
  favorites: [],
  addFavorite: () => [],
  removeFavorite: () => [],
  userAuthState: false,
  setUserAuthState: () => Boolean,
});

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavourites] = useState([]);
  const [userAuthState, setUserAuthState] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      setUserAuthState(true);
    }
    getProduct();
  }, []);
  const getProduct = async () => {
    try {
      const itemCount = 12;
      const { data } = await axios.get(
        "https://dummyjson.com/products?limit=12"
      );
      setProducts(data.products);
    } catch (error) {}
  };
  // addFavorite
  const addFavorite = (payload) => {
    const tempArr = [...favorites, payload];
    setFavourites(tempArr);
  };
  const removeFavorite = (id) => {
    const tempArr = favorites.filter((fav) => fav.id !== id);
    setFavourites(tempArr);
  };
  return (
    <AppContext.Provider
      value={{
        favorites,
        products,
        addFavorite,
        removeFavorite,
        userAuthState,
        setUserAuthState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
