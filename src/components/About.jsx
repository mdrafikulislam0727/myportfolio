import aboutImg from '../../src/assets/profile.png'
const About = () => {
    const info = [
        { text: 'Years Experience', count: '01' },
        { text: 'Completed Project', count: '25' },
        { text: 'Companies Work', count: '0' },
    ]
    const handelDownload = () =>{
        window.open("https://drive.google.com/u/1/uc?id=1qsmedyHii4dD-Yh__ltqkzSY33yyljlv&export=download", "_parent")
    }
    return (
        <section id="about" className="py-10 text-white">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold">
                    About <span className="text-cyan-600">Me</span>
                </h3>
                <p className="text-gray-500 my-3 text-lg font-bold md:mb-0 mb-10">My Introduction</p>
                <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
                    <div className='p-2'>
                        <div className="text-gray-300 my-3">
                            <p className='text-justify leading-7 mt-6'>
                              Hello, I'm Md Rafikul islam , a passionate and dedicated front-end web developer. I am a student in inter second year running. My journey into the world of programming began when I discovered my love for creating visually appealing and interactive websites. To further enhance my skills, I enrolled in the Programming Hero Course, where I completed the web development curriculum and obtained a certificate. This course provided me with comprehensive knowledge and practical experience, enabling me to tackle real-world projects with confidence. When I'm not coding,you can find me indulging in my hobbies. I am an avid Video game enthusiast. I'm also a big fan of anime series and appreciate the artistry and storytelling in this medium. I am excited to embark on new project and collaborate with like-minded individuals. Feel free to browse through my portfolio and get in touch with me if you have any inquiries or if your'd like to discuss opportunities.
                            </p>
                            <div className="flex mt-10 items-center gap-7">
                            {
                            info.map(content => (
                                <div key={content.text}>
                                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                                        {content.count}
                                        <span className="text-cyan-600">+</span>{" "}
                                    </h3>
                                    <span>{content.text}</span>
                                </div>
                            ))}
                            </div>

                            <button onClick={handelDownload} className="btn-primary mt-10">Download Resume</button>

                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <div className='lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg'>
                            <img src={aboutImg} alt="" className='w-full object-cover bg-cyan-600 rounded-xl' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;