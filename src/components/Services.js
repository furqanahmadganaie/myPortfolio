import React from 'react';
// import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
// import { FaDownload } from 'react-icons/fa';
import { SiCplusplus, SiPython, SiC, SiReact, SiJavascript, SiExpress, SiMongodb, SiNodedotjs } from 'react-icons/si';
//services
// const services =[
//   {
//     name:'UI/UX Design',
//     description:' tshhshwidiewfbhjwuhfwfbdbfb',
//     link: 'Learn more'
//   },
//   {
//     name:'Development',
//     description:' tshhshwidiewfbhjwuhfwfbdbfb',
//     link: 'Learn more'
//   },
// ]

const Services = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='services'>
    <div className='container mx-auto'>
      {/* <div className='flex flex-col lg:flex-row gap-y-8 lg:items-center lg:gap-x-12'> */}
      <div className='flex-1 text-center font-secondary lg:text-left'>
        <motion.h2
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='  text-gradient mb-12 text-[55px] font-bold leading-[0.8] lg:text-text-[110px]'>What I DO
          {/* <h4 className='text-gradient text-xl uppercase font-medium mb-2 tracking-wide'>What I Do</h4> */}

        </motion.h2>

        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}

          className='mb-10'>

          <div className=' hover:bg-black/50 transition-all duration-300 w-full max-w-3xl h-auto p-4'>
            <h3 className='  leading-none mb-12 '>
              I Am Software Developer With Expertise In MERN Stack As Well As in Full Stack,
              <br/>
              I am Developing The Interactive User Interfaces Using React.js and Tailwind Css,
              <br/>
              Creating Efficient Backend Services With Node.js and Express.js and managing
              <br/>
              databases with MongoDB And PostgreSQL.
            </h3>
          </div>
        </motion.div>


       
      </div>
      {/* </div> */}

      {/* techstack */}
      




      <button className='btn btn-lg'>MY TechStack</button>
      {/* <div className=' justify-between items-center mg-12'>
        <div className='flex mt-20'>

          <div className='flex'><SiCplusplus size={200} style={{ color: '#00599C' }} /></div>
          <div className='flex'><SiPython size={200} style={{ color: '#3776AB' }} /> </div>
          <div className='flex'><SiC size={200} style={{ color: '#A8B9CC' }} /> </div>
          <div className='flex'><SiJavascript size={200} style={{ color: '#F7DF1E' }} /> </div>
        </div>


        <div className='flex mt-20'>
          <div><SiReact size={200} style={{ color: '#61DAFB' }} /> </div>
          <div><SiNodedotjs size={200} style={{ color: '#339933' }} /> </div>
          <div><SiExpress size={200} style={{ color: '#000000' }} /> </div>
          <div><SiMongodb size={200} style={{ color: '#47A248' }} /> </div>
        </div>
      </div> */}


      <div className='flex flex-col lg:flex-row justify-between items-center mb-12'>
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='flex flex-wrap justify-center mt-10 gap-8'>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex items-center justify-center border border-gray-300 p-4 relative group ' title='C++'>
            
            <SiCplusplus className=' object-cover transition-transform duration-300 opacity-60 hover:scale-105' size={200} style={{ color: '#00599C' }} />
              
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex items-center justify-center border border-gray-300 p-4' title='Python'>
            
            <SiPython className=' object-cover transition-transform duration-300 opacity-60 hover:scale-105' size={200} style={{ color: '#3776AB' }} />
          
            
          </motion.div>

          <motion.div
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex items-center justify-center border border-gray-300 p-4' title='C'>
            <SiC className=' object-cover transition-transform duration-300 opacity-60 hover:scale-105' size={200} style={{ color: '#A8B9CC' }} />
          </motion.div>

          <motion.div
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex items-center justify-center border border-gray-300 p-4' title='JavaScript'>
            <SiJavascript className=' object-cover transition-transform duration-300 opacity-60 hover:scale-105' size={200} style={{ color: '#F7DF1E' }} />
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='flex flex-wrap justify-center mt-10 gap-8'>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex items-center justify-center border border-gray-300 p-4' title='React'>
            <SiReact className=' object-cover transition-transform duration-300 opacity-60 hover:scale-105' size={200} style={{ color: '#61DAFB' }} />
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex items-center justify-center border border-gray-300 p-4' title='Node Js'>
            <SiNodedotjs className=' object-cover transition-transform duration-300 opacity-60 hover:scale-105' size={200} style={{ color: '#339933' }} />
          </motion.div>


          <motion.div
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex items-center justify-center border border-gray-300 p-4' title='Express js'>
            <SiExpress className=' object-cover transition-transform duration-300 opacity-60 hover:scale-105' size={200} style={{ color: '#000000' }} />
          </motion.div>

          <motion.div
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex items-center justify-center border border-gray-300 p-4  ' title='MongoDb'>
            <SiMongodb className=' object-cover transition-transform duration-300 opacity-60 hover:scale-105' size={200} style={{ color: '#47A248' }} />
          </motion.div>
        </motion.div>
      </div>








    </div>





  </section>;
};

export default Services;
