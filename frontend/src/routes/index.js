import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home.js"
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword.js";
import  Signup from "../pages/Signup.js";
import AdminPanel from "../pages/AdminPanel.js";
import AllUsers from "../pages/AllUsers.js";
import AllProducts from "../pages/AllProducts";
import CategoryProduct from "../pages/CategoryProduct";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import SearchProduct from '../pages/SearchProduct'
const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path: "",
                element: <Home />
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"forgot-password",
                element:<ForgotPassword/>
            },
            {
                path:"sign-up",
                element:< Signup/>
            },
            {
                path:"product-category",
                element: <CategoryProduct/>
            },
            {
                path : "product/:id",
                element : <ProductDetails/>
            },
            {
                path : 'cart',
                element : <Cart/>
            },
            {
                path : "search",
                element : <SearchProduct/>
            },
            {
                path:"admin-panel",
                element:<AdminPanel/>,
                children:[
                    {
                        path:"all-users",
                        element:<AllUsers/>
                    },
                    {
                        path:"all-products",
                        element:<AllProducts/>
                    }
                ]
            },
        ]

    }
])
export default router