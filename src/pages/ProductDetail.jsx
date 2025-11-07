import { useEffect, useState } from "react";
import products from "../data/product";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const found = products.find((p) => p.id === parseInt(id));
      setProduct(found);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center h-[60vh]">
          <div className="text-gray-600 animate-pulse">Cargando producto...</div>
        </div>
      </>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Producto no encontrado 😢</h2>
        <Link
          to="/products"
          className="text-blue-600 hover:underline font-medium"
        >
          Volver a productos
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <img src="{product.img}" alt="{product.name}" className="rounded-lg shadow-md w-full h-[450px] object-cover"></img>
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          {product.name}
        </h2>
        <p className="text-gray-500 mb-4">{product.description}</p>
        <p className="text-2xl font-semibold text-black mb-6">
          {product.price}
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
          Agregar al carrito 🛒
        </button>
        <div className="mt-6">
          <Link to="/products" className="text-blue-600 hover:underline">
            ← Volver a productos
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail
