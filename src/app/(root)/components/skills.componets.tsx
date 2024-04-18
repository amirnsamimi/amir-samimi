"use client"

import React, { useEffect, useRef, useState } from 'react'
import { SkillData } from '../constants/constants.data'


const Scroller = () => {

const [active,setActive] = useState(0);
const [selectedPosition,setSelectedPosition] = useState("0");
const skillReference:any = useRef(0)
useEffect(()=>{

    setSelectedPosition(skillReference.current.offsetHeight/SkillData.length/4+"px")

},[])

return(

    <div className=' text-black  h-full  text-6xl font-extrabold grid grid-cols-12  '>
    <div className={`col-span-4  overflow-hidden transition-all `} >
            <div className="bg-white h-[3rem] " style={{transform:`translateY(${selectedPosition})`, transition:"500ms"}}>
            </div>
            </div>
            <div className="col-span-8 flex flex-col items-center bg-white" ref={skillReference}>
        {SkillData.map((i)=><>
       <div className='p-8' onClick={(e)=>{setActive(i.id); setSelectedPosition(((skillReference.current.offsetHeight/SkillData.length))*i.id+skillReference.current.offsetHeight/SkillData.length/4+"px");}}>{i.abbr}</div>
        </> 
        )} 
    </div>
    </div>

)

}

const Skills = () => {
  return (
    <div className='h-[66dvh] bg-black text-white grid grid-cols-12'>
        <div className='col-span-4 overflow-y-scroll overflow-x-hidden'>
        <Scroller />
        </div>
    </div>
  )
}

export default Skills
