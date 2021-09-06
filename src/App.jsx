import React, {useEffect, useState} from 'react';
import {Label} from '@fluentui/react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {darkTheme, lightTheme} from './themes';
import './App.css';
import {ThemeProvider as ReactThemeProvider} from '@fluentui/react-theme-provider';
import {initializeIcons} from '@fluentui/font-icons-mdl2';
import TopBar from "./components/TopBar/TopBar";
import SideNav from "./components/SideNav/SideNav";
import HomePage from "./views/HomePage/HomePage";


export const App = () => {
  initializeIcons();

  const [theme, setTheme] = useState(lightTheme);

  const [darkModeIndicator, setDarkModeIndicator] = useState(false);
  const [menuOpenIndicator, setMenuOpenIndicator] = useState(false);

  let onChangeTopBar = (key, value) => {
    if(key === 'DarkMode') {
      setDarkModeIndicator(value);
    } else if(key === 'OpenMenu') {
      setMenuOpenIndicator(value);
    }
  }

  useEffect(() => {
    console.log('darkModeIndicator changed to: ', darkModeIndicator);
    setTheme(darkModeIndicator ? darkTheme : lightTheme)
  }, [darkModeIndicator]);

  let onChangeSideNav = (key, value) => {
    if(key === 'SideNavOpenMenu') {
      setMenuOpenIndicator(value);
    }
  }

  return (
      <Router>
        <div>
            <ReactThemeProvider applyTo="body" theme={theme}>
              <TopBar theme={theme} onChange={onChangeTopBar}/>
              <SideNav theme={theme} opened={menuOpenIndicator} onChange={onChangeSideNav} />

              <Switch>
                <Route exact path="/">
                  <HomePage theme={theme}/>
                </Route>
                <Route path="/about">
                  <Label>About</Label>
                </Route>
                <Route path="/dashboard">
                  <Label>Dashboard</Label>
                </Route>
              </Switch>

            </ReactThemeProvider>
        </div>
      </Router>
  )

}
