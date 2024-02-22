import { Typography, Box } from "@mui/material";
import { containerStyle, navStyle } from "./constants/consts";
import "./styles/styles.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const initialPosts = JSON.parse(localStorage.getItem("posts")) || [];
  const [posts, setPosts] = useState(initialPosts);

  return (
    <Box sx={containerStyle}>
      <Box sx={navStyle}>
        <Typography variant="h1" color="white" sx={{ textAlign: "center" }}>
          Bloggo
        </Typography>
        <Navbar />
      </Box>
      <Outlet context={[posts, setPosts]} />
    </Box>
  );
}

export default App;
