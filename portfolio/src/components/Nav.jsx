import React from 'react'
import { FaHouseChimney, FaFileLines, FaGear } from "react-icons/fa6";

const Nav = () => {
  let iconStyle = { color: "#1a1918", fontSize: "1.5em", margin: "0 auto" };
  let classStyles= "h-16 bg-[#a5a8a7] text-[#1a1918] w-3/12 border-1 rounded-lg p-3 font-medium"
  return (
    <>
      
      <nav class="container flex justify-end bg-white">
        <div class="hidden space-x-8 lg:flex justify-end mb-8 bg-[#3b3938] p-5 rounded-xl w-96">
          <div className={classStyles}>
            <FaHouseChimney style={iconStyle}/>
            <p className="text-center">Home</p>
          </div>
          <div className={classStyles}>
            <FaFileLines style={iconStyle}/>
            <p className="text-center">Resume</p>
          </div>
          <div className={classStyles}>
            <FaGear style={iconStyle}/>
            <p className="text-center">Projects</p>
          </div>
        </div>
        <div class="flex lg:hidden">
          <div class="space-y-2">
            <span class="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
            <span class="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
            <span class="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
          </div>
        </div>
      </nav>
      
    </>
  )
}

export default Nav