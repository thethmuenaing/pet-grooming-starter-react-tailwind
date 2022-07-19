import React, { useState, useEffect } from "react";

//import Logo
import Logo from "../assets/img/logo.svg";

//import icons
import { CgMenuRight } from "react-icons/cg";

//import components
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Program from "./Program";

const Header = () => {
	//header bg state
	const [bg, setBg] = useState(false);
	//nav mobile state
	const [navMobile, setNavMobile] = useState(false);

	//scroll event
	window.addEventListener("scroll", () => {
		window.scrollY > 50 ? setBg(true) : setBg(false);
	});

	return (
		<header
			className={`${
				bg ? "bg-white py-3 shadow-md" : "bg-none py-5"
			} fixed w-full right-0 left-0 z-10 transition-all duration-300`}
		>
			<div className="container mx-auto flex justify-between items-center">
				{/* logo */}
				<a href="#">
					<img src={Logo} alt="/" />
				</a>
				{/* nav */}
				<div className="hidden lg:flex">
					<Nav />
				</div>
				{/* Program */}
				<Program />
				{/* nav mobile button */}
				<div
					onClick={() => {
						setNavMobile(!navMobile);
					}}
					className="lg:hidden cursor-pointer"
				>
					<CgMenuRight className="text-blue text-3xl" />
				</div>
				{/* mobile nav */}
				<div
					className={`${
						navMobile ? "max-h-[260px] " : "max-h-0 "
					} fixed bg-yellow shadow-lg left-0 w-full top-[78px] h-full overflow-hidden transition-all`}
				>
					<NavMobile />
				</div>
			</div>
		</header>
	);
};

export default Header;
