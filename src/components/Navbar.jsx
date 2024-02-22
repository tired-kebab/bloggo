import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h4" color="white">
        <NavLink to="/">Home</NavLink>
      </Typography>
      <Typography variant="h4" color="white">
        <NavLink to="/create">Create a Blog</NavLink>
      </Typography>
      <Typography variant="h4" color="white">
        <NavLink to="/about">About</NavLink>
      </Typography>
    </div>
  );
};

export default Navbar;
