export const Projects = () => {
    return (
        <section 
        id="projects" 
        className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center">
                    Projets
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Guyane Pêche Sportive</h3>
                        <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dicta. Ipsa ea deserunt in mollitia. Accusamus voluptatibus voluptas officiis rerum voluptates sapiente placeat omnis voluptatum aperiam earum odit cumque, debitis nostrum nam enim. Facilis, natus.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["PHP", "Symfony", "Twig", "JavaScript", "Bootstrap"].map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_6px_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                            </span>))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition colors m-2">Voir Projet &#8594;</a>
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition colors m-2">Voir Site &#8594;</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Les bières du Hibou</h3>
                        <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dicta. Ipsa ea deserunt in mollitia. Accusamus voluptatibus voluptas officiis rerum voluptates sapiente placeat omnis voluptatum aperiam earum odit cumque, debitis nostrum nam enim. Facilis, natus.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Node.js", "TailwindCSS"].map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_6px_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                            </span>))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition colors m-2">Voir Projet &#8594;</a>
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition colors m-2">Voir Démo &#8594;</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">O'Galaxy</h3>
                        <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dicta. Ipsa ea deserunt in mollitia. Accusamus voluptatibus voluptas officiis rerum voluptates sapiente placeat omnis voluptatum aperiam earum odit cumque, debitis nostrum nam enim. Facilis, natus.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["PHP", "Symfony", "Twig", "JavaScript", "TailwindCSS"].map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_6px_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                            </span>))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition colors m-2">Voir Projet &#8594;</a>
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition colors m-2">Voir Démo &#8594;</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Portfolio</h3>
                        <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dicta. Ipsa ea deserunt in mollitia. Accusamus voluptatibus voluptas officiis rerum voluptates sapiente placeat omnis voluptatum aperiam earum odit cumque, debitis nostrum nam enim. Facilis, natus.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "TailwindCSS"].map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_6px_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                            </span>))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition colors m-2">Voir Projet &#8594;</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};