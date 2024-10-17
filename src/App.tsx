import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Envelopes, Home } from "./views";

import { MainLayout } from "./layouts/MainLayout";

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list-envelopes" element={<Envelopes />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
