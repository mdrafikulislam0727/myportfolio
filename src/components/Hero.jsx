import { TypeAnimation } from 'react-type-animation';
import img from '../../src/assets/profile1.png'
const Hero = () => {
    const social_media=[
        'logo-instagram',
        'logo-facebook',
        'logo-linkedin',
        'logo-twitter',
    ]
    return (
        <section
            id="home"
            className="min-h-screen flex py-10 md:flex-row flex-col items-center mt-20">

           
           <div className='flex-1 flex items-center justify-center h-full'>
                <img src={img} alt=""  className='md:w-9/120 mt-10 md:mt-0 h-1/2 object-cover rounded-full rounded-e-full border-4 border-cyan-600 shadow-lg'/>
           </div>
           <div className='flex-1'>
                <div className='md:text-left text-center'>
                    <h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold '>
                        <span className='text-cyan-600 md:text-5xl text-4xl'>
                            Hello!
                        </span>
                        I'm
                        <br />
                        <span className='px-2'>MD Rafikul Islam</span>
                    </h1>
                    <h4 className='md:text-2xl text-lg  md:leading-normal leading-5 mt-4 font-bold text-white'>
                        <span className='p-2'>I am a</span>
                    <TypeAnimation sequence={[
                    'FRONT-END DEVELOPER', 
                    2000,
                    'MERN STACK DEVELOPER', 
                    2000,
                    'REACT DEVELOPER', 
                    2000,
                  

                ]}
                speed={50}
                className='text-cyan-600'
                wrapper='span'
                repeat={Infinity}
                />
                    </h4>




                    <button className='btn-primary mt-8'>Contact Me</button>
                    <div className='mt-8 text-3xl flex items-center md:justify-start justify-center'>
                        {
                            social_media?.map(icon =>(
                                <div key={icon} className='text-gray-500 hover:text-white p-4'>
                                    <ion-icon name={icon}></ion-icon>
                                </div>
                            ))
                        }
                    </div>
                </div>
           </div>
        </section>
    );
};

export default Hero;