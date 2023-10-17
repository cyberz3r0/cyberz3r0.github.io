import React from 'react'
import Nav from './Nav'
import SideProfile from './SideProfile'
import {BiLogoFlask, BiLogoDjango,BiLogoPython,BiLogoJavascript,BiLogoMongodb, BiLogoNodejs,BiLogoAws,BiLogoReact} from 'react-icons/bi'
import {SiMysql} from 'react-icons/si'
import ComingSoon from "../assets/img/coming_soon.jpg"

const Summary = () => {

    let icons={fontSize:"72px", padding:"10px", backgroundColor:"black", borderRadius:"10px", margin:"5px 5px" }
    let imgStyles = {width:"400px"}
    
    
    return (
        <>  
            <div id="home" className="m-0 lg:container lg:mx-auto">
                <div className="mobile-nav lg:hidden bg-slate-900 sticky top-0">
                    <Nav />
                </div>
                <div className="flex flex-col items-center justify-evenly lg:flex-row lg:justify-between lg:items-start ">
                    <div className="left w-4/5 lg:w-[500px] -mb-20 lg:mt-2">
                        <SideProfile/>
                    </div>
                    <div className="right w-4/5 lg:w-1/2">
                        <div className="hidden lg:flex justify-end navbar mt-2">
                            <Nav />
                        </div>
                        <div className="content mt-24 lg:mt-3 ">
                            <div className="p-3 bg-[#3b3938] rounded-xl">
                                <p className="text-4xl text-white font-bold m-5">About Me</p>
                                <hr className="w-1/2 mx-5" />
                                <p className="text-black bg-[#a5a8a7] rounded-xl p-5 m-5">Motivated individual seeking a junior developer role with a company that will benefit from my technical knowledge in the IT field. I'm a uncut gem ready to be molded to shape. <br /><br />

                                My background is in customer service and technical support. I used to work in a high volume and fast-paced environment where I have collaborated with clients and team members in small teams. <br /> <br />

                                My interest in programming actually started in college and I tried to purse self-teaching until I finally enrolled in Coding Dojo due to the COVID pandemic. I quickly found myself fascinated with coding and helping others understand what we learned that I ended up being a TA for the same bootcamp. Outside of coding, I like to play games, go on hikes, and watching movies. <br /><br />

                                I am in the market for a job as a developer. Feel free to reach out to me to network or if you want to chat.</p>
                            </div>
                            <div className="p-3 bg-[#3b3938] rounded-xl mt-5 ">
                                <p className="text-4xl text-white font-bold m-5">Skills</p>
                                <hr className="w-1/2 mx-5" />
                                <div className="flex flex-wrap xl:flex-row xl:flex-nowrap justify-between p-5 bg-[#a5a8a7] rounded-xl m-5">
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
                <div className="p-3 bg-[#3b3938] rounded-t-xl mt-5 w-4/5 mx-auto lg:w-full">
                    <p id="projects"className="text-4xl text-white font-bold m-5">Projects</p>
                    <hr className="w-1/2 mx-5" />
                    <div className="projects flex flex-col items-center lg:flex-row lg:justify-between lg:flex-wrap p-5 bg-[#a5a8a7] rounded-xl m-5">
                        <div className="mt-5 w-[450px]">
                            <img src={ComingSoon} alt="Coming Soon" style={imgStyles}/>
                            <div>
                                <span className="text-xl">Password Generator</span> <a className="underline text-blue-600" href="https://github.com/illustrae/Password-Gen">More Info</a>
                                <p className="break-all">Description: Flask/Python app that generates passwords with login and reg and MySQL db.</p>
                            </div>
                        </div>
                        <div className="mt-5 w-[450px]">
                            <img src={ComingSoon} alt="Coming Soon" style={imgStyles}/>
                            <div>
                                <span className="text-xl">Wordle Clone</span> <a className="underline text-blue-600" href="https://github.com/cyberz3r0/Wordle_Clone">More Info</a>
                                <p className="break-all">Description: Serverless React Wordle Copy app</p>
                            </div>
                        </div>
                        <div className="mt-5 w-[450px]">
                            <img src={ComingSoon} alt="Coming Soon" style={imgStyles}/>
                            <div>
                                <span className="text-xl">HAF</span> <a className="" href="">More Info</a>
                                <p className=" break-words">Description: Python GUI(Kivy) bill splitting app </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer w-4/5 lg:w-full mx-auto bg-black">
                    <p>d</p>
                </div>
            </div>
        </>
  )
}

export default Summary