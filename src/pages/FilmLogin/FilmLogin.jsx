import { useState } from "react";

import { Header } from "../../components/Header";
import { Alert } from "@mui/lab";
import { SignIn } from "./components/SignIn";

export const FilmLogin = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <Header />
      {showAlert && (
        <Alert severity="warning">
          Usuario o contraseña incorrectos. Revise los datos antes de continuar
        </Alert>
      )}

      <SignIn setShowAlert={setShowAlert} />
    </>
  );
};
