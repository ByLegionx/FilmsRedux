import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function FilmCards({ img, title, description }) {
  const { status } = useSelector((state) => state.film);
  return (
    <Grid item xs={4}>
      <Card sx={{ width: "100%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            component={Link}
            to={`/info/${encodeURIComponent(img)}/
              ${description}
            )/${title}`}
          >
            More Info
          </Button>
          {status === "logged" && <Button size="small">Watch movie</Button>}
        </CardActions>
      </Card>
    </Grid>
  );
}

FilmCards.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
