import React from 'react'

const Nav = () => {
  return (
    <div>
        <div className="h-24 border-2 rounded-lg border-rose-700 p-5 bg-[#1b1817] w-96">
            <div className="flex justify-evenly">
                <FontAwesomeIcon icon="fa-solid fa-house" />
                <p className=" h-12 bg-[#79828c] text-[#fdfdfd] w-3/12 border-1 rounded-lg">Home</p>
                <p className=" h-12 bg-[#79828c] text-[#fdfdfd] w-3/12 border-1 rounded-lg">Resume</p>
                <p className=" h-12 bg-[#79828c] text-[#fdfdfd] w-3/12 border-1 rounded-lg">Projects</p>
            </div>
        </div>
    </div>
  )
}

export default Nav