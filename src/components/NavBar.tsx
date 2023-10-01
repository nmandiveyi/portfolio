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
        <div className='px-2'>{ "Resume" }</div>
      </div>

      <div className='flex flex-row'>
        <div className='px-2'>
          <IGLogo />
        </div>
        <div className='px-2'>
          <XLogo />
        </div>
        <div className='px-2'>
          <INLogo />
        </div>
        <div className='px-2'>
          <GHLogo />
        </div>
        
      </div>
    </div>
  )
}

export default NavBar
