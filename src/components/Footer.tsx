import React from 'react'
import { EmailLogo, Phone } from './Icons'

function Footer() {
  return (
    <footer className='py-4 fixed bottom-0 mx-auto'>
      <div className='flex flex-row justify-center'>
        <div className='flex flex-row'>
          <EmailLogo />
          <div>ngonidzashe.mandiveyi@gmail.com</div>
        </div>
        <div className='flex flex-row'>
          <Phone />
          <div>{"+1 604-849 (3042)"}</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
