import {
	Flex,
	Box,
	Heading,
	Text,
	Button,
	VStack,
	HStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import ModelViewer from "../components/modelRendere";
import TypingEffect from "../components/TypingAnimation";
import { NavLink } from "react-router-dom";
import { FaFileAlt, FaFilePdf } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
function Home() {
	const [isSticky, setIsSticky] = useState(true);
	const [showOptions, setShowOptions] = useState(false);

	const handleClick = () => {
		setShowOptions(!showOptions);
	};
	// Track scroll position
	useEffect(() => {
		const handleScroll = () => {
			// Calculate the scroll position and check if it's 20% from the top
			if (window.scrollY >= window.innerHeight * 0.6) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<section id="home">
			<Flex
				flexDirection={"column"}
				alignItems={"center"}
				justifyContent={"center"}
				p={4}
				// pt={"4rem"}
				color={"white"}
				minH={"92vh"}
				px={[5, 10, 20]}
				// id="home"
			>
				<Heading
					as="h1"
					fontFamily={'"Montserrat Alternates", sans-serif"'}
					size={{ base: "lg", md: "xl", lg: "2xl" }}
					color="#67E6DC"
					textAlign={"center"}
					mb={6}
				>
					Welcome to My Portfolio
				</Heading>

				{/* Model Viewer Section */}
				<Flex
					alignItems={"center"}
					justifyContent={"center"}
					flexDirection={{ base: "column", lg: "row" }}
					width={"100%"}
				>
					<Flex
						as={"section"}
						width={{ base: "100%", lg: "50%" }}
						height={{ base: "300px", md: "400px", lg: "80vh" }}
						overflow={"hidden"}
					>
						<ModelViewer />
					</Flex>

					{/* Welcome Section */}
					<Flex
						as={"section"}
						width={{ base: "100%", lg: "50%" }}
						justifyContent="center"
						alignItems="center"
						p={{ base: 4, md: 8 }}
						height={{ base: "300px", md: "400px", lg: "80vh" }}
					>
						<VStack
							spacing={6}
							align="start"
							width={"100%"}
						>
							{/* Welcome Message */}
							<Text
								fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
								fontWeight={"bold"}
							>
								<Flex
									wrap={"wrap"}
									alignItems={"center"}
								>
									I'm a&nbsp;
									<TypingEffect />
								</Flex>
							</Text>
							<Text
								fontSize={{ base: "md", sm: "lg", md: "xl" }}
								align={"justify"}
							>
								My work involves leveraging modern tools like{" "}
								<Text
									as="span"
									fontWeight="bold"
									color="teal.500"
								>
									Three.js
								</Text>
								&nbsp;and advanced&nbsp;
								<Text
									as="span"
									fontWeight="bold"
									color="teal.500"
								>
									React libraries
								</Text>{" "}
								to build dynamic user experiences. With a strong
								focus on innovation, I specialize in developing
								high-performance web and mobile applications
								that bring ideas to life through&nbsp;
								<Text
									as="span"
									fontWeight="bold"
									color="teal.500"
								>
									robust functionality
								</Text>
								.
							</Text>

							{/* Call-to-Action Buttons */}
							<Box
								display={"flex"}
								flexDirection={{ base: "column", md: "row" }}
								width={"100%"}
								gap={4}
							>
								<Button
									colorScheme="blue"
									size={{ base: "md", sm: "lg" }}
									width={{ base: "100%", md: "auto" }}
									as={NavLink}
									to={"#experience"}
								>
									View My Work
								</Button>
								<Button
									colorScheme="teal"
									size={{ base: "md", sm: "lg" }}
									width={{ base: "100%", md: "auto" }}
									as={NavLink}
									to={"#contact"}
								>
									Contact Me
								</Button>
								<Button
								as="a"
									href="./assets/Akshat_Resume_Web.pdf"
									colorScheme="orange"
									size={{ base: "md", sm: "lg" }}
									width={{ base: "100%", md: "auto" }}
									download
								>
									View Resume
								</Button>
							</Box>
						</VStack>
					</Flex>
				</Flex>
			</Flex>

			{/* Sticky View Resume Button */}
			{isSticky && (
				<Box
					position="fixed"
					bottom={4}
					right={4}
					bg="teal.500"
					p={4}
					borderRadius="full"
					boxShadow="md"
					display="flex"
					alignItems="center"
					justifyContent="center"
					cursor="pointer"
					zIndex={20}
					onClick={handleClick}
					title="Download Resume/CV"
				>
					<FaFileAlt
						size={24}
						color="white"
					/>

					{showOptions && (
						<>
							<HStack
								spacing={2}
								position="absolute"
								bottom="65px"
								right="0"
								align="center"
								justify="center"
							>
								{/* Button for Web Resume */}
								<Button
									as="a"
									href="./assets/Akshat_Resume_Web.pdf" // Replace with your web resume path
									download
									colorScheme="teal"
									size="sm"
									boxShadow="md"
									_hover={{ boxShadow: "lg" }}
									leftIcon={<IoIosPaper />}
								>
									Web Resume
								</Button>
							</HStack>
							<HStack
								spacing={2}
								position="absolute"
								bottom="10px"
								right="65px"
								align="center"
								justify="center"
							>
								{/* Button for Mobile Resume */}
								<Button
									as="a"
									href="./assets/Akshat_Resume_Mobile.pdf" // Replace with your mobile resume path
									download
									colorScheme="teal"
									size="sm"
									boxShadow="md"
									_hover={{ boxShadow: "lg" }}
									rightIcon={<FaFilePdf />}
								>
									Mobile Resume
								</Button>
							</HStack>
						</>
					)}
				</Box>
			)}
		</section>
	);
}

export default Home;
