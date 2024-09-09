import React from 'react';
// images

//icons
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'
//type of animatiion
import { TypeAnimation } from 'react-type-animation';

// motion
import { motion } from 'framer-motion'

//variants
import { fadeIn } from '../variants'
import image from '../assets/furqan_image1.jpg'



const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh]  flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-text-[110px]'>
              FURQAN <span>AHMAD</span>
            </motion.h1>

            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary
                           font-semibold uppercase leading-[1]'>
              <span className=' text-white mr-4'>I am a</span>
              <TypeAnimation sequence={[
                'Software Developer',
                2000,
                'Full Stack ',
                2000,
                'LLM Enthusiast',
                2000,
                'MERN Stack',
                2000,
              ]}

                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />

            </motion.div>

            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg max-auto lg:mx-0'>
              
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6
                                items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Connect With  Me</button>
              <a href='#' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </motion.div>

            {/* socials add linkdin inst fb */}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://github.com/furqanahmadganaie' target="_blank" rel="noopener noreferrer">
                <FaGithub className='text-4xl' />
              </a>
              <a href='https://www.linkedin.com/in/99furqan-ahmad/' target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='text-4xl' />
              </a>
              <a href='https://www.facebook.com/khaliq.furqan' target="_blank" rel="noopener noreferrer">
                <FaFacebook className='text-4xl' />
              </a>
              <a href='https://www.instagram.com/f.u.r__k.a.n/' target="_blank" rel="noopener noreferrer">
                <FaInstagram className='text-4xl' />
              </a>

            </motion.div>
          </div>
          {/* image to be change  */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}

            className=' lg:flex flex-1 max-w-[320px] lg:max-w-[482px]  '>
            <img src={image} alt='' className='w-[500px] h-[600px] rounded-full border-4 border-accentColor object-cover transition-transform duration-300  opacity-60 hover:scale-105 ' />
            {/* <div className='absolute inset-0 rounded-full bg-blue-500 opacity-0 transition-opacity duration-300 hover:opacity-30'></div> */}

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
