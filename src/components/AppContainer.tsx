import React, { ReactNode } from 'react'

export type AppContainerProps = {
  children: ReactNode
}

const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <div className={`w-full h-screen bg-primary text-primary font-custom grid grid-cols-12`}>
      { children }
    </div>
  )
}

export default AppContainer
