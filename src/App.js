import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/404";
import Day2 from "./pages/Day-2";
import Day3 from "./pages/Day-3";
import Day4 from "./pages/Day-4";
import Test from "./pages/Test";
// import About from "./pages/About";
// import AboutDetail from "./pages/About/Detail";
// import Post from "./pages/Post";
// import PostId from "./pages/Post/[id]";
// import CreatePost from "./pages/Post/Create";
// import EditPost from "./pages/Post/Edit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/day-2" element={<Day2 />} />
      <Route path="/day-3" element={<Day3 />} />
      <Route path="/day-4" element={<Day4 />} />
      <Route path="/test" element={<Test />} />
      {/* <Route path="/about" element={<About />}>
        <Route path="detail" element={<AboutDetail />} />
      </Route>
      <Route path="/post" element={<Post />} />
      <Route path="/post/:id" element={<PostId />} />
      <Route path="/post/create" element={<CreatePost />} />
      <Route path="/post/edit/:id" element={<EditPost />} /> */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
