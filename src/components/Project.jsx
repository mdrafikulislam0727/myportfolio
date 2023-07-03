const Project = () => {
    return (
        <section id="projects" className="py-10 text-white">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    My <span className="text-cyan-600">Project</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">
                    My awesome works
                </p>
            </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
          <div className="border-8 border-cyan-600 p-2 rounded-lg bg-cyan-900">
           <div className="md:w-96 w-60 md:h-96 h-60  bg">
                
            </div>
            <div className="flex gap-4 py-3">
            <a href="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-mdrafikulislam0727" target="_blank"  rel="noopener noreferrer" className="text-cyan-600 bg-gray-800 px-2 py-1">GitHub</a>
            <a href="https://summer-camp-school-df2c2.web.app/" className="text-cyan-600 bg-gray-800 px-2 py-1" target="_blank"  rel="noopener noreferrer">Live Demo</a>
            </div>
           </div>
           <div className="border-8 border-cyan-600 p-2 rounded-lg bg-cyan-900">
           <div className="md:w-96 w-60 md:h-96 h-60  bgs">
                
            </div>
            <div className="flex gap-4 py-3">
            <a href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-mdrafikulislam0727"   className="text-cyan-600 bg-gray-800 px-2 py-1" target="_blank"  rel="noopener noreferrer">GitHub</a>
            <a href=" https://toy-marketplace-ba38f.web.app/" className="text-cyan-600 bg-gray-800 px-2 py-1" target="_blank">Live Demo</a>
            </div>
           </div>
           <div className="border-8 border-cyan-600 p-2 rounded-lg bg-cyan-900">
           <div className=" md:w-96 w-60 md:h-96 h-60 bge">
                
            </div>
            <div className="flex gap-4 py-3">
            <a href="https://github.com/Porgramming-Hero-web-course/b7a9-career-hub-mdrafikulislam0727" className="text-cyan-600 bg-gray-800 px-2 py-1" target="_blank"  rel="noopener noreferrer">GitHub</a>
            <a href="https://spectacular-longma-ffdead.netlify.app/home" className="text-cyan-600 bg-gray-800 px-2 py-1" target="_blank"  rel="noopener noreferrer">Live Demo</a>
            </div>
           </div>
          </div>
           
        </section>
    );
};

export default Project;