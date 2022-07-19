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
				<div className="lg:hidden cursor-pointer">
					<CgMenuRight className="text-blue text-3xl" />
				</div>
				{/* mobile nav */}
				<div className="hidden">
					<NavMobile />
				</div>
			</div>
		</header>
	);
};

export default Header;
