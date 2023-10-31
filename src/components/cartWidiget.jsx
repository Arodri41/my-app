import React from "react";
import { createContext, useContext } from "react";

const ShoppingCartContext = createContext({})

export function ShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function Carrito({ children }) {
  return 
  <>
  <ShoppingCartContext.Provider value={{}}>
    {children}
  </ShoppingCartContext.Provider>
  </>
}