import React from 'react'
import Nav from './Nav'
import SideProfile from './SideProfile'
import {BiLogoFlask, BiLogoDjango,BiLogoPython,BiLogoJavascript,BiLogoMongodb, BiLogoNodejs,BiLogoAws,BiLogoReact} from 'react-icons/bi'
import {SiMysql} from 'react-icons/si'
const Summary = () => {

    let icons={fontSize:"72px", padding:"10px", backgroundColor:"black", borderRadius:"10px", color:"white"}

  return (
    <div>
        <div className="flex justify-center">
            <div className="max-w-md min mr-10">
                <SideProfile />
            </div>
            <div className="max-w-screen-lg">
                <Nav />
                <div className="p-3 bg-[#3b3938] rounded-xl">
                    <p className="text-4xl text-white font-bold m-5">About Me</p>
                    <hr className="w-1/2 mx-5" />
                    <p className="text-black bg-[#a5a8a7] rounded-xl p-5 m-5">Motivated individual seeking a junior developer role with a company that will benefit from my technical knowledge in the IT field. I'm a uncut gem ready to be molded to shape. <br /><br />

                    My background is in customer service and technical support. I used to work in a high volume and fast-paced environment where I have collaborated with clients and team members in small teams. <br /> <br />

                    My interest in programming actually started in college and I tried to purse self-teaching until I finally enrolled in Coding Dojo due to the COVID pandemic. I quickly found myself fascinated with coding and helping others understand what we learned that I ended up being a TA for the same bootcamp. Outside of coding, I like to play games, go on hikes, and watching movies. <br /><br />

                    I am in the market for a job as a developer. Feel free to reach out to me to network or if you want to chat.</p>
                </div>
                <div className="p-3 bg-[#3b3938] rounded-xl mt-5">
                    <p className="text-4xl text-white font-bold m-5">Skills</p>
                    <hr className="w-1/2 mx-5" />
                    <div className="flex justify-between p-5 ">
                        <BiLogoFlask style={icons}/>
                        <BiLogoDjango style={icons}/>
                        <BiLogoPython style={icons}/>
                        <BiLogoJavascript style={icons}/>
                        <BiLogoMongodb style={icons}/>
                        <SiMysql style={icons}/>
                        <BiLogoNodejs style={icons}/>
                        <BiLogoReact style={icons}/>
                        <BiLogoAws style={icons}/>





                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Summary