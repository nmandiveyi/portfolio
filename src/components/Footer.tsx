import React from 'react'
import { EmailLogo, Phone } from './Icons'

function Footer() {
  return (
    <footer className='fixed bottom-0 py-4 bg-gray-300'>
    <div className='mx-auto flex flex-row justify-center space-x-4'>
      <div className='flex items-center space-x-2'>
        <EmailLogo />
        <div>ngonidzashe.mandiveyi@gmail.com</div>
      </div>
      <div className='flex items-center space-x-2'>
        <Phone />
        <div>{"+1 604-849 (3042)"}</div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
