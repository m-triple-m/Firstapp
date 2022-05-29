import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ initCart, children }) => {
  const [cart, setCart] = useState(initCart);

  const addToCart = (item) => {
    setCart([...cart, item]);
    sessionStorage.setItem("cart", JSON.stringify([...cart, item]));
  };

  // value prop is for providing values through context
  return (
    <UserContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </UserContext.Provider>
  );
};
