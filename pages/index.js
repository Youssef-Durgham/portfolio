import Head from "next/head";

import Header from "../components/Header";
import { TerminalIcon, UserCircleIcon } from "@heroicons/react/solid";

import Langanimate from "../components/Langanimate";
import Textanimate from "../components/Textanimate";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";


export default function Home() {
  return (
    <div>
      <Head>
        <title>YOUSEF DURGHAM</title>
        <meta name="description" content="YOUSEF DURGHAM PORTFOLIO" />
        
      </Head>
      
      <div className="bg-[#FAF7EF] bg-cover " id="Home">
      
        <Header />
        <div className="absolute inset-x-0 mt-4">
        <div className='flex mx-auto justify-center min-h-[calc(100vh)] -mt-4 t:-mt-4 l:-mt-4 ll:-mt-4 4k:-mt-4 z-50'>
      <div className='bg-[#F9E490] w-5 mm:w-7 t:w-10 l:w-10 ll:w-10'></div>
      <div className='bg-[#F9A78E] w-5 mm:w-7 t:w-10 l:w-10 ll:w-10'></div>
      <div className='bg-[#95D5ED] w-5 mm:w-7 t:w-10 l:w-10 ll:w-10'></div>
      
	  </div>
        </div>
        <div className="h-screen">
        <div className="flex">
          <div className="z-30 mx-auto mt-20 4k:mt-96 border-2 border-[#140A44] rounded-3xl bg-white w-72 text-sm t:w-96 t:text-xl ll:w-[500px] 4k:w-[1000px] 4k:h-[60px] ll:text-2xl text-center text-[#140A44] 4k:text-5xl 4k:pt-2 font-Josefin">
          <UserCircleIcon className="w-5 h-5 t:w-6 t:h-6 ll:h-8 ll:w-8 4k:h-12 4k:w-12 absolute" />
            MY NAME IS YOUSEF DURGHAM
          </div>
        </div>
        <div className="flex">
          <div className="z-30 mx-auto mt-5 border-2 border-[#140A44] rounded-3xl bg-white w-72 text-sm t:w-96 t:text-xl ll:w-[500px] 4k:w-[1000px] 4k:h-[60px] ll:text-2xl text-center text-[#140A44] 4k:text-5xl 4k:pt-2 font-Josefin">
            <TerminalIcon className="w-5 h-5 t:w-6 t:h-6 ll:h-8 ll:w-8 4k:h-12 4k:w-12 absolute" />
            IM FULL-STACK DEVELOPER
          </div>
        </div>
        <div className="flex">
        <a href="/files/cv.pdf" target="_blank" className="z-30 mx-auto mt-5 mt-35"><button type="button" className="  px-5 py-3 4k:px-7 4k:py-5 font-semibold rounded-2xl bg-[#14243c] text-white">MY CV</button></a>
        </div>
        
        <div className="flex flex-row">
          <Textanimate />
        </div>

        <div className="flex">
          <div className=" flex -mt-48 w-16 h-16 ml-10 t:ml-20 t:w-20 t:h-20 ll:w-28 ll:h-28 4k:-mt-96 4k:ml-96">
            <Langanimate next="/Image/react.png" width={100} height={95} />
          </div>
          <div className=" flex -mt-[189px] w-24 h-24 ml-auto pr-10 t:pr-20 t:w-36 t:h-20 ll:w-36 ll:h-[144px] ll:mr-5  4k:-mt-96 4k:ml-[1650px]">
            <Langanimate next="/Image/next.png" width={2200} height={2200} />
          </div>
        </div>
        <div className="flex">
          <div className=" flex mt-24 ml-10 w-16 h-16 t:w-20 t:h-20 t:ml-20 ll:w-28 ll:h-28 4k:ml-96 4k:mt-36">
            <Langanimate next="/Image/tailwindcss.png" width={100} height={75} />
          </div>
        </div>
        <div className="flex">
          <div className=" flex -mt-[68px] w-24 h-24 ml-auto pr-10 t:pr-20 t:w-36 t:h-20 t:-mt-[75px] ll:w-44 ll:h-44 ll:-mt-[150px] 4k:-mt-20 4k:ml-[2120px]">
            <Langanimate next="/Image/redux.png" width={100} height={95} />
          </div>
        </div>
        <div className=" justify-center absolute bottom-0 left-1/2 transform -translate-x-1/2  text-xl font-Fredoka">
        <div className="box-border  mm:w-72 4k:w-96 4k:h-72 4k:text-4xl    p-4 z-30 flex-col  bg-[#2A29E8] bg-opacity-70 self-end text-[#F9E490] text-left pt-5 rounded-t-3xl">
          I`m a communication engineer and i`m specializing in building web as a <a class="underline decoration-wavy">full-stack</a> developer
        </div>
        </div>
      </div>
      </div>
      
      
      <About />
      
      <Projects />
      <Contact />
    
    </div>
  );
}
