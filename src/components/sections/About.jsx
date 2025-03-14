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
        aria-label="À propos de moi"
        className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-3xl mx-auto px-3">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center"> 
                À propos
                </h2>

                <div className="rounded-xl p-4 border-white/10 border hover:-translate-y-1 transition-all">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="flex flex-col gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-2xl font-bold mb-4 text-center md:text-left">Soft Skills</h3>
                                <ul className="flex flex-wrap gap-2 justify-center md:justify-start list-none p-0 m-0">
                                    {softSkills.map((skill, key) => (
                                        <li key={key}>
                                            <span className="bg-blue-500/10 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_6px_rgba(59,130,246,0.2)] transition">
                                                {skill}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4 text-center md:text-left">Frontend</h3>
                                <ul className="flex flex-wrap gap-2 justify-center md:justify-start list-none p-0 m-0">
                                    {frontendSkills.map((tech, key) => (
                                        <li key={key}>
                                            <span className="bg-blue-500/10 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_6px_rgba(59,130,246,0.2)] transition">
                                                {tech}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className="hidden md:flex justify-center p-4 hover:-translate-y-1 transition-all">
                                <div className="w-36 h-46 rounded-md overflow-hidden border-3 border-blue-500/20">
                                    <img src="/profil.webp" alt="Guillaume Ribas" className="w-full h-full object-cover" width="144" height="184" loading="lazy" />
                                </div>
                            </div>
                            
                            <div className="rounded-xl p-4 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4 text-center md:text-left">Backend</h3>
                                <ul className="flex flex-wrap gap-2 justify-center md:justify-start list-none p-0 m-0">
                                    {backendSkills.map((tech, key) => (
                                        <li key={key}>
                                            <span className="bg-blue-500/10 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_6px_rgba(59,130,246,0.2)] transition">
                                                {tech}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 flex items-center justify-center md:justify-start">
                            <IoSchoolSharp className="inline-block mr-2" aria-hidden="true" />
                            <span>Formation</span>
                        </h3>
                        <div className="text-gray-300 text-center md:text-left">
                            <h4 className="font-semibold mb-2">Titre Professionnel Développeur Web et Web Mobile</h4>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Spécialisation <strong>Full Stack</strong> PHP/Symfony.</li>
                                <li><strong>Projet de fin de formation</strong> : De la conception à la mise en ligne d'un site de réservation de voyage.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 flex items-center justify-center md:justify-start">
                            <MdWork className="inline-block mr-2" aria-hidden="true" />
                            <span>Expérience</span>
                        </h3>
                        <div className="text-gray-300 text-center md:text-left">
                            <h4 className="font-semibold mb-2">Développeur Mobile/Web - Yuli</h4>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Conception et développement d'une application mobile de suivi animalier.</li>
                                <li>Refonte du site web afin d'en améliorer l'expérience utilisateur.</li>
                            </ul>
                        </div>
                    </div>            
                </div>
            </div>
        </section>
    );
};
