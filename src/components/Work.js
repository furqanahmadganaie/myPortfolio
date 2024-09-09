import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
// import Img1 from '../assets/portfolio-img1.png'
import Img from '../assets/portfolio_img.png'
// import Img2 from '../assets/portfolio-img2.png'
import drumKit from '../assets/drumkit.png'
// import Img3 from '../assets/portfolio-img3.png'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const Work = () => {
  return (

    
    <section className='section' id='work'>
    <div className='container mx-auto'>
      <button className='btn btn-sm mb-8'>View all Projects</button>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        {/* First Project */}
        <motion.div 
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}

        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <div>
            <h2 className='text-2xl font-bold mb-4'>E-commerce Website</h2>
            <p className='max-w-sm mb-8'>A fully functional e-commerce website built using the MERN stack.</p>
            <div className=''>
              <a href='https://github.com/your-github/e-commerce' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faGithub} size='3x' className='text-white hover:text-gray-400 transition-all duration-300' />
              </a>
            </div>
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Img} alt='E-commerce Website' />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>ShopEase</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'></span>
            </div>
            
          </div>
          <button className='btn btn-sm'><a  href=''   target='_blank' rel='noopener noreferrer'>Open</a></button>
        </motion.div>
  
        {/* Second Project */}
        <motion.div 
         
         variants={fadeIn('left', 0.2)}
         initial='hidden'
         whileInView={'show'}
         viewport={{ once: false, amount: 0.7 }}
         
         className='flex-1 flex flex-col gap-y-12'>
          <div>
            <h2 className='text-2xl font-bold mb-4'>DrumKit</h2>
            <p className='max-w-sm mb-8'>A drum kit application built using JavaScript, HTML, and CSS.</p>
            <div className=''>
              <a href='https://github.com/furqanahmadganaie/Drumkit' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faGithub} size='3x' className='text-white hover:text-gray-400 transition-all duration-300' /> 
              </a>
            </div>
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <a  href='https://furqanahmadganaie.github.io/Drumkit/'   target='_blank' rel='noopener noreferrer'>
            <img className='group-hover:scale-125 transition-all duration-500' src={drumKit} alt='DrumKit' />
            </a>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>DrumKit</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'></span>
            </div>
            
            
          </div>
        <button className='btn btn-sm'><a  href='https://furqanahmadganaie.github.io/Drumkit/'   target='_blank' rel='noopener noreferrer'>Open</a></button>
          
        </motion.div>
        
      </div>
    </div>
    
  </section>
  















  );

};

export default Work;

    // <section className='section' id='work'>
    //   <div className='container mx-auto'>
    //   <button className='btn btn-sm'>View all Projects</button>
    //     <div className=' flex flex-col gap-x-10'>
    //     {/* <button className='btn btn-sm'>View all Projects</button> */}
    //       <div
    //         // variants={fadeIn('right', 0.3)}
    //         // initial='hidden'
    //         // whileInView={'show'}
    //         // viewport={{ once: false, amount: 0.3 }}

    //         className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
              
    //         {/* text  */}

    //         <div>
             
    //           <p className='max-w-sm mb-16'>
              
    //           </p>

    //           {/* <button className='btn btn-sm'>View all Projects</button> */}
    //         </div>

    //         {/* image */}

    //         <div className='group relative overfloww-hidden border-2
    //                                   border-white/50 rounded-xl'>
    //           {/* overloty */}
    //           <div className='group-hover:bg-black/70 w-full h-full absolute
    //                                  z-40 transition-all duration-300'></div>

    //           {/* img */}
    //           <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
    //           {/* protitle */}
    //           <div className='absolute -bottom-full left-12 group-hover:bottom-24 transistion-all duration-500 z-50 '> 
    //             <span className='text-gradient'>E-commerce Website </span>
    //             </div>
              
    //               {/* title */}
    //           <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
    //             <span className='text-3xl text-white'>project title</span>
    //           </div>
    //         </div>
    //       </div>


    //       <div
    //         // variants={fadeIn('left', 0.2)}
    //         // initial='hidden'
    //         // whileInView={'show'}
    //         // viewport={{ once: false, amount: 0.3 }}
    //         className='flex-1 flex flex-col gap-y-10'>
    //         <div className='group relative overfloww-hidden border-2
    //           border-white/50 rounded-xl'>
    //           {/* overloty */}
    //           <div className='group-hover:bg-black/70 w-full h-full absolute
    //               z-40 transition-all duration-300'></div>

    //           {/* img */}
    //           <img className='group-hover:scale-125 transition-all duration-500' 
    //            src={Img2} alt='' />
    //           {/* protitle */}
    //           <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
    //             <span className='text-gradient'>DrumKit</span>
    //           </div>



    //           <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-50'>
    //             <span className='text-3xl text-white'>Project Title</span>
    //           </div>
    //         </div>

    //    </div>
    //     </div>
    //   </div>

    // </section>
  
