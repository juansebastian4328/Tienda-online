import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Navbar />
                <div className="p-6">
                    <Home />
                </div>
            </>
        ),
    },
    {
        path: "/products",
        element: (
            <>
                <Navbar />
                <div className="p-6">
                    <Products />
                </div>
            </>
        ),
    },
    {
        path: "/products/:id",
        element: (
            <>
                <Navbar />
                <div className="p-6">
                    <ProductDetail />
                </div>
            </>
        ),
    },
    {
        path: "/cart",
        element: (
            <>
                <Navbar />
                <div className="p-6">
                    <Cart />
                </div>
            </>
        )
    }
])

export default router;