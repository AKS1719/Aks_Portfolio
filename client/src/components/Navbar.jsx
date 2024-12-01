import React, { useState, useEffect } from "react";
import {
	Box,
	Flex,
	HStack,
	IconButton,
	VStack,
	Collapse,
	Button,
	useDisclosure,
	useBreakpointValue,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { ChevronDownIcon } from "@chakra-ui/icons"; // Corrected import for ChevronDownIcon
import {
	FaHome,
	FaInfo,
	FaBriefcase,
	FaProjectDiagram,
	FaPhone,
} from "react-icons/fa";

const routes = [
	{ label: "Home", icon: FaHome, path: "#home" },
	{ label: "About Me", icon: FaInfo, path: "#about" },
	{ label: "Experience", icon: FaBriefcase, path: "#experience", hasDropdown: false, dropdownItems: [
		{ label: "Internships", path: "#internships" },
		{ label: "Full-time", path: "#fulltime" },
	]},
	{ label: "Projects", icon: FaProjectDiagram, path: "#projects", hasDropdown: true, dropdownItems: [
		{ label: "Web Development", path: "#web" },
		{ label: "Mobile Apps", path: "#mobile" },
	]},
	{ label: "Contact", icon: FaPhone, path: "#contact",hasDropdown:false }
];

function Navbar() {
	const { isOpen, onToggle } = useDisclosure();
	const isMobile = useBreakpointValue({ base: true, md: true, lg: false });
	const [isScrolled, setIsScrolled] = useState(false);

	// Handle scroll behavior
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const renderLinks = () =>
		routes.map((route) => (
			<React.Fragment key={route.label}>
				{/* Regular link */}
				{!route.hasDropdown ? (
					<NavLink to={route.path} >
						<Button
							variant="link"
							colorScheme="white"
							leftIcon={<route.icon />}
							fontWeight="bold"
							style={{ textDecoration: "none" }}
							// _hover={{ textDecoration: "underline" }}
						>
							{route.label}
						</Button>
					</NavLink>
				) : (
					<Menu>
						<MenuButton
							as={Button}
							rightIcon={<ChevronDownIcon />}  // Correct usage of ChevronDownIcon
							variant="link"
							colorScheme="white"
							leftIcon={<route.icon />}
							fontWeight="bold"
							
							style={{ textDecoration: "none" }}
							// _hover={{ textDecoration: "underline" }}
						>
							{route.label}
						</MenuButton>
						<MenuList
						bg='radial-gradient(circle at top, #085195 10%, #03386a 30%,#011950 80%)'
						>
							{route.dropdownItems.map((item) => (
								<MenuItem key={item.label} bg={'transparent'}>
									<NavLink to={item.path} style={{ textDecoration: "none" }}>
										{item.label}
									</NavLink>
								</MenuItem>
							))}
						</MenuList>
					</Menu>
				)}
			</React.Fragment>
		));

	return (
		<Box
			color="white"
			px={4}
			zIndex={10}
			position="sticky"
			top="0"
			w="100%"
			backdropFilter={isScrolled ? "blur(10px)" : "none"} // Glass effect when scrolled
			bg={isScrolled ? "rgba(8, 81, 191, 0.1)" : "transparent"} // Glass-like background
			transition="background-color 0.3s ease-in-out"
		>
			<Flex
				h={16}
				alignItems="center"
				justifyContent="center" // Center the content horizontally
				direction="row" // Ensure horizontal direction for the navbar
			>
				{/* Toggle Button for Mobile */}
				<IconButton
					size="md"
					icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
					aria-label="Toggle Navigation"
					display={isMobile ? "flex" : "none"}
					onClick={onToggle}
					bg="#0851bf"
					mr={isMobile ? "auto" : "0"} // Align button to the left for mobile
				/>

				{/* Desktop Links */}
				<HStack
					as="nav"
					spacing={8}
					display={isMobile ? "none" : "flex"}
					fontWeight="bold"
					align="center" // Center the nav items
				>
					{renderLinks()}
				</HStack>
			</Flex>

			{/* Mobile Navigation */}
			<Collapse in={isOpen} animateOpacity>
				<VStack
					as="nav"
					spacing={4}
					mt={4}
					fontWeight="bold"
					alignItems="flex-start"
				>
					{renderLinks()}
				</VStack>
			</Collapse>
		</Box>
	);
}

export default Navbar;
