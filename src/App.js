import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import BMICalculatorPage from "../src/pages/BMICalculatorPage.jsx";
import DietPlanPage from "../src/pages/DietPlanPage";
import Layout from "./layout/Layout.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" component={BMICalculatorPage} />
            <Route path="/diet" component={DietPlanPage} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
