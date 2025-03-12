export const Home = () => {
    return (
        <section 
            id="home" 
            className="min-h-screen flex items-center justify-center relative"
        >
            <div className="text-center z-10 px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent leading-right">
                    Hello, Je suis Guillaume Ribas
                </h1>
                <p className="text-gray text-lg mb-8 max-w-lg mx-auto">
                    Développeur Full Stack, je conçois des applications performantes et intuitives. Toujours en quête d'optimisation et d'innovation, j'accorde une attention particulière à l'expérience utilisateur et aux bonnes pratiques de développement.
                </p>
            </div>
    </section>
    );
};