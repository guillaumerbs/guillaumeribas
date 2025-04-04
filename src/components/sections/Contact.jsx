import React, { useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [isLoading, setIsLoading] = useState(false);

    const validateForm = () => {
        let isValid = true;
        let errors = {};

        const nameRegex = /^(?!\s*$)[A-Za-z\s]+$/;
        if (!nameRegex.test(formData.name)) {
            errors.name = "Le nom doit contenir au moins une lettre et ne peut pas être vide.";
            isValid = false;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(formData.email)) {
            errors.email = "L'adresse e-mail n'est pas valide.";
            isValid = false;
        }

        if (formData.message.length < 20) {
            errors.message = "Le message doit contenir au moins 20 caractères.";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        emailjs
            .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
            .then(() => {
                alert('Message envoyé avec succès !');
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });
            })
            .catch(() => {
                alert('Une erreur est survenue, veuillez réessayer plus tard.');
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <section 
        id="contact" 
        aria-label='Me Contacter'
        className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
            <div className="px-4 w-70 md:w-150">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-blue-300 bg-clip-text text-transparent text-center">Me Contacter</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder="Nom..."
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>

                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder="example@gmail.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div className="relative">
                        <textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            rows={5}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder="Votre Message..."
                        />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-700 text-white py-3 px-4 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] flex justify-center items-center"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v2.5A5.5 5.5 0 004.5 12H4z"></path>
                            </svg>
                        ) : (
                            "Envoyer Message"
                        )}
                    </button>
                </form>
            </div>
            </RevealOnScroll>
        </section>
    );
};
