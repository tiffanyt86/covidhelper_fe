import React from "react";

import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Nav />
        {children}
        <p></p>
      </div>
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
};

export default Layout;
