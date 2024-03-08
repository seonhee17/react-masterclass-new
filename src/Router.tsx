import { BrowserRouter,Route,Routes, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import About from "./screens/About";
import NotFound from "./NotFound";
import Root from "./Root";
import User from "./screens/users/User";
import Followers from "./screens/users/Followers";

const Router = createBrowserRouter([
    {   path: "/",
        element : <Root />,
        children : [
            {
                path : "",
                element:<Home />,
            },
            {
                path : "about",
                element:<About />,
            },
            {
                path : "users/:userId",
                element:<User />,
                children : [
                    {
                        path : "followers",
                        element : <Followers />,
                    },
                ],
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