import React, { useContext } from "react";
import Cookies from "js-cookie";
import I18nContext from "./context/I18nContext";
import { useAuth } from "./context/AuthContext";

const Logout = () => {
  const { setAuthToken } = useAuth();
  const { t } = useContext(I18nContext);
  return (
    <>
      <br />
      <button
        style={{ marginTop: "2em" }}
        onClick={() => {
          setAuthToken(null);
          Cookies.remove("PapayApp");
        }}
      >
        {t.logout.button}
      </button>
    </>
  );
};

export default Logout;
