import React, { ReactNode } from 'react'
import Navigation from '../components/navigation/navigation.component'

const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <div>
      <header>
        <nav>
          <Navigation />
        </nav>
      </header>
      {children}
    </div>
  )
}

export default RootLayout
