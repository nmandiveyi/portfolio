import React from 'react'
import { GHLogo, IGLogo, INLogo, Logo, XLogo } from './Icons'


function NavBar() {
  return (
    <div className='flex flex-row pt-5 justify-between'>
      <div className='flex flex-row'>
        <Logo />
        <div className='pl-2'>
          { "Ngonidzashe Mandiveyi" }
        </div>
      </div>

      <div className='flex flex-row'>
        <div className='px-2'>{ "Writing" }</div>
        <a href='https://drive.google.com/file/d/1f7CuSklX8iSEtfpOfAqKjJtkIAXvmWr9/view?usp=sharing' target='_blank' className='px-2'>{ "Resume" }</a>
      </div>

      <div className='flex flex-row'>
        <a 
          className='px-2'
          href='https://www.instagram.com/nmandiveyi/'
        >
          <IGLogo />
        </a>
        <a 
          className='px-2'
          href='https://twitter.com/ngonimandiveyi'
        >
          <XLogo />
        </a>
        <a 
          className='px-2'
          href='https://www.linkedin.com/in/nmandiveyi/'
        >
          <INLogo />
        </a>
        <a 
          className='px-2'
          href='https://github.com/nmandiveyi'
        >
          <GHLogo />
        </a>
        
      </div>
    </div>
  )
}

export default NavBar;
