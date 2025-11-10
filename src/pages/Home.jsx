import { useEffect, useState } from "react";
import opinions from "../data/opinion";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Home = () => {
    
    const [opinion, setOpinion] = useState([]);

    useEffect(() => {
        setOpinion(opinions);
    }, []);

    return (
        <div>
            <section className="bg-gray-200 py-20 text-center">
                <h1 className="text-4xl font-bold text-gray-8000 mb-4">
                    Discover your ideal fragrance 💫
                </h1>
                <p className="text-gray-600 mb-6">
                    Exclusive perfumes for every personality.
                </p>
                <button className="bg-black text-white px-6 py-3 rounded-lg hover:cursor-pointer hover:bg-gray-800 transition duration-300">
                    Buy Now
                </button>
            </section>

            <section className="py-16 px-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                    Featured Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                        <img src="./public/valentino.jpg" alt="perfume1" className="w-full h-56 object-cover rounded-md" />
                        <h3 className="text-lg font-medium mt-4">Valentino Born in Roma Intense</h3>
                        <p className="text-gray-500">$120.000</p>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                        <img src="./public/aventus.webp" alt="perfume2" className="w-full h-56 object-cover rounded-md" />
                        <h3 className="text-lg font-medium mt-4">Aventus Creed</h3>
                        <p className="text-gray-500">$90.000</p>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                        <img src="./public/erbapura.jpg" alt="perfume3" className="w-full h-56 object-cover rounded-md" />
                        <h3 className="text-lg font-medium mt-4">Erba pura xerjoff</h3>
                        <p className="text-gray-500">$110.000</p>Compré un regalo para mi pareja y le encantó. La presentación es hermosa.
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 py-16 mt-16">
                <h2 className="text-3xl font-bold mb-10">Opinions of our clients</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {opinion.map((op) => (
                        <div key={op.id} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">{op.name}</h3>
                            <p className="text-gray-600 mb-4">"{op.text}"</p>
                            <div className="text-yellow-400">
                                {'★'.repeat(op.rating)}{'☆'.repeat(5 - op.rating)}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
        
    )
}

export default Home
