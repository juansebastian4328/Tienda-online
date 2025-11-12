import { useState } from "react"

const ContactForm = () => {

    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: ""
    });

    const [enviado, setEnviado] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.nombre || !formData.email || !formData.mensaje) {
            alert("Please fill in all fields.");
            return;
        }

        console.log("Formulario enviado:", formData);
        setEnviado(true);

        setFormData({
            nombre: "",
            email: "",
            mensaje: ""
        });
    }

    return (
        <>
            <section className="bg-white py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                    <p className="text-gray-600 mb-8">If you have any questions or would like to receive offers, leave us a message below 👇</p>

                    {enviado ? (
                        <p className="text-green-600 font-semibold">Thank you for contacting us! We will get back to you soon.</p>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="bg-gray-100 p-8 rounded-lg shadow-md text-left space-y-6"
                        >
                            <div>
                                <label className="block font-medium mb-2">Name:</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label className="block font-medium mb-2">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="example@email.com"
                                />
                            </div>

                            <div>
                                <label className="block font-medium mb-2">Message:</label>
                                <textarea
                                    name="mensaje"
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    rows="4"
                                    placeholder="Write your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
                            >
                                Enviar
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </>
    )
}

export default ContactForm
