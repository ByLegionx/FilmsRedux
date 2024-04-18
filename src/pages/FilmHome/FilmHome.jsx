import { useEffect, useState } from "react";

import { getFilms } from "../../services/getFilms";
import { useAppContext } from "../../context/ContextProvider";
import FilmCards from "./components/FilmCards";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Pagination } from "@mui/lab";
import { Header } from "../../components/Header";

export const FilmHome = () => {
  const { allFilms, totalFilmElements, setTotalFilmElements, setAllFilms } =
    useAppContext();

  const [startIndex, setStartIndex] = useState(0);
  useEffect(() => {
    const fetch = async () => {
      const data = await getFilms();
      const { total, entries } = data;
      setAllFilms(entries);
      setTotalFilmElements(total);
    };

    fetch();
  }, []);

  return (
    <>
      <Header />
      <Box component="section" sx={{ p: 10 }}>
        <Grid container spacing={2}>
          {allFilms &&
            allFilms
              .slice(startIndex, startIndex + 6)
              .map(({ title, images, description }) => (
                <FilmCards
                  key={title}
                  img={images.posterArt.url}
                  title={title}
                  description={description}
                />
              ))}
        </Grid>
      </Box>
      {totalFilmElements && (
        <Box component="section" sx={{ p: 5 }}>
          <Grid container justifyContent="center">
            <Pagination
              count={totalFilmElements / 6}
              color="primary"
              onClick={(event) => {
                setStartIndex(
                  Math.max(
                    0,
                    allFilms.length -
                      6 * (parseInt(event.target.textContent) - 1)
                  )
                );
              }}
            />
          </Grid>
        </Box>
      )}
    </>
  );
};
