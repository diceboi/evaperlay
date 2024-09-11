'use client'

import { createContext, useState } from "react";

export const CalendlyContext = createContext({
  toggleCalendly: () => {},
  openPopup: false,
});

export default function CalendlyContextProvider({ children }) {
    const [openPopup, setOpenPopup] = useState(false)

    const toggleCalendly = () => {
      setOpenPopup(prevState => !prevState);
    };
  

  return (
    <CalendlyContext.Provider value={{
        toggleCalendly,
        openPopup
    }}>
      {children}
    </CalendlyContext.Provider>
  );
}
