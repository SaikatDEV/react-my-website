import React from "react";

// Material UI
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { DeleteOutline } from "@mui/icons-material";
import { Typography } from "@mui/material";

export default function MaterialSkillCard({ title, details, thumbnail }) {
  return (
    <div>
      {/*<p className="text-sm">{title}</p>*/}
      <Card elevation={3}>
        <CardHeader
          action={
            <IconButton>
              <DeleteOutline />
            </IconButton>
          }
          title={title}
          subheader="September 14, 2016"
        />
        <CardContent className="flex justify-between flex-grow-1">
          <Typography variant="body2" color="textSecondary">
            {details}
          </Typography>
          <img className="h-20" src={thumbnail} alt="Thumbnail" />
        </CardContent>
      </Card>
    </div>
  );
}
