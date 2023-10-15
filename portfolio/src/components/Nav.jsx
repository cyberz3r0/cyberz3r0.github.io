import React from 'react'
import { FaHouseChimney, FaFileLines, FaGear, FaBars } from "react-icons/fa6";

const Nav = () => {
  let iconStyle = { color: "#1a1918", fontSize: "1.5em", margin: "0 auto" };
  let classStyles= "h-16 bg-[#a5a8a7] text-[#1a1918] w-3/12 border-1 rounded-lg p-3 font-medium"
  return (
    <>
    <div className="hidden lg:flex justify-end">
      <div className=" h-26 rounded-xl p-5 bg-[#3b3938] w-96 flex justify-evenly">
          <div className={classStyles}>
            <FaHouseChimney style={iconStyle}/>
            <p className="text-center">Home</p>
          </div>
          <div className={classStyles}>
            <FaFileLines style={iconStyle}/>
            <p className="text-center">Resume</p>
          </div>
          <a href="#projects" className={classStyles}>
            <FaGear style={iconStyle}/>
            <p className="text-center">Projects</p>
          </a>
        </div>
    </div>
    <div className="bg-[#1a1918] lg:hidden">
      <div className="">
        <button className="cursor-pointer">
          <FaBars style={{color:"black", fontSize:"48px", backgroundColor:"#a5a8a7", borderRadius:"10px", padding:"5px"}}/>
        </button>
      </div>
    </div>
    </>
  )
}

export default Nav