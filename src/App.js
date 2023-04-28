import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tabs from "./components/tabs";
import Posts from "./components/posts";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Tabs />} />
        <Route exact path="/posts" element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default App;
