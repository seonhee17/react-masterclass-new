import { BrowserRouter,Route,Routes, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import About from "./screens/About";
import NotFound from "./NotFound";
import Root from "./Root";

const Router = createBrowserRouter([
    {   path: "/",
        element : <Root />,
        children : [
            {
                path : "/",
                element:<Home />,
            },
            {
                path : "/about",
                element:<About />,
            },
        ],
        errorElement : <NotFound />

    },








]);

/*
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
*/

export default Router;