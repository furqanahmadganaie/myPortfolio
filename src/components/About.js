import React from 'react';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'
import { FaPhone } from 'react-icons/fa';
import { ReactComponent as GmailIcon } from '../assets/gmail.svg';
import {about}from '../assets/about.png'
import { FaDownload } from 'react-icons/fa';

const About = () => {
  const [ref, InView] = useInView({
    threshold: 0.5
  });

  return <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
            lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* image
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1  bg-contain bg-no-repeat h-[640px]
                mix-blend-lighten bg-top'>

        </motion.div> */}

        <motion.div
          variants={fadeIn('up', 0.9)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2}}
          className='flex-1'>
          <h2 className='h2 text-accent '>
            About me.
          </h2>

          <h3 className='h3 mb-6'>
            I'm A Software Developer Currently Persuing my B.tech In Information Technology
            At  <a  className='text-gradient'href='https://www.iiit-bh.ac.in/'>IIIT Bhubaneswar.</a>
          </h3>
          <p className='mb-6'>
            Software engineering Fellow(SWE) At  <a  className='text-gradient'href='https://app.theheadstarter.com'>HeadStarter</a>

            

          </p>

          {/* stats */}
          <div className='flex'>
            <div>
              {/* <div>
                    <CountUp start={0} end={13} duration={3}/>
                  </div>
                  <div>
                    Years of <br/>
                    Experience
                  </div> */}


            </div>
          </div>

          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>Contact me</button>

            <a href='mailto:furqanganie9399@gmail.com' className='flex items-center text-gradient btn-link' target="_blank" rel="noopener noreferrer">
              <GmailIcon className='w-14 h-14 text-red-600 ' />
              Email Me

            </a>

            <a href='tel:+91 9622146489' className='flex items-center '>
              <FaPhone className='text-2xl' />
              <h3 className='text-gradient'>Call Me</h3>
            </a>

            
      <a
        href="/furqanahmad.pdf" target="_blank" rel="noopener noreferrer"
        download="furqanahmad.pdf"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
      >
        <FaDownload className="mr-2" /> {/* Optional: download icon */}
        Download CV
      </a>
    

          </div>


        </motion.div>
      </div>

    </div>
  </section>;
};

export default About;
