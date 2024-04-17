import { Navigate, Route, Routes } from "react-router-dom";
import { FilmHome } from "../pages/FilmHome/FilmHome";
import { FilmLogin } from "../pages/FilmLogin/FilmLogin";
import { FilmInfo } from "../pages/FilmInfo/FilmInfo";

export const FilmRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<FilmHome />} />
      <Route path="/login" element={<FilmLogin />} />
      <Route path="/info" element={<FilmInfo />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
