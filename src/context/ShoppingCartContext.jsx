import React, { createContext, ReactNode, useContext, useState } from "react";
import CartItem from "../components/CartItem";

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

function ShoppingCartContext() {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  )
  return <div></div>;
}

export default ShoppingCartContext;
