import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import MovieReviews from '../movieReviews'
import MovieList from "../movieList";
import SimilarSeriesList from "../similarSeriesList";

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
  fab: { 
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const SeriesDetails = ( {series,similarSeries,action}) => {
  const [drawerOpen, setDrawerOpen] = useState(false); // New
  console.log(series,"in series page ")
  console.log(similarSeries,"in series similar page ")
  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {series.overview}
      </Typography>

      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Genres" sx={styles.chipLabel} color="primary" />
        </li>
        {series.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name}  />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={styles.chipSet}>
        {/* <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
        /> */}
        <Chip label={`Released: ${series.first_air_date
}`} />
      </Paper>
      <Paper component="ul" sx={styles.chipSet}>
      <Typography variant="h5" component="h3">
          Similar series
      </Typography>
      </Paper>
      <br />
      <Grid item container spacing={5}>
      <SimilarSeriesList series ={similarSeries.results} action={action} ></SimilarSeriesList> 
      </Grid>
   
     
    </>
  );
};
export default  SeriesDetails ;
