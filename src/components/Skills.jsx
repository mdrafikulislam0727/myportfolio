import { SiHtml5,SiCss3,SiTailwindcss,SiBootstrap,SiJavascript,SiReact,SiFirebase,SiNodedotjs,SiExpress,SiMongodb,SiGithub,SiGit, } from 'react-icons/Si';

const Skills = () => {
    return (
        <section id="skills" className="py-10 bg-gray-800 relative">
            <div className="mt-8 text-gray-100 text-center">
                <h3 className="text-4xl font-semibold">My <span className="text-cyan-600">Skills</span></h3>
                <p className="text-gray-400 mt-3 text-lg">My Knowledge</p>
            </div>


            <div className="flex flex-col md:flex-row items-center justify-center mt-12 gap-10">
                {/* ---- */}
                <div className="border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
                    <div style={{
                        background:`conic-gradient(rgb(8,145,170) 86%,#ddd 86%)`
                    }} className="w-20 h-20 flex items-center justify-center rounded-full">
                        <div className="text-4xl w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center hover:text-cyan-600">
                        <SiHtml5/>
                        </div>
                    </div>
                    <p className="text-xl text-center mt-3">HTML</p>
                </div>
                {/* ---- */}
                <div className="border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
                    <div style={{
                        background:`conic-gradient(rgb(8,145,170) 80%,#ddd 80%)`
                    }} className="w-20 h-20 flex items-center justify-center rounded-full">
                        <div className="text-4xl w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center hover:text-cyan-600">
                        <SiCss3/>
                        </div>
                    </div>
                    <p className="text-xl text-center mt-3">CSS</p>
                </div>
                {/* ---- */}
                <div className="border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
                    <div style={{
                        background:`conic-gradient(rgb(8,145,170) 90%,#ddd 90%)`
                    }} className="w-20 h-20 flex items-center justify-center rounded-full">
                        <div className="text-4xl w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center hover:text-cyan-600">
                        <SiBootstrap/>
                        </div>
                    </div>
                    <p className="text-xl text-center mt-3">Bootstrap</p>
                </div>
                {/* ---- */}
                <div className="border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
                    <div style={{
                        background:`conic-gradient(rgb(8,145,170) 80%,#ddd 80%)`
                    }} className="w-20 h-20 flex items-center justify-center rounded-full">
                        <div className="text-4xl w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center hover:text-cyan-600">
                        <SiTailwindcss/>
                        </div>
                    </div>
                    <p className="text-xl text-center mt-3">Tailwind</p>
                </div>
                {/* ---- */}
                <div className="border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
                    <div style={{
                        background:`conic-gradient(rgb(8,145,170) 95%,#ddd 95%)`
                    }} className="w-20 h-20 flex items-center justify-center rounded-full">
                        <div className="text-4xl w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center hover:text-cyan-600">
                        <SiJavascript/>
                        </div>
                    </div>
                    <p className="text-xl text-center mt-3">JavaScript</p>
                </div>
            </div>
            {/* main */}
            <div className="flex flex-col md:flex-row items-center justify-center mt-12 gap-10">
                {/* ---- */}
                <div className="border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
                    <div style={{
                        background:`conic-gradient(rgb(8,145,170) 95%,#ddd 95%)`
                    }} className="w-20 h-20 flex items-center justify-center rounded-full">
                        <div className="text-4xl w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center hover:text-cyan-600">
                        <SiReact/>
                        </div>
                    </div>
                    <p className="text-xl text-center mt-3">React</p>
                </div>
                {/* ---- */}
                <div className="border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
                    <div style={{
                        background:`conic-gradient(rgb(8,145,170) 75%,#ddd 75%)`
                    }} className="w-20 h-20 flex items-center justify-center rounded-full">
                        <div className="text-4xl w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center hover:text-cyan-600">
                        <SiFirebase/>
                        </div>
                    </div>
                    <p className="text-xl text-center mt-3">Firebase</p>
                </div>
                {/* ---- */}
                <div className="border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
                    <div style={{
                        background:`conic-gradient(rgb(8,145,170) 75%,#ddd 75%)`
                    }} className="w-20 h-20 flex items-center justify-center rounded-full">
                        <div className="text-4xl w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center hover:text-cyan-600">
                        <SiNodedotjs/>
                        </div>
                    </div>
                    <p className="text-xl text-center mt-3">Node JS</p>
                </div>
                {/* ---- */}
                <div className="border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
                    <div style={{
                        background:`conic-gradient(rgb(8,145,170) 70%,#ddd 70%)`
                    }} className="w-20 h-20 flex items-center justify-center rounded-full">
                        <div className="text-4xl w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center hover:text-cyan-600">
                        <SiExpress/>
                        </div>
                    </div>
                    <p className="text-xl text-center mt-3">Express JS</p>
                </div>
            </div>
            {/* main */}
            <div className="flex flex-col md:flex-row items-center justify-center mt-12 gap-10">
                {/* ---- */}
                <div className="border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
                    <div style={{
                        background:`conic-gradient(rgb(8,145,170) 60%,#ddd 60%)`
                    }} className="w-20 h-20 flex items-center justify-center rounded-full">
                        <div className="text-4xl w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center hover:text-cyan-600">
                        <SiMongodb/>
                        </div>
                    </div>
                    <p className="text-xl text-center mt-3">MongoDB</p>
                </div>
                {/* ---- */}
                <div className="border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
                    <div style={{
                        background:`conic-gradient(rgb(8,145,170) 86%,#ddd 86%)`
                    }} className="w-20 h-20 flex items-center justify-center rounded-full">
                        <div className="text-4xl w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center hover:text-cyan-600">
                        <SiGithub/>
                        </div>
                    </div>
                    <p className="text-xl text-center mt-3">GitHub</p>
                </div>
                {/* ---- */}
                <div className="border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
                    <div style={{
                        background:`conic-gradient(rgb(8,145,170) 90%,#ddd 90%)`
                    }} className="w-20 h-20 flex items-center justify-center rounded-full">
                        <div className="text-4xl w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center hover:text-cyan-600">
                        <SiGit/>
                        </div>
                    </div>
                    <p className="text-xl text-center mt-3">Git</p>
                </div>
            </div>
        </section>
    );
};

export default Skills;