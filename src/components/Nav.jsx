import React from 'react'
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaHouseChimney, FaFileLines, FaGear, FaBars } from "react-icons/fa6";


const Nav = () => {
    let iconStyle = { color: "#1a1918", fontSize: "1.5em", margin: "0 auto" };
    let classStyles= "h-16 bg-[#a5a8a7] text-[#1a1918] w-3/12 border-1 rounded-lg p-3 font-medium hover:bg-white"
    

    const navigation = [
    { name: 'Home', href: '#home', icon: <FaHouseChimney style={iconStyle}/>  },
    { name: 'Resume', href: '#resume', icon: <FaFileLines style={iconStyle}/>  },
    { name: 'Projects', href: '#projects', icon: <FaGear style={iconStyle}/> },
    
    ]
    
    
    return (
        <Disclosure as="nav" className="bg-[#1a1918] lg:bg-inherit">
        {({ open }) => (
            <>
            <div className="mx-auto max-w-7xl px-2 lg:px-0">
                <div className="relative flex h-16 lg:h-auto items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center lg:hidden ">
                        {/* Mobile menu button*/}
                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2
                        text-white hover:bg-[#a5a8a7] hover:text-[#1a1918] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                            <XMarkIcon className="block h-9 w-9" aria-hidden="true" />
                        ) : (
                            <Bars3Icon className="block h-9 w-9" aria-hidden="true" />
                        )}
                        </Disclosure.Button>
                    </div>
                    {/* desktop nav */}
                    <div className="hidden lg:flex justify-end">
                        <div className="h-26 rounded-xl p-5 bg-[#3b3938] w-96 flex justify-evenly">
                            {navigation.map((item) => (
                                <div className={classStyles}>
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        
                                    >
                                        {item.icon}
                                        <p className="text-center">
                                            {item.name}
                                        </p>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile dropdown menu */}
            <Disclosure.Panel className="lg:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                    <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className='text-white hover:text-[#1a1918] hover:bg-[#a5a8a7] 
                    block rounded-md px-3 py-2 text-base font-medium'
                    >
                    {item.name}
                    </Disclosure.Button>
                ))}
                </div>
            </Disclosure.Panel>
            </>
        )}
        </Disclosure>
    )
    
    
}

export default Nav