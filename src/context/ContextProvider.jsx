import { useContext, useState } from "react";
import { AppContext } from "./AppContext";
import PropTypes from "prop-types";

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = ({ children }) => {
  const [totalFilmElements, setTotalFilmElements] = useState(0);
  const [allFilms, setAllFilms] = useState([]);
  const data = {
    allFilms,
    setAllFilms,
    totalFilmElements,
    setTotalFilmElements,
  };
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

ContextProvider.propTypes = {
  children: PropTypes.any,
};
