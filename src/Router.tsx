import { BrowserRouter,Route,Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import About from "./screens/About";

function Router(){
    return <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
            <Route path="/about" element={<About />}></Route>
        </Routes>
    </BrowserRouter>
}

export default Router;