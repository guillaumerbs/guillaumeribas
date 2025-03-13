import { IoSchoolSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";


export const About = () => {
    const softSkills = [
        "Communication",
        "Esprit d'équipe",
        "Autonomie",
        "Gestion du temps",
        "Créativité",
        "Résolution de problèmes"
    ];

    const frontendSkills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Bootstrap",
        "Twig",
    ];

    const backendSkills = [
        "PHP",
        "Symfony",
        "Laravel",
        "Node.js",
        "MySQL",
    ];

    return (
        <section 
        id="about" 
        className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-3xl mx-auto px-3">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> 
                &#192; propos
                </h2>

                <div className="rounded-xl p-4 border-white/10 border hover:-translate-y-1 transition-all">
                    <div className="block md:hidden flex justify-center p-4 hover:-translate-y-1 transition-all mb-4">
                        <div className="w-36 h-46 rounded-md overflow-hidden border-3 border-blue-500/20">
                            <img src="/profil.png" alt="Guillaume Ribas" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="flex flex-col gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-2xl font-bold mb-4 text-center md:text-left">Soft Skills</h3>
                                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                    {softSkills.map((skill, key) => (
                                        <span key={key} className="bg-blue-500/10 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_6px_rgba(59, 130, 2246, 0.2)] transition">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4 text-center md:text-left">Frontend</h3>
                                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                    {frontendSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_6px_rgba(59, 130, 2246, 0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className="hidden md:flex justify-center p-4 hover:-translate-y-1 transition-all">
                                <div className="w-36 h-46 rounded-md overflow-hidden border-3 border-blue-500/20">
                                    <img src="/profil.png" alt="Guillaume Ribas" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4 text-center md:text-left">Backend</h3>
                                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                    {backendSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_6px_rgba(59, 130, 2246, 0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 flex items-center justify-center md:justify-start">
                            <IoSchoolSharp className="inline-block mr-2" />
                            <span>Formation</span>
                        </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 text-center md:text-left">
                            <li className="mb-2">
                                <strong>Titre Professionnel Développeur Web et Web Mobile</strong> - &#201;cole O'Clock
                                (2023-2024)
                            </li>
                            <li>
                                Spécialisation <strong>Full Stack</strong> PHP/Symfony.
                            </li>
                            <li>
                                <strong>Projet de fin de formation</strong> : De la conception à la mise en ligne d'un site de réservation de voyage.
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 flex items-center justify-center md:justify-start">
                            <MdWork className="inline-block mr-2" />
                            <span>Expérience</span>
                        </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 text-center md:text-left">
                            <li className="mb-2">
                                <strong>Développeur Mobile/Web</strong> - Yuli<br/>
                                (2024-2025)
                            </li>
                            <li>
                                Conception et développement d'une application mobile de suivi animalier.
                            </li>
                            <li>
                                Refonte du site web afin d'en améliorer l'éxpérience utilisateur.
                            </li>
                        </ul>
                    </div>            
                </div>
            </div>
        </section>
    );
};