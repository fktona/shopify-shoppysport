"use client";
import { useRef, useContext, createContext } from "react";


export const ScrollContext = createContext(null);

export default function ScrollProvider({
  children,
}) {
  const shopRef = useRef(null);
  const homeRef = useRef(null);
  const ProductRef = useRef(null);
  const contactRef = useRef(null);


  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <ScrollContext.Provider
      value={
        {
          shopRef,
          homeRef,
          ProductRef,
          contactRef,
          scrollToSection,
        } 
      }
    >
      {children}
    </ScrollContext.Provider>
  );
}
export function useScroll() {
  return useContext(ScrollContext);
}
