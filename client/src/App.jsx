import { Outlet, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import { Box } from "@chakra-ui/react";
import About from "./screens/About";
import { useEffect } from "react";
import Home from "./screens/Home";
import Experience from "./screens/Experience";
import Projects from "./screens/Projects";
import Skills from "./screens/Skills";
import Testimonials from "./screens/Testimonials";
import Contact from "./screens/Contact";
import Footer from "./components/Footer";

function App() {
	const location = useLocation();

	useEffect(() => {
		if (location.hash) {
			const targetElement = document.querySelector(location.hash);
			if (targetElement) {
				// Get the height of the fixed navbar (adjust this value as needed)
				const navbarHeight =
					document.querySelector("nav").offsetHeight || 0;

				// Scroll the element into view with an offset
				window.scrollTo({
					top: targetElement.offsetTop - navbarHeight - 40,
					behavior: "smooth",
				});
			}
		}
	}, [location.hash]);
	return (
		<>
			<Navbar />
			<Home/>
			<About/>
			<Experience/>
			<Projects/>
			<Skills/>
			<Testimonials/>
      <Contact/>
	  <Footer/>
		</>
	);
}

export default App;
