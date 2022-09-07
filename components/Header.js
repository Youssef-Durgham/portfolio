import { Link } from "react-scroll";
import { useState, useEffect } from "react";
function Header() {
	const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <header className="flex fixed w-screen top-0 p-4 bg-white bg-opacity-30 text-gray-800 text-xs t:text-lg ll:text-xl 4k:text-5xl 4k:p-10 z-40">
	<div className="container flex justify-between h-6 mx-auto md:justify-center md:space-x-8 z-40">
		<ul className="items-stretch  space-x-3 flex">
			<li className="flex">
			{hasWindow &&
			<Link activeClass="active" smooth spy to="Home" >
				<a rel="noopener noreferrer" href="#" className="flex items-center px-0 ml:px-1 t:px-4 l:px-10 ll:px-16 4k:px-32 -mb-1 border-b-2 border-transparent ">Home</a>
			</Link>
}
			</li>
			
			<li className="flex">
			{hasWindow &&
			<Link activeClass="active" smooth spy to="About">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-0 ml:px-1 t:px-4 l:px-10 ll:px-16 4k:px-32 -mb-1 border-b-2 border-transparent">About</a>
			</Link>
}
			</li>
		</ul>
		
		
		<ul className="items-stretch space-x-3 flex">
			<li className="flex">
			{hasWindow &&
			<Link activeClass="active" smooth spy to="Projects">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-0 ml:px-1 t:px-4 l:px-10 ll:px-16 4k:px-32 -mb-1 border-b-2 border-transparent">Projects</a>
			</Link>
}
			</li>
			
			<li className="flex">
			{hasWindow &&
			<Link activeClass="active" smooth spy to="Contacts">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-0 ml:px-1 t:px-4 l:px-10 ll:px-16 4k:px-32 -mb-1 border-b-2 border-transparent">Contacts</a>
			</Link>
}
			</li>
		</ul>
		
	</div>
</header>
  )
}

export default Header
