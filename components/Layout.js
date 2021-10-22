import { Fragment } from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import ActiveResource from "components/ActiveResource";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <ActiveResource />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
