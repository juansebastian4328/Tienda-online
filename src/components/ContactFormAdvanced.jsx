import { useForm } from "react-hook-form";

const ContactFormAdvanced = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Formulario enviado:", data);
        reset();
    }

    return (
        <section className="bg-white py-16">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                <p className="text-gray-600 mb-8">If you have any questions or would like to receive offers, leave us a message below 👇</p>

                {isSubmitSuccessful ? (
                    <p className="text-green-600 font-semibold">✅ Thank you for contacting us! We will get back to you soon.</p>
                ) : (
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="bg-gray-100 p-8 rounded-lg shadow-md text-left space-y-6"
                    >
                        <div>
                            <label className="block font-medium mb-2">Name</label>
                            <input type="text"
                                {...register("name", {
                                    required: "Name is required",
                                    minLength: {
                                        value: 3,
                                        message: "Debe tener al menos 3 caracteres",
                                    },
                                })}
                                className={`w-full p-3 border rounded focus:outline-none focus:ring-2 ${errors.name
                                        ? "border-red-500 focus:ring-red-400"
                                        : "focus:ring-blue-400"
                                    }`}
                                placeholder="Your fullname"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        </div>

                        <div>
                            <label className="block font-medium mb-2">Email</label>
                            <input 
                            type="email" 
                            {...register("email",{
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Invalid email address",
                                },
                            })}
                            className={`w-full p-3 border rounded focus:outline-none focus:ring-2
                                 ${errors.email ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"}`}
                            placeholder="example@email.com"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>

                        <div>
                            <label className="block font-medium mb-2">Message</label>
                            <textarea 
                            {...register("message", {
                                required: "Message is required",
                                minLength: {
                                    value: 10,
                                    message: "It must have at least 10 characters",
                                },
                            })}
                            className={`w-full p-3 border rounded focus:outline-none focus:ring-2
                                 ${errors.message ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"}`}
                            rows="4"
                            placeholder="Your message"
                            />
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
                        >
                            Send
                        </button>
                    </form>
                )}
            </div>
        </section>
    )
}

export default ContactFormAdvanced
