/* eslint-disable react/prop-types */
import Post from "../components/Post/Post";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { Button, TextField, Box } from "@mui/material";

const Home = () => {
  const [posts] = useOutletContext();
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
    console.log(isEditing);
  };

  // const handleEditInput = (event) => {
  //   setBlogContent(event.target.value);
  // };

  return (
    <div>
      {posts?.map((post, index) => (
        <Post
          key={index}
          post={post}
          isEditing={isEditing}
          handleEdit={handleEdit}
        />
      ))}
      {isEditing && (
        <Box
          sx={{
            margin: 6,
            display: "flex",
            gap: 2,
          }}
        >
          <TextField
            multiline
            minRows={4}
            label="Edit your post"
            // value={blogContent}
            // onChange={handleEditInput}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ alignSelf: "flex-end" }}
          >
            Save
          </Button>
        </Box>
      )}
    </div>
  );
};

export default Home;
