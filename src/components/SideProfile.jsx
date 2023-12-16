import React from 'react'
import Sam from "../assets/myself.jpg"
import Resume from "../assets/Samuel_Reid_Resume.pdf"
import {FaGithub, FaLinkedin, FaSquarePhone, FaLocationDot, FaEnvelope, FaRegCalendarDays, FaDownload} from "react-icons/fa6"

const SideProfile = () => {
  let iconBackStyle = "bg-[#1a1918] m-5 p-2 rounded-lg text-xl my-auto hover:bg-white"
  let iconStyle = {fontSize: "2em", marginRight:"10px"};
  let testIcon = "text-xl"
  
  return (
    <>
      
      <div className="w-auto bg-[#3b3938] lg:rounded-xl p-8 lg:mt-28 ">
        <img src={Sam} alt="Sam" className="rounded-xl w-full lg:w-4/5 mx-auto lg:relative bottom-28 lg:-mb-20 border-solid border-2 border-[#3b3938]"/>
          <div className="text-center mt-5 lg:mt-0">
              <p className="text-[#f9f9f9] text-center mb-10 text-3xl font-bold">Samuel Reid</p>
              <p className="bg-[#a5a8a7] m-5 p-2 rounded-lg text-[#1a1918] text-sm sm:text-lg inline font-semibold">Software Developer</p>
              <div className="flex my-8 justify-center">
                <a href="https://github.com/cyberz3r0" target="_blank" className={iconBackStyle}>
                  <FaGithub style={{ fill: '#f3ea89', fontSize: '1.5em' }} />
                </a>
                <a href="https://www.linkedin.com/in/samuel-reid-77b6a033/" target="_blank" className={iconBackStyle} >
                  <FaLinkedin style={{fill:"#8dbcea", fontSize: "1.5em"}}/>
                </a>
              </div>
          </div>
          
          <div className="bg-[#a5a8a7] rounded-xl p-5 mx-auto">
              <div className="flex items-center ">
                  <FaSquarePhone style={{fontSize: "2.5em", marginRight:"10px", fill:"#f7a3b2", backgroundColor:"#1a1918", padding:"5px", borderRadius:"5px"}}/>
                  <div className="flex-wrap md:flex-nowrap">
                    <p className="font-semibold">Phone</p>
                    <p className="text-lg">347-977-0953</p>
                  </div>
              </div>
              <hr />
              <div className="flex items-center">
                  <FaLocationDot style={{fontSize: "2.5em", marginRight:"10px", fill:"#8acab2", backgroundColor:"#1a1918", padding:"5px", borderRadius:"5px"}}/>
                  <div className="flex-wrap md:flex-nowrap">
                    <p className="font-semibold">Location</p>
                    <p className="text-lg">Los Angeles, CA</p>
                  </div>
              </div>
              <hr />
              <div className="flex items-center">
                  <FaEnvelope style={{fontSize: "2.5em", marginRight:"10px", fill:"#9b97d2", backgroundColor:"#1a1918", padding:"5px", borderRadius:"5px"}}/>
                  <div className="flex-wrap md:flex-nowrap">
                    <p className="font-semibold">Email</p>
                    <p className="text-lg break-all">reidsl@icloud.com</p>
                  </div>
              </div>
              <hr />
              <div className="flex items-center">
                  <FaRegCalendarDays style={{fontSize: "2.5em", marginRight:"10px", fill:"#f5947e", backgroundColor:"#1a1918", padding:"5px", borderRadius:"5px"}}/>
                  <div>
                    <p className="flex-wrap md:flex-nowrap font-semibold">Birthday</p>
                    <p className="text-lg">July 16</p>
                  </div>
              </div>
          </div>
          <a id="resume" href={Resume} download>
            <button className="rounded-xl bg-[#1a1918] p-3 mt-10 mb-8 text-white block mx-auto hover:text-[#1a1918] hover:bg-white"> 
              <FaDownload style={{display:"inline-block"}}/> Download Resume
            </button>
          </a>
      </div>

    
    </>
  )
}

export default SideProfile