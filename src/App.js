import "./index.css";
import Routes from "./routes.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
