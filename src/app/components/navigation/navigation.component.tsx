'use client'
import React, { useState } from 'react'
import Logo from "@/assets/logos/Main-logo.svg"
import Menu from "@/assets/logos/Burger-Menu.svg"

//XS NAVIGATION BAR MENU-OPEN
const NavigationMenu = () => {

  return(
    <div className='w-full bg-white'>
        

    </div>
  )

}

//NAVIGATION BAR
const Navigation = () => {

    const [menuOpen,setMenuOpen] = useState(false);
    console.log(menuOpen)

  return (
    <>
    <div className='bg-black flex justify-between p-4 shadow-2xl '>
      <div>
      <Logo width="2rem"/>
      </div>
      <div>
        <button onClick={()=>{setMenuOpen(!menuOpen)}}>
      <Menu  width="2rem"/>
      </button>
      </div>
 
    </div>
    
    <NavigationMenu />
   
    </>
  )
}

export default Navigation
