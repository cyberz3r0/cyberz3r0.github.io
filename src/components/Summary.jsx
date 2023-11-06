import React from 'react'
import Nav from './Nav'
import SideProfile from './SideProfile'
import {BiLogoFlask, BiLogoDjango,BiLogoPython,BiLogoJavascript,BiLogoMongodb, BiLogoNodejs,BiLogoAws,BiLogoReact} from 'react-icons/bi'
import {SiMysql} from 'react-icons/si'
import ComingSoon from "../assets/img/coming_soon.jpg"

const Summary = () => {

    let icons={fontSize:"72px", padding:"10px", backgroundColor:"black", borderRadius:"10px", margin:"5px 5px" }
    let imgStyles = {height:"16.625rem", width:"100%"}
    let date =  new Date().getFullYear();
    
    return (
        <>  
            <div id="home" className="m-0 lg:container lg:mx-auto">
                <div className="mobile-nav lg:hidden bg-slate-900 sticky top-0">
                    <Nav />
                </div>
                <div className="flex flex-col items-center justify-evenly lg:flex-row lg:justify-between lg:items-start ">
                    <div className="left w-full lg:w-[500px] -mb-20 lg:mt-2">
                        <SideProfile/>
                    </div>
                    <div className="right w-full lg:w-1/2">
                        <div className="hidden lg:flex justify-end navbar mt-2">
                            <Nav />
                        </div>
                        <div className="content mt-24 lg:mt-3 ">
                            <div className="p-3 bg-[#3b3938] lg:rounded-xl">
                                <p className="text-4xl text-white font-bold m-5">About Me</p>
                                <hr className="w-1/2 mx-5" />
                                <p className="text-black bg-[#a5a8a7] rounded-xl p-5 m-5">Motivated individual seeking a IT helpdesk or junior developer role with a company that will benefit from my technical knowledge in the IT field. I'm a uncut gem ready to be molded to shape. <br /><br />

                                My background is in customer service and technical support. I've worked in a high volume and fast-paced environments where I have collaborated with clients and team members across the United States and international. <br /> <br />

                                My interest in programming actually started in college and I tried to purse self-teaching until I finally enrolled in Coding Dojo due to the COVID pandemic. I quickly found myself fascinated with coding and helping others understand what we learned that I ended up being a TA for the same bootcamp. In my previous roles, I've had opportunities to utilize my programming knowledge to better enhance outcomes or shorten processes. This really helps fuel my desire to learn and attempt to enhance myself. Outside of coding, I like to play games, keep up with tech trends, play with my dog, go on hikes, and watching movies. <br /><br />

                                I am in the market for a job. Feel free to reach out to me to network or if you want to chat.</p>
                            </div>
                            <div className="p-3 bg-[#3b3938] lg:rounded-xl mt-5 ">
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
                <div className="p-8 bg-[#3b3938] lg:rounded-t-xl mt-5 mx-auto w-full">
                    <p id="projects"className="text-4xl text-white font-bold mb-5">Projects</p>
                    <hr className="w-1/2 mb-5" />
                    <div className="projects flex flex-col items-center lg:flex-row lg:justify-around lg:flex-wrap bg-[#a5a8a7] rounded-xl w-full">
                        <div className="lg:mt-5 w-full p-10 lg:w-1/4 lg:p-0">
                            <iframe className="w-full h-64"  src="https://www.youtube.com/embed/lCj9vanxvFI?si=PPe2iSD9q0TgjxD1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div>
                                <span className="text-xl">Password Generator</span> <a className="underline text-blue-600" href="https://github.com/illustrae/Password-Gen">More Info</a>
                                <p className="break-all">Description: Flask/Python app that generates passwords with login and reg and MySQL db.</p>
                            </div>
                        </div>
                        <div className="lg:mt-5 w-full p-5 lg:w-1/4 lg:p-0">
                            <img className="w-full h-64"  src={ComingSoon} alt="Coming Soon"/>
                            <div>
                                <span className="text-xl">Wordle Clone</span> <a className="underline text-blue-600" href="https://github.com/cyberz3r0/Wordle_Clone">More Info</a>
                                <p className="break-all">Description: Serverless React Wordle Copy app</p>
                            </div>
                        </div>
                        <div className="lg:mt-5 w-full p-5 lg:w-1/4 lg:p-0">
                            <img className="w-full h-64" src={ComingSoon} alt="Coming Soon"/>
                            <div>
                                <span className="text-xl">HAF</span> <a className="" href="">More Info</a>
                                <p className=" break-words">Description: Python GUI(Kivy) bill splitting app </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer w-full mx-auto bg-black text-white">
                    <p className="text-center">Copyright &copy; {date}</p>
                </div>
            </div>
        </>
  )
}

export default Summary