import { useEffect, useState } from "react"
import products from "../data/product";
import { Link } from "react-router-dom";

const Products = () => {

    const [productsF, setProductsF] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setProductsF(products);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const filteredProducts = productsF.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="max-w-6xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold text-center mb-10">Our Perfumes</h1>

            <div className="flex justify-center mb-8">
                <input
                    type="text"
                    placeholder="Search perfume..."
                    className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition"
                        >
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-full h-64 object-cover rounded-md mb-4"
                            />
                            <h2 className="text-xl font-semibold">{product.name}</h2>
                            <p className="text-gray-500">{product.price}</p>

                            <Link
                                to={`/products/${product.id}`}
                                className="mt-4 inline-block bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition"
                            >
                                Ver Detalle
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-10">
                    No perfumes with that name were found.😢
                </p>
            )}
        </div>
    );
}

export default Products
