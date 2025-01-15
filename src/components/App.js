import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Diplomas from "./Categories";
import Diploma from "./Category";
import Header from "./Header";
import Register from "./Register";
import Session from "./Session";
import Confirmation from "./Confirmation";
import FAQPage from "./Faq";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home title="Home" />} />
        <Route path="diplomas" element={<Diplomas />}>
          <Route path=":catId" element={<Diploma />}>
            <Route path=":sessionId" element={<Session />}/>
          </Route>

        </Route>
        <Route path="register" element={<Register />} />
        <Route path="confirmed" element={<Confirmation />} />
        <Route path="faq" element={<FAQPage />} />
        <Route
          path="*"
          element={<h1 className="not-found">Page Not Found</h1>}
        />
      </Routes>

      <footer className="container">
        &copy;2024 | <a href="https://www.rp.edu.sg/schools-courses/">Republic Polytechnic</a>
      </footer>
    </div>
  );
}

export default App;
