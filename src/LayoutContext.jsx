import React, { createContext, useContext, useState, useEffect } from "react";

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [useHeader1, setUseHeader1] = useState(
    () => JSON.parse(localStorage.getItem("useHeader1")) ?? true
  );
  const [useFooter1, setUseFooter1] = useState(
    () => JSON.parse(localStorage.getItem("useFooter1")) ?? true
  );
  const [useHomepage1, setUseHomepage1] = useState(
    () => JSON.parse(localStorage.getItem("useHomepage1")) ?? true
  );

  useEffect(() => {
    localStorage.setItem("useHeader1", JSON.stringify(useHeader1));
  }, [useHeader1]);

  useEffect(() => {
    localStorage.setItem("useFooter1", JSON.stringify(useFooter1));
  }, [useFooter1]);

  useEffect(() => {
    localStorage.setItem("useHomepage1", JSON.stringify(useHomepage1));
  }, [useHomepage1]);

  return (
    <LayoutContext.Provider
      value={{
        useHeader1,
        setUseHeader1,
        useFooter1,
        setUseFooter1,
        useHomepage1,
        setUseHomepage1,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => useContext(LayoutContext);
