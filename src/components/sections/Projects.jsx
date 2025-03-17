import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    // Tableau de données pour les projets
    const projectsData = [
        {
            title: "Guyane Pêche Sportive",
            description: "Je travaille actuellement sur la refonte du site web de Guyane Pêche Sportive, afin de lui offrir une interface plus moderne. Le site propose une présentation des différentes activités du guide, un blog pour partager des actualités, ainsi qu'un système de réservation en ligne pour les sorties.",
            technologies: ["PHP", "Symfony", "Twig", "JavaScript", "TailwindCSS"],
            projectLink: "#",
            demoLink: "#",
            demoLinkText: "Voir Site"
        },
        {
            title: "Les Bières du Hibou",
            description: "Il s'agit d'un site web pour une microbrasserie. Ce projet me permet de mettre en avant mes compétences en développement frontend. Le site propose une présentation des différentes bières, l'histoire de la brasserie, ainsi qu'un système de commande en ligne pour une expérience utilisateur fluide et engageante.",
            technologies: ["React", "Node.js", "TailwindCSS"],
            projectLink: "#",
            demoLink: "#",
            demoLinkText: "Voir Démo"
        },
        {
            title: "O'Galaxy",
            description: "Site web développé à 5 dans le cadre de mon projet de fin de formation chez O'clock. Il s'agit d'une agence de voyage intergalactique immersive, inspirée de l'univers de Star Wars, permettant aux utilisateurs de découvrir et de réserver des expéditions vers des destinations emblématiques de la galaxie.",
            technologies: ["PHP", "Symfony", "Twig", "JavaScript", "Bootstrap"],
            projectLink: "https://github.com/guillaumerbs/ogalaxy",
            demoLink: "https://www.youtube.com/watch?v=Jt_sKLgXGRM",
            demoLinkText: "Voir Démo"
        },
        {
            title: "Portfolio",
            description: "J'ai conçu et développé mon portfolio en utilisant React, Tailwind CSS et Vite pour offrir une interface moderne, rapide et responsive. Ce site met en avant mes projets, mes compétences et mon parcours en tant que développeur fullstack.",
            technologies: ["React", "TailwindCSS"],
            projectLink: "https://github.com/guillaumerbs/guillaumeribas",
            demoLink: null,
            demoLinkText: null
        }
    ];

    return (
        <section 
        id="projects" 
        className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-blue-300 bg-clip-text text-transparent text-center">
                    Projets
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projectsData.map((project, index) => (
                        <div 
                            key={index} 
                            className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition flex flex-col h-full"
                        >
                            <div>
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <div 
                                    className="h-40 overflow-y-auto custom-scrollbar mb-4"
                                    style={{
                                        msOverflowStyle: "none",
                                        scrollbarWidth: "none",
                                        cursor: "ns-resize"
                                    }}
                                >
                                    <p className="text-gray-400">{project.description}</p>
                                </div>
                            </div>
                            <div className="mt-auto">
                                <div className="flex flex-wrap gap-2 mb-4 h-10 items-center">
                                    {project.technologies.map((tech, key) => (
                                        <span 
                                        key={key}
                                        className="bg-blue-500/10 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_6px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>))}
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <a href={project.projectLink} target="_blank" className="text-blue-400 hover:text-blue-300 transition colors m-2">
                                        Voir Projet &#8594;
                                    </a>
                                    {project.demoLink ? (
                                        <a href={project.demoLink} target="_blank" className="text-blue-400 hover:text-blue-300 transition colors m-2">
                                            {project.demoLinkText} &#8594;
                                        </a>
                                    ) : (
                                        <span className="text-blue-400 opacity-0 m-2">Placeholder</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};