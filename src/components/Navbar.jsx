import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-400">Essence💎</h1>

                <div className="flex space-x-6">
                    <Link to="/" className="hover:text-blue-400 transition-colors duration-300">
                        Home
                    </Link>
                    <Link to="/products" className="hover:text-blue-400 transition-colors duration-300">
                        Products
                    </Link>
                    <Link to="/cart" className="hover:text-blue-400 transition-colors duration-300">
                        Cart 🛒
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar
