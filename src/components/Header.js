import React from 'react';
import { TypeAnimation } from 'react-type-animation';
//imagses change after some time 
// import Logo from '../assets/logo.svg'

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        {/* <a href='#'>
              <img src={Logo} alt='' />
            </a> */}
        <h1 className=' text-4xl text-gradient btn-link'>MY PORTFOLIO</h1>
        <TypeAnimation sequence={[
          'Hey',
          1800,
          'This Is My PORTFOLIO...',
          1800,


        ]}

          speed={60}
          className='text-fuchsia-400 text-xl'
          wrapper='span'
          repeat={Infinity}
        />


        <button className='btn btn-sm'>Work with me </button>
      </div>
    </div>
  </header>;
};

export default Header;
