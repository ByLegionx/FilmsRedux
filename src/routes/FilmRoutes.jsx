import { Navigate, Route, Routes } from "react-router-dom";
import { FilmHome } from "../pages/FilmHome/FilmHome";
import { FilmLogin } from "../pages/FilmLogin/FilmLogin";
import { FilmInformation } from "../pages/FilmInformation/FilmInformation";

import { FilmProfiles } from "../pages/FilmProfiles/FilmProfiles";

export const FilmRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<FilmHome />} />
      <Route path="/login" element={<FilmLogin />} />
      <Route
        path="/info/:img/:description/:title"
        element={<FilmInformation />}
      />
      <Route path="/profile" element={<FilmProfiles />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
