import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/common/header";
import RouterComp from "./router/router";
import "./styles/_resources.scss";

function App() {
  return (
    <main>
      <Router>
        <Header />
        <RouterComp />
      </Router>
    </main>
  );
}

export default App;
