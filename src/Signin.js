import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import I18nContext from "./context/I18nContext";
import { useAuth } from "./context/AuthContext";
import Cookies from "js-cookie"

const Signin = () => {
  const { t } = useContext(I18nContext);
  const { setAuthToken } = useAuth();

  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) => {
    setError(false)
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = () => {
    const { login, password } = formData;
    axios
      .post("https://pokefight-wbs.herokuapp.com/auth/login", {
        email: login,
        password,
      })
      .then((res) => {
        if (res.status === 200) {
          const token = res.headers["x-auth-token"];
          Cookies.set("PapayApp", token);
          setAuthToken(token);
          setLoggedIn(true);
        } else {
          setError(true);
        }
      })
      .catch((e) => {
          console.log(e)
        setError(true);
      });
  };

  if (loggedIn) return <Redirect to="/"/>

  return (
    <>
      <input
        type="text"
        name="login"
        value={formData.login}
        onChange={handleChange}
        placeholder={t.signin.login}
      />
      <input
        type="text"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder={t.signin.password}
      />
      <button onClick={() => login()}>{t.signin.login}</button>
      <br />
      <Link to="/signup">{t.signin.signup}</Link>
      { error &&<p style={{color: 'red', fontWeight: 'bold'}}>Incorrect login or password!</p> }
    </>
  );
};

export default Signin;
