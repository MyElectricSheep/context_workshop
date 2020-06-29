import React, { useState } from "react";
import Home from "./Home"
import About from "./About"
import Admin from "./Admin"
import Signin from "./Signin"
import Signup from "./Signup"
import Logout from "./Logout"
import { Link, Route, Switch } from "react-router-dom";
import CompanyContext from "./context/CompanyContext"
import I18nContext, { i18n } from './context/I18nContext'
import { AuthContext } from "./context/AuthContext"
import LanguageSwitcher from "./LanguageSwitcher";
import ProtectedRoute from './ProtectedRoute'
import Cookies from "js-cookie";

const App = () => {

  const [companyData, setCompanyData] = useState({name: "PapayApp", customers: 500000 })

  const userToken = Cookies.get('PapayApp');
  const [authToken, setAuthToken] = useState(userToken);
  const [i18nData, setI18nData] = useState(i18n['en'])

  return (
    <div>
      <ul>
        <li>
          <Link to="/">{i18nData.home.title}</Link>
        </li>
        <li>
          <Link to="/about">{i18nData.about.title}</Link>
        </li>
        <li>
          <Link to="/admin">{i18nData.admin.title}</Link>
        </li>
        <li>
          <Link to="/signin">{i18nData.signin.title}</Link>
        </li>
        <li>
          <Link to="/signup">{i18nData.signup.title}</Link>
        </li>
      </ul>
      <Switch>
      <CompanyContext.Provider value={{companyData, setCompanyData}} >
        <I18nContext.Provider value={{t: i18nData, setI18nData}}>
          <AuthContext.Provider value={{authToken, setAuthToken}}>
            <Route path="/about" component={About} />
            <ProtectedRoute path="/admin" component={Admin} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/" component={Home} />
            <Route path="*" component={LanguageSwitcher}/>
            {authToken && <Route path="*" component={Logout}/>}
          </AuthContext.Provider>
        </I18nContext.Provider>
      </CompanyContext.Provider>
      </Switch>
      
    </div>
  );
};


export default App;
