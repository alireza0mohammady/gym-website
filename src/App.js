import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";

function App() {
  return (
    <section className="">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="" element={<Home/>}/>
        </Route>
      </Routes>
    </section>
  );
}

export default App;
