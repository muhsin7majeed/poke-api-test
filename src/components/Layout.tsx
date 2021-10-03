import React from "react";
import { useSelector } from "react-redux";

import { ConfigState, RootState } from "types/redux";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: React.FC = ({ children }) => {
  const { darkMode } = useSelector<RootState, ConfigState>((state) => state.config);

  return (
    <div className={darkMode ? "dark-theme" : ""} style={{ minHeight: "100vh" }}>
      <Navbar darkMode={darkMode} />

      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
