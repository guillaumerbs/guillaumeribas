import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

export const Home = () => {
    return (
        <section 
            id="home" 
            aria-label="Accueil"
            className="min-h-screen flex items-center justify-center relative"
        >
            <div className="text-center z-10 px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent leading-right">
                    Hello, Je suis Guillaume Ribas
                </h1>
                <p className="text-gray text-lg mb-8 max-w-lg mx-auto">
                    Développeur Full Stack, je conçois des applications performantes et intuitives. Toujours en quête d'optimisation et d'innovation, j'accorde une attention particulière à l'expérience utilisateur et aux bonnes pratiques de développement.
                </p>
                <div className="flex justify-center space-x-4 mb-8">
                    <a  href="#projects" className="bg-blue-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]" 
                        aria-label="Voir mes projets"
                    >
                    Mes Projets
                    </a>
                    <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10" 
                        aria-label="Contactez-Moi">
                        Contactez-Moi
                    </a>
                </div>
                <div className="flex justify-center space-x-10">
                    <a href="https://github.com/guillaumerbs" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-4xl hover:text-green-700" aria-label="Profil GitHub">
                        <FaGithub />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/guillaumeribas" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-4xl hover:text-blue-500" aria-label="Profil LinkedIn">
                        <FaLinkedin />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="/cv.webp" download className="text-gray-300 text-4xl hover:text-red-600" aria-label="Télécharger mon CV">
                        <FaFileDownload />
                        <span className="sr-only">Télécharger CV</span>
                    </a>
                </div>
            </div>
        </section>
    );
};