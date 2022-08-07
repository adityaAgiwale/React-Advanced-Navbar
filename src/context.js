import React, { useContext, useState } from "react";
import { subData } from "./data";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSiderbarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ pageName: "", links: [] });

  const sidebarOpen = (text, coordinates) => {
    const page = subData.find((item) => item.pageName === text);
    setPage(page);
    setLocation(coordinates);
    setIsSiderbarOpen(true);
  };
  const sidebarClose = () => {
    setIsSiderbarOpen(false);
  };

  const mobileMenuOpen = () => {
    setIsMobileMenuOpen(true);
  };
  const mobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        location,
        page,
        isSidebarOpen,
        isMobileMenuOpen,
        sidebarOpen,
        sidebarClose,
        mobileMenuOpen,
        mobileMenuClose
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
