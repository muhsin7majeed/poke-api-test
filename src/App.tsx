import axios from "axios";
import { useDispatch } from "react-redux";
import { Suspense, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { baseUrl, localStorageKeys } from "helpers/constants";
import SplashScreen from "components/SplashScreen";
import Layout from "components/Layout";
import { toggleDarkMode } from "redux/config/actions";
import { getLocalStorageItem } from "helpers/utils";

import "./App.scss";
import Routes from "./Routes";

function App() {
  axios.defaults.baseURL = baseUrl;
  const dispatch = useDispatch();

  const isDarkMode = getLocalStorageItem(localStorageKeys.DARK_MODE);

  useEffect(() => {
    dispatch(toggleDarkMode(isDarkMode === "true"));
  }, [dispatch, isDarkMode]);

  return (
    <>
      <Suspense fallback={<SplashScreen />}>
        <BrowserRouter>
          <Layout>
            <Routes />
          </Layout>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
