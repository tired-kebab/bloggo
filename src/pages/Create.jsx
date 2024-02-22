import { TextField, Box, Typography, Button } from "@mui/material";
import { textFieldStyle } from "../constants/consts";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

const Create = () => {
  const [posts, setPosts] = useOutletContext();
  const [blogContent, setBlogContent] = useState(null);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setPosts([
      ...posts,
      { ...blogContent, createdAt: new Date().toLocaleString() },
    ]);
    setBlogContent(null);
  };

  const handleInput = (event, keyName) => {
    setBlogContent({ ...blogContent, [keyName]: event.target.value });
  };

  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Typography variant="h2" color="initial">
          What&apos;s on your mind?
        </Typography>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <TextField
            label="Title!"
            sx={textFieldStyle}
            InputProps={{
              sx: {
                borderRadius: "10px",
                fontSize: "2rem",
                fontFamily: "roboto",
              },
            }}
            value={blogContent?.title}
            onChange={(e) => handleInput(e, "title")}
          />
          <TextField
            label="Write on!"
            multiline
            minRows={10}
            sx={textFieldStyle}
            InputProps={{
              sx: {
                borderRadius: "10px",
                fontSize: "2rem",
                fontFamily: "roboto",
              },
            }}
            value={blogContent?.description}
            onChange={(e) => handleInput(e, "description")}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ fontSize: "1rem" }}
            type="submit"
          >
            Post
          </Button>
        </form>
      </Box>
    </>
  );
};

export default Create;
