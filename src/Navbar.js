import React, { useContext } from "react";
import { UserContext } from "./index";

const Navbar = (props) => {
  const value = useContext(UserContext);
  return <div>This is the navbar Received, {value}</div>;
};

export default Navbar;
