import React, { Component, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
// import './scss/style.scss'
import "bootstrap/dist/css/bootstrap.min.css";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Pages
const Register = React.lazy(() => import("./pages/Register"));
const Result = React.lazy(() => import("./pages/Result"));
const Form = React.lazy(() => import("./pages/Form"));
const Home = React.lazy(() => import("./pages/Home"));

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/" name="Home Page" element={<Home />} />
            <Route
              exact
              path="/register"
              name="Form Page"
              element={<Register />}
            />
            <Route
              exact
              path="/result/:result"
              name="Result Page"
              element={<Result />}
            />
            <Route exact path="/list" name="Form Page" element={<Form />} />
          </Routes>
        </Suspense>
      </HashRouter>
    );
  }
}

export default App;
