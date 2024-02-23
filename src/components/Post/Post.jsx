/* eslint-disable react/prop-types */
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useState, useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
import LongMenu from "./Menu";

const ExpandMore = styled((props) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Post({ post, isEditing, handleEdit }) {
  const [expanded, setExpanded] = useState(false);
  console.log("insiede post", isEditing);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Like

  const [isLiked, setIsLiked] = useState(() => {
    const storedValue = localStorage.getItem("isLiked");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  useEffect(() => {
    localStorage.setItem("isLiked", JSON.stringify(isLiked));
  }, [isLiked]);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const like = (
    <Typography variant="body2" color="initial" sx={{ display: "inline-flex" }}>
      1
    </Typography>
  );

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "3rem",
        padding: "2rem",
        boxShadow: "0px 10px 10px grey",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            N
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <LongMenu handleEdit={handleEdit} /> {/* Menu here */}
          </IconButton>
        }
        title={<Typography variant="h6">{post.title}</Typography>}
        subheader={post?.createdAt?.toString()}
      />
      {/* <CardContent>
        <Typography variant="body1" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent> */}
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleLike}>
          <Tooltip title={isLiked ? "Unlike" : "Like"}>
            <FavoriteIcon sx={{ color: isLiked ? "red" : null }} />
            {isLiked ? like : null}
          </Tooltip>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography color="initial">{post.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
