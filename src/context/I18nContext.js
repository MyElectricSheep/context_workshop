import { createContext } from 'react'

export const i18n = {
  en: {
    home: {
        title: "Home Page"
    },
    welcome: {
        main: "Welcome",
        daily: "served daily"
    },
    logout: {
        button: "Logout"
    },
    admin: {
        title: "Admin Page",
        content: "Lots of important secret stuff"
    },
    about: {
        title: "About Page"
    },
    signin: {
        title: 'Sign in',
        login: "Login",
        password: "Password",
        signup: "Not yet registered? Signup!"
    },
    signup: {
        title: 'Sign up',
        email: "Email",
        password: "Password",
        register: "Register",
        signin: "Already registered? Signin!"
    }
  },
  de: {
    home: {
        title: "Startseite"
    },
    welcome: {
        main: "Herzlich willkommen",
        daily: "täglich serviert"
    },
    logout: {
        button: "Ausloggen"
    },
    admin: {
        title: "Admin Seite",
        content: "Viele wichtige geheime Daten"
    },
    about: {
        title: "Über Seite"
    },
    signin: {
        title: 'Einloggen',
        login: "Anmeldung",
        password: "Passwort",
        signup: "Noch nicht registriert? Anmelden!"
    },
    signup: {
        title: 'Anmelden',
        email: "Email",
        password: "Passwort",
        register: "Registrieren",
        signin: "Bereits registriert? Einloggen!"
    }
  }
}

export default createContext({ t: i18n['en'], setI18nData: () => {} })
