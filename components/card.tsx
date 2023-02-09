import * as React from "react";
import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";

interface Props {
  id: string;
  title: string;
  description: string;
  trick_img_alt: string;
}
const TrickCard: React.FC<Props> = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link href={`/trick/${props.id}`}>
        <CardActionArea onClick={() => {}}>
          <CardMedia
            component="img"
            height="140"
            image={`/images/${props.trick_img_alt}.jpg`}
            alt={props.trick_img_alt}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "#000" }}
            >
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default TrickCard;
