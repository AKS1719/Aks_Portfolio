import React from "react";
import {
	Flex,
	VStack,
	Box,
	Heading,
	Text,
	Icon,
	HStack,
	Image,
} from "@chakra-ui/react";
import { FaLaptopCode, FaServer, FaLightbulb, FaHeart } from "react-icons/fa";

function About() {
	return (
		<Flex
			as="section"
			direction="column"
			align="center"
			justify="center"
			// px={{ base: "2rem", md: "4rem" }}
			py="3rem"
			bg="#011940"
			id="about"
			borderTopRightRadius="100px"
			borderTopLeftRadius="100px"
			height={"max-content"}
			px={[5, 10, 20]}
		>
			{/* Title */}
			<Heading
				as="h1"
				size="2xl"
				mb="2rem"
				color="white"
			>
				About Me
			</Heading>

			<Flex
				direction={{ base: "column", lg: "row" }}
				w="100%"
			>
				<VStack
					spacing={8}
					align="start"
					maxW={{base:"100%", lg:"55%"}}
				>
					{/* Detailed Introduction */}
					<Box>
						<HStack>
							<Icon
								as={FaLaptopCode}
								boxSize={8}
								color="teal.500"
							/>
							<Heading
								as="h2"
								size="lg"
								mb={2}
								color="white"
							>
								Who I Am
							</Heading>
						</HStack>
						<Text
							fontSize={{ base: "md", sm: "lg", md: "xl" }}
							align="justify"
							color="white"
							mt={2}
						>
							I am Akshat Kumar Sinha, a passionate computer
							science engineer with hands-on experience in web
							development, cloud computing, and software
							engineering. My journey has been shaped by a strong
							foundation in technical skills and a commitment to
							delivering impactful solutions.
						</Text>
					</Box>

					{/* Personal Touch */}
					<Box>
						<HStack>
							<Icon
								as={FaHeart}
								boxSize={8}
								color="teal.500"
							/>
							<Heading
								as="h2"
								size="lg"
								mb={2}
								color="white"
							>
								Beyond Work
							</Heading>
						</HStack>
						<Text
							fontSize={{ base: "md", sm: "lg", md: "xl" }}
							align="justify"
							color="white"
							mt={2}
						>
							Outside of work, I enjoy exploring emerging
							technologies, playing with algorithms, and
							contributing to innovative projects. My passion for
							continuous learning drives my success.
						</Text>
					</Box>
				</VStack>

				{/* Image Section */}
				<Flex
					// alignItems="center"
					justifyContent="center"
					w={{base:"100%",lg:"50%"}}
				>
					<Box
						height={"80%"}
						pos={"relative"}
						_before={{
							content: '""',
							position: "absolute",
							height: "100%",
							width: "100%",
							zIndex: 0,
							animation: "borderPulse 15s infinite",
							background:
								"radial-gradient(circle at center, #2563EB, #1E3A8A, #0F172A)",
							borderRadius: "30% 70% 53% 47% / 26% 46% 54% 74%",
							boxShadow:
								"0 -2vmin 4vmin LightBlue inset, 0 1vmin 4vmin MediumSlateBlue inset, 0 -2vmin 7vmin RoyalBlue inset",
							filter: "drop-shadow(0 0 3vmin DodgerBlue) drop-shadow(0 5vmin 4vmin SteelBlue)",
							willChange: "transform, border-radius, box-shadow", // Force GPU rendering
						}}
						sx={{
							"@keyframes borderPulse": {
								"0%, 100%": {
									borderRadius:
										"30% 70% 70% 30% / 30% 52% 48% 70%",
									boxShadow:
										"0 -2vmin 4vmin LightBlue inset, 0 -4vmin 4vmin MediumSlateBlue inset, 0 -2vmin 7vmin RoyalBlue inset",
								},
								"50%": {
									borderRadius: "100%",
									boxShadow:
										"0 4vmin 16vmin LightBlue inset, 0 2vmin 5vmin SteelBlue inset, 0 4vmin 4vmin MediumSlateBlue inset",
								},
							},
						}}
					>
						<Image
							height={"100%"}
							src="./assets/img/21P31A0570.png"
							alt="Akshat Kumar Sinha"
							style={{
								position: "relative",
								zIndex: 1,
							}}
						/>
					</Box>
				</Flex>
			</Flex>
		</Flex>
	);
}

export default About;
