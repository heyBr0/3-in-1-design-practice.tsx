import Home from "./components/Home";
import Case1 from "./components/Case1";
import Case2 from "./components/Case2";
import Case3 from "./components/Case3";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/case1" element={<Case1 />}></Route>
          <Route path="/case2" element={<Case2 />}></Route>
          <Route path="/case3" element={<Case3 />}></Route>
          <Route index path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
