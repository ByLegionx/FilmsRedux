import { useEffect } from "react";
import Header from "./components/Header";
import { getFilms } from "../../services/getFilms";
import { useAppContext } from "../../context/ContextProvider";

export const FilmHome = () => {
  const { allFilms, totalFilmElements, setTotalFilmElements, setAllFilms } =
    useAppContext();

  useEffect(() => {
    const fetch = async () => {
      const data = await getFilms();
      const { total, entries } = data;
      setAllFilms(entries);
      setTotalFilmElements(total);
    };

    fetch();
  }, []);

  useEffect(() => {
    console.log(allFilms);
    console.log(totalFilmElements);
  }, [allFilms, totalFilmElements]);

  return <Header />;
};
