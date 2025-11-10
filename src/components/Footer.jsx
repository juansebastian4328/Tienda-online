
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-xl font-bold text-white mb-3">Perfumería Essence</h2>
                    <p className="text-sm">
                        Original, elegant, and long-lasting perfumes.

                        Discover your perfect scent with us.
                    </p>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-3">Links</h3>
                    <ul className="space-y-2">
                        <li><a href="/" className="hover:text-white">Start</a></li>
                        <li><a href="/products" className="hover:text-white">Products</a></li>
                        <li><a href="/cart" className="hover:text-white">Cart</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-3">follow us</h3>
                    <div className="flex space-x-4 text-2xl">
                        <a href="#" className="hover:text-blue-500">🌐</a>
                        <a href="#" className="hover:text-pink-500">📸</a>
                        <a href="#" className="hover:text-blue-400">🐦</a>
                    </div>
                </div>
            </div>

            <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
                © {new Date().getFullYear()} Perfumería Essence — All rights reserved.
            </div>
        </footer>
    );
}

export default Footer
