"use client";
import { useContext, useState, createContext } from "react";

const menuContext = createContext(null);

const MenuProvider = ({children}) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu((prev) => !prev);
    console.log(openMenu);
  };
  return (
    <menuContext.Provider value={{ openMenu, handleOpenMenu }}>
      {children}
    </menuContext.Provider>
  );
};
export default MenuProvider;
export const useMenu = () => useContext(menuContext);
