'use client'

import { createContext, useState } from "react";

export const MobileMenuContext = createContext({
  toggleMobileMenu: () => {},
  mobileMenuOpen: false,
});

export default function MobileMenuContextProvider({ children }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };
  

  return (
    <MobileMenuContext.Provider value={{
        toggleMobileMenu,
        mobileMenuOpen
    }}>
      {children}
    </MobileMenuContext.Provider>
  );
}
