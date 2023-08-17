import React from 'react'
import Sam from "../assets/Sam.jpg"
import {FaGithub, FaLinkedin, FaSquarePhone, FaLocationDot, FaEnvelope, FaRegCalendarDays, FaDownload} from "react-icons/fa6"

const SideProfile = () => {
  let iconBackStyle = "bg-[#1a1918] m-5 p-2 rounded-lg text-xl my-auto"
  let iconStyle = {fontSize: "2em", marginRight:"10px"};
  let testIcon = "text-xl"
  
  return (
    <>
    <img src={Sam} alt="Sam" className="rounded-xl w-2/3 m-auto"/>
    <div className="w-auto bg-[#3b3938] rounded-xl p-5 relative bottom-28 -z-10">
        <div className="text-center mt-28">
            <p className="text-[#f9f9f9] text-center mb-5 text-3xl font-bold">Samuel Reid</p>
            <p className="bg-[#a5a8a7] m-5 p-2 rounded-lg text-[#1a1918] text-lg inline ">Aspiring Software Developer</p>
            <div className="flex my-5 justify-center">
              <p className={iconBackStyle}><FaGithub style={{fill:"#f3ea89", fontSize: "1.5em"}}/></p>
              <p className={iconBackStyle} ><FaLinkedin style={{fill:"#8dbcea", fontSize: "1.5em"}}/></p>
            </div>
        </div>
        
        <div className="bg-[#a5a8a7] rounded-xl p-5">
            <div className="flex items-center">
                <FaSquarePhone style={{fontSize: "2.5em", marginRight:"10px", fill:"#f7a3b2", backgroundColor:"#1a1918", padding:"5px", borderRadius:"5px"}}/>
                <div>
                  <p>Phone</p>
                  <p className="text-lg">123-456-7899</p>
                </div>
            </div>
            <hr />
            <div className="flex items-center">
                <FaLocationDot style={{fontSize: "2.5em", marginRight:"10px", fill:"#8acab2", backgroundColor:"#1a1918", padding:"5px", borderRadius:"5px"}}/>
                <div>
                  <p>Location</p>
                  <p className="text-lg">Los Angeles, CA</p>
                </div>
            </div>
            <hr />

            <div className="flex items-center">
                <FaEnvelope style={{fontSize: "2.5em", marginRight:"10px", fill:"#9b97d2", backgroundColor:"#1a1918", padding:"5px", borderRadius:"5px"}}/>
                <div>
                  <p>Email</p>
                  <p className="text-lg">reidsl@icloud.com</p>
                </div>
            </div>
            <hr />
            <div className="flex items-center">
                <FaRegCalendarDays style={{fontSize: "2.5em", marginRight:"10px", fill:"#f5947e", backgroundColor:"#1a1918", padding:"5px", borderRadius:"5px"}}/>
                <div>
                  <p>Birthday</p>
                  <p className="text-lg">July 16</p>
                </div>
            </div>
        
        </div>

        <button className="rounded-xl bg-[#1a1918] p-3 my-4 text-white block mx-auto"> <FaDownload style={{display:"inline-block"}}/> Download Resume</button>
    </div>
    </>
  )
}

export default SideProfile