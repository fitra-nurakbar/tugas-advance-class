import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import PropTypes from "prop-types";

export default function RecipeReviewCard(props) {
  const { title, datePost, img, description } = props;
  const initials = title.split(" ").map((word) => word.charAt(0).toUpperCase()).join("")

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {initials}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={datePost}
      />
      <CardMedia component="img" height="194" image={img} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

RecipeReviewCard.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  datePost: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  img: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
