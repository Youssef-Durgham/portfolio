import React from "react";
import Image from "next/image";
import Link from 'next/link'

const Projects = () => {
  return (
    <section id="Projects" className="bg-[#FAF7EF] z-30 w-screen m:h-full  ">
        <div className="">
      
      
      
      
      <div className="flex mx-auto justify-center">
      <div className=' font-Fredoka text-3xl mt-20 font-bold ll:text-5xl  '>PROJECTS</div>
            
      </div>
      <div className="flex mx-auto justify-center">
      <div className='font-Fredoka text-xl mt-10 p-4 t:text-2xl '>Here you will find some of my personal projects that i created</div>
      </div>
      <div className="grid place-items-center mx-auto mt-20">
      <div className="">
    <Link href="https://main.d2gayeidqn12dv.amplifyapp.com/">
      <Image src={"/Image/disney.jpg"} width={700} height={500} className="rounded-3xl "></Image>
    </Link>
                
      </div>
      <div className='grid  place-items-center  mt-5 t:mt-5 t:text-2xl font-bold text-xl l:text-3xl'>Disney clone
                <div className='mt-10 font-normal'>Disney clone is a movie platform that clone the orignal disney plus</div>
                <div className='font-normal mt-5'>build using:</div>
                <div className=" grid grid-cols-2 t:grid-cols-4 gap-2 place-items-center grid-flow-row-dense font-normal justify-between">
                <div className="d-inline-flex p-1 bg-[#95D5ED] w-fit mt-5">React.js</div>
                <div className="d-inline-flex p-1 bg-[#95D5ED] w-fit mt-5">Next.js</div>
                <div className="d-inline-flex p-1 bg-[#95D5ED] w-fit mt-5">Mongodb</div>
                <div className="d-inline-flex p-1 bg-[#95D5ED] w-fit mt-5">Firebase</div>
                <div className="d-inline-flex p-1 bg-[#95D5ED] w-fit mt-5">Tailwindcss</div>
                <div className="d-inline-flex p-1 bg-[#95D5ED] w-fit mt-5">js</div>
                <div className="d-inline-flex p-1 bg-[#95D5ED] w-fit mt-5">Next-auth</div>
                <div className="d-inline-flex p-1 bg-[#95D5ED] w-fit mt-5">Node.js</div>
                
                </div>
                <Link href="https://main.d2gayeidqn12dv.amplifyapp.com/">
                <a  className="mt-10"><button type="button" className=" px-5 py-3 font-semibold rounded-2xl bg-[#14243c] text-white">Live View</button></a>
                </Link>
                
                
                </div>


                <div className="mt-20 t:mt-40">
      <Image src={"/Image/telegrambot.jpg"} width={700} height={500} className="rounded-3xl "></Image>
                
      </div>
      <div className='grid  place-items-center mb-20  mt-5 t:mt-5 t:text-2xl font-bold text-xl l:text-3xl'>Analyt telegram bot
                <div className='mt-10 font-normal'>Analyt telegram bot tracks all buys and sells orders on 7 cryptocurrency platforms. When a large sell or buy order is done, a direct alert is sent.</div>
                <div className='font-normal mt-5'>build using:</div>
                <div className=" grid grid-cols-2 t:grid-cols-4 gap-2 place-items-center grid-flow-row-dense font-normal justify-between">
                <div className="d-inline-flex p-1 bg-[#95D5ED] w-fit mt-5">Node.js</div>
                <div className="d-inline-flex p-1 bg-[#95D5ED] w-fit mt-5">Express.js</div>
                <div className="d-inline-flex p-1 bg-[#95D5ED] w-fit mt-5">js</div>
                <div className="d-inline-flex p-1 bg-[#95D5ED] w-fit mt-5">Mongodb</div>
                
                </div>
                
                <Link href="https://t.me/AY_ROCKET_TRACKER">
                <a  className="mt-10"><button type="button" className=" px-5 py-3 font-semibold rounded-2xl bg-[#14243c] text-white">Live View</button></a>
                </Link>
                
                
                </div>
                
      
      
      </div>
      </div>
      
        
    
    </section>
    
  );
};

export default Projects;
