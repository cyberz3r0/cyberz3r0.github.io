import React from 'react'
import Nav from './Nav'
import SideProfile from './SideProfile'
import {BiLogoFlask, BiLogoDjango,BiLogoPython,BiLogoJavascript,BiLogoMongodb, BiLogoNodejs,BiLogoAws,BiLogoReact} from 'react-icons/bi'
import {SiMysql} from 'react-icons/si'
const Summary = () => {

    let icons={fontSize:"72px", padding:"10px", backgroundColor:"black", borderRadius:"10px", margin:"5px 5px" }
    
    
    
    return (
        <>
            <div className="mobile-nav lg:hidden bg-slate-900"><Nav /></div>
            <div className="container mx-auto flex flex-col items-center justify-evenly lg:flex-row lg:justify-evenly lg:items-start ">
                <div className="left w-4/5 lg:w-[400px] -mb-20 mt-2">
                    <SideProfile/>
                </div>
                <div className="right w-4/5 lg:w-1/2">
                    <div className="hidden lg:flex justify-end navbar mt-2">
                        <Nav />
                    </div>
                    <div className="content mt-24 lg:mt-4 ">
                        <div className="p-3 bg-[#3b3938] rounded-xl">
                            <p className="text-4xl text-white font-bold m-5">About Me</p>
                            <hr className="w-1/2 mx-5" />
                            <p className="text-black bg-[#a5a8a7] rounded-xl p-5 m-5">Motivated individual seeking a junior developer role with a company that will benefit from my technical knowledge in the IT field. I'm a uncut gem ready to be molded to shape. <br /><br />

                            My background is in customer service and technical support. I used to work in a high volume and fast-paced environment where I have collaborated with clients and team members in small teams. <br /> <br />

                            My interest in programming actually started in college and I tried to purse self-teaching until I finally enrolled in Coding Dojo due to the COVID pandemic. I quickly found myself fascinated with coding and helping others understand what we learned that I ended up being a TA for the same bootcamp. Outside of coding, I like to play games, go on hikes, and watching movies. <br /><br />

                            I am in the market for a job as a developer. Feel free to reach out to me to network or if you want to chat.</p>
                        </div>
                        <div className=" p-3 bg-[#3b3938] rounded-xl mt-5 ">
                            <p className="text-4xl text-white font-bold m-5">Skills</p>
                            <hr className="w-1/2 mx-5" />
                            <div className="flex flex-wrap xl:flex-row xl:flex-nowrap justify-between p-5 ">
                                <BiLogoFlask style={icons} color="#ffee93"/>
                                <BiLogoDjango style={icons} color="#84dcc6"/>
                                <BiLogoPython style={icons} color="#8DBCEA"/>
                                <BiLogoJavascript style={icons} color="#ffc09f"/>
                                <BiLogoMongodb style={icons} color="#adf7b6"/>
                                <SiMysql style={icons} color="#70d6ff"/>
                                <BiLogoNodejs style={icons}color="#fb6f92"/>
                                <BiLogoReact style={icons} color="#6e78ff"/>
                                <BiLogoAws style={icons} color="#f68c70"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
  )
}

export default Summary