import React from "react";
import Image from "next/image";


const About = () => {
  return (
    <section id="About" className="bg-[#14243c] z-30 w-screen m:h-full   ">
        <div className="">
      <div className="flex">
        <div className=" lg:w-5/12 flex flex-col justify-center mt-28 4k:mt-60 mx-auto">
          <h1 className="text-xl t:text-3xl l:text-4xl  font-bold leading-9 text-[#ffffff] pb-4 font-Fredoka">
            Inspiration Starting
          </h1>
          <h1 className="text-xl t:text-3xl l:text-4xl font-bold leading-9 text-[#ffffff] pb-4 font-Fredoka">
            From Programming
          </h1>
        </div>
      </div>
      
      <div className="flex">
        <div className="mx-auto t:mt-5 l:mt-40 border border-[#e5e5e5] w-60 h-60 t:w-60 t:h-60 l:w-[200px] l:h-[260px] ll:w-[340px] ll:h-[400px] rounded-t-full">
          <div className="mx-auto border-0 mt-4 bg-[#cdcdcd] w-52 h-52 t:w-52 t:h-52 l:w-[170px] l:h-[230px] ll:w-[310px] ll:h-[370px] rounded-t-full">
            <div className="mr-10 pt-[18px] t:mr-10 brightness-125 -ml-6 t:pt-[31px] t:-ml-[9px]  l:pt-[40px] l:w-[190px] l:h-[190px] ll:pt-[70px] ll:w-[300px] ll:h-[300px]   ">
              <Image src={"/Image/yousef.png"} height={500} width={500}></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className=" l:w-5 flex flex-row justify-center mt-5 mx-auto">
          <h1 className=" text-sm  text-[#ffffff] pb-4 font-Fredoka">
          
          </h1>
          
        </div>
      </div>
      <div className="flex">
        <div className="text-center mx-auto  t:ml-20 mt-10  t:mt-[50px] l:-mt-[350px] ll:-mt-[600px] border-0 w-[200px] h-[40px] rounded-t-full item-center">
          <div className="text-[#ffffff] 4k:text-3xl">EXPERIENCE</div>
          <div className="mt-5 text-left text-slate-300 4k:text-xl">
            I have over 6 years of programming experience. I started learning
            programming in 2015, then entered university in 2016, studied
            communications engineering, graduated in 2020, and then worked at
            the world Islamic Bank in Iraq for two years in the field of web
            programming. After that, I decided to resign from the bank for the
            purpose of full-time to expand my knowledge in programming because I
            am interested in learning everything new in this field, and i have experience in designing
          </div>
        </div>
      </div>
      <div className="text-center mx-auto">
        <div className="mx-auto mt-[600px]  t:mr-20 t:-mt-[40px] ll:-mt-[600px] l:-mt-[350px] border-0 w-[200px] h-full rounded-t-full">
          <div className="text-[#ffffff] 4k:text-3xl">YEARS OF EXPERIENCE</div>
          <div className="mt-5 text-left ml-16 text-4xl text-slate-300">6</div>
          <div className="text-[#ffffff] mt-10 4k:text-3xl">
            LANGUAGES & FRAMEWORKS & SOFTWARE LEARNED
          </div>
          <div className="mt-5 text-left ml-16 text-4xl text-slate-300">17</div>
          <div className="container grid grid-cols-3 gap-2 4k:gap-10 mx-auto mt-10 gap-y-7 text-center 4k:text-lg text-sm text-slate-300 contrast-125">
  {[
    { src: "/Image/html.png", alt: "HTML5", label: "HTML5" },
    { src: "/Image/css.png", alt: "CSS3", label: "CSS3" },
    { src: "/Image/js.png", alt: "JS", label: "JS" },
    { src: "/Image/react.png", alt: "react", label: "REACT.JS" },
    { src: "/Image/react-native-logo-2.png", alt: "React-native", label: "REACT-NATIVE" },
    { src: "/Image/next.png", alt: "next", label: "NEXT.JS" },
    { src: "/Image/nextauth.png", alt: "Neaxtauth", label: "NEXT-AUTH" },
    { src: "/Image/redux.png", alt: "redux", label: "REDUX" },
    { src: "/Image/reduxtoolkit.png", alt: "reduxtoolkit", label: "REDUX-TOOL-KIT" },
    { src: "/Image/reduxsaga.png", alt: "reduxsaga", label: "REDUX-SAGA" },
    { src: "/Image/tailwindcss.png", alt: "tailwindcss", label: "TAILWIND CSS" },
    { src: "/Image/sass.png", alt: "Sass", label: "SASS" },
    { src: "/Image/mongodb.png", alt: "mongodb", label: "MONGO DB" },
    { src: "/Image/firebase.png", alt: "Firebase", label: "FIREBASE" },
    { src: "/Image/c++.png", alt: "C++", label: "C++" },
    { src: "/Image/strapi.svg", alt: "strapi", label: "STRAPI" },
    { src: "/Image/figma.png", alt: "Figma", label: "FIGMA" },
    { src: "/Image/illustrator.png", alt: "illustrator", label: "ILLUSTRATOR" },
  ].map((item) => (
    <div key={item.alt} className="flex flex-col items-center space-y-2">
      <div className="w-12 h-12 4k:w-16 4k:h-16 rounded">
        <img src={item.src} alt={item.alt} className="object-contain" />
      </div>
      <div className="text-slate-300">{item.label}</div>
    </div>
  ))}
</div>

        </div>
      </div>
      </div>
      <section className=" w-full px-6 p-10 bg-[#14243c] z-30">
        
    </section>
    </section>
    
  );
};

export default About;
