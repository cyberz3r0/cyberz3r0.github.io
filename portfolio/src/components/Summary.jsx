import React from 'react'
import Nav from './Nav'
import SideProfile from './SideProfile'

const Summary = () => {

  return (
    <div>
        <div className="flex justify-center">
            <div className="max-w-md mr-10">
                <SideProfile />
            </div>
            <div className="max-w-screen-lg">
                <Nav />
                <div className="p-3 bg-[#3b3938] rounded-xl">
                    <p className="text-4xl text-white font-bold">About Me</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, provident, sit sapiente neque aspernatur ullam deserunt ea vero fuga saepe magnam aliquam consequatur in earum. Nulla officiis distinctio dolore excepturi!
                    Rem similique eum necessitatibus, dolorem, blanditiis fuga accusamus voluptates facere ab fugiat id ad deleniti fugit accusantium saepe nemo mollitia eius delectus dignissimos enim doloribus aliquam itaque. Adipisci, corrupti nulla?
                    Voluptatum ex neque dolore doloribus similique totam quasi iste optio reprehenderit, rem, sequi facere. Cum incidunt tenetur ullam temporibus repellendus enim eum consequuntur accusantium ex repudiandae. Delectus quo dignissimos non!
                    Minima officia et nostrum eos eligendi nihil quas perspiciatis harum inventore beatae deleniti obcaecati aliquid, quam qui rerum quos accusamus sequi quia blanditiis error laboriosam, voluptatum distinctio voluptates? Sed, nostrum!
                    Dolor, quam, ipsam distinctio dolore repellat eum molestiae eos officia esse animi necessitatibus hic debitis quod, quos ut fugiat maiores reiciendis quibusdam. Est ea placeat cumque deserunt fugit autem. Facilis?</p>
                
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Summary