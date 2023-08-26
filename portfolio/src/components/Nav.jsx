import React from 'react'
import { FaHouseChimney, FaFileLines, FaGear, FaBars } from "react-icons/fa6";

const Nav = () => {
  let iconStyle = { color: "#1a1918", fontSize: "1.5em", margin: "0 auto" };
  let classStyles= "h-16 bg-[#a5a8a7] text-[#1a1918] w-3/12 border-1 rounded-lg p-3 font-medium"
  return (
    <>
    <div className="hidden md:flex justify-end">
      <div className=" h-26 rounded-xl p-5 bg-[#3b3938] w-96 flex justify-evenly">
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
    </div>
    <div className="md:hidden">
      <div className="">
      <FaBars style={{color:"black", fontSize:"48px", margin:"0 0 10px auto", backgroundColor:"#a5a8a7", borderRadius:"10px", padding:"5px"}}/>
      </div>
    </div>
    </>
  )
}

export default Nav