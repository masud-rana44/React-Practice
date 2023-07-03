import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import Services from "./components/Services";
import About from "./components/About";
import Post from "./components/Posts";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/*" element={<Services />}>
          <Route path="masud" element={<div>Masud Rana</div>} />
        </Route>
        <Route path="/post/:postId" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
