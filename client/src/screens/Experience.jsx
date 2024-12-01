import React, { useState } from "react";
import {
	Box,
	Text,
	VStack,
	Circle,
	HStack,
	Image,
	SlideFade,
	useDisclosure,
	Flex,
	Heading,
} from "@chakra-ui/react";
import { FaCertificate } from "react-icons/fa";

const experiences = [
	{
		id: 1,
		start_month: "July 2024",
		end_month: "October 2024",
		companyLogo: "./assets/img/companyLogo/nexadev.jpeg", // Replace with actual logo
		companyName: "NexaDev - IT Solutions",
		companyLocation: "Hyderabad, Telangana",
		experienceGained:
			"During my time at NexaDev IT Solutions, I developed a client-side consultancy service platform using the MERN stack. The platform facilitated seamless communication between users and consultants, leveraging WebSocket for real-time interactions. This project focused on delivering a user-friendly interface and robust functionality, ensuring an intuitive experience for both consultants and clients. My work included integrating key features such as dynamic data fetching, real-time messaging, and an efficient user management system to enhance the overall service delivery.",
		roleOffered: "Web Developer",
		skillsGained:
			"I gained hands-on experience in full-stack web development with a focus on the MERN stack. I developed proficiency in building dynamic, real-time web applications, utilizing technologies such as React, Node.js, Express.js, and MongoDB. I also learned to implement WebSocket for real-time messaging, improving communication features in the platform. Additionally, I developed a deeper understanding of responsive design, RESTful APIs, and effective problem-solving in a team-oriented environment.",
		certificate:
			"https://drive.google.com/file/d/1RsL01JoFw8ALJRhzrG84mQgYUqewN7Q2/view",
		workType: "Internship",
		workLocation: "Remote",
	},
	{
		id: 2,
		start_month: "June 2024",
		end_month: "August 2024",
		companyLogo: "./assets/img/companyLogo/brainovision.png", // Replace with actual logo
		companyName: "BrainOvision Solutions Pvt. Ltd.",
		companyLocation: "Hyderabad, Telangana",
		experienceGained:
			"At Brainovision, I worked on a variety of projects utilizing Amazon Web Services (AWS), gaining hands-on experience in cloud computing and service integration. I contributed to project success by demonstrating a strong ability to learn quickly and efficiently complete tasks. My work was recognized for punctuality, hard work, and my ability to adapt swiftly to new challenges, ensuring seamless execution and consistent progress on all projects.",
		roleOffered: "AWS Intern",
		skillsGained:
			"Through this internship, I gained expertise in AWS services such as EC2, S3, Lambda, and RDS. I was involved in cloud infrastructure management, deploying scalable applications, and automating tasks using AWS tools. This role strengthened my understanding of cloud computing best practices and enhanced my problem-solving skills in a cloud environment.",
		certificate:
			"https://drive.google.com/file/d/1uB5pDsyt-Y1xL-HnEqUMzgwsl43L1P8U/view",
		workType: "Internship",
		workLocation: "Remote",
	},
];

const Experience = () => {
	const [selectedExperience, setSelectedExperience] = useState(
		experiences[0]
	);
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleDotClick = (experience) => {
		setSelectedExperience(experience);
		onOpen();
	};

	return (
		<Flex
			bg={"#011940"}
			alignItems={"center"}
			justifyContent={"center"}
			flexDirection={"column"}
			px={[5, 10, 20]} // Responsive padding
			py={10}
			id="experience"
		>
			{/* Heading */}
			<Heading
				fontSize="3xl"
				fontWeight="bold"
				color="white"
			>
				Experience
			</Heading>

			<VStack
				py={10}
				w={{ base: "100%", md: "100%", lg: "60%" }}
				display={"flex"}
				alignItems={"center"}
				justifyContent={"center"}
			>
				{/* Timeline */}
				<HStack
					spacing={0} // Remove explicit spacing between children
					justifyContent="space-around" // Dynamically distribute space around children
					position="relative"
					w="full"
					maxW="800px"
					_before={{
						content: '""',
						position: "absolute",
						top: "64%",
						left: "0%",
						right: "0%",
						height: "4px",
						bg: "white",
						borderRadius: "10px",
						zIndex: 0,
					}}
				>
					{experiences.map((exp) => (
						<VStack
							key={exp.id}
							spacing={2}
							align="center"
							onClick={() => handleDotClick(exp)}
							cursor="pointer"
							position={"relative"}
							zIndex={1}
						>
							{/* Month */}
							<Text
								fontSize="sm"
								color="whiteAlpha.800"
							>
								{exp.end_month}
							</Text>

							{/* Dot with Logo */}
							<Circle
								size="50px"
								bg="gray.700"
								border="2px solid"
								borderColor="blue.400"
								overflow="hidden"
								_hover={{
									transform: "scale(1.1)",
									transition: "all 0.2s",
								}}
							>
								<Image
									src={exp.companyLogo}
									alt={exp.companyName}
									// boxSize="40px"
									rounded={"100%"}
								/>
							</Circle>
						</VStack>
					))}
				</HStack>

				{/* Details Container */}
				<SlideFade
					in={isOpen || true} // Show details on load
					offsetY="20px"
					// maxW="80px"
				>
					{selectedExperience && (
						<Box
							w="full"
							p={6}
							// bg="linear-gradient(to bottom, #4c6ef5, #2d6aff)"
							borderRadius="lg"
							boxShadow="0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.6), inset 0 0 10px rgba(0, 255, 255, 0.2)"
							mt={8}
							transition="all 0.3s ease"
							_hover={{
								boxShadow:
									"0 0 18px rgba(0, 255, 255, 0.8), 0 0 30px rgba(0, 255, 255, 0.6), inset 0 0 18px rgba(0, 255, 255, 0.1)", // Slightly increased outer shadow and a lighter inner shadow
							}}
						>
							{/* Card Header */}
							<Flex
								align="center"
								justify="space-between"
								mb={6}
							>
								{/* Left Section: Company Logo and Name */}
								<Flex align="center">
									{/* Company Logo */}
									<Box
										w="100px"
										h="100px"
										borderRadius="lg"
										overflow="hidden"
										mr={6}
										// border="2px solid"
										// borderColor="rgba(0, 255, 255, 0.7)" // Neon border for logo
										display="flex"
										justifyContent="center"
										alignItems="center"
										bg="rgba(0, 255, 255, 0.1)" // Light cyan background for logo area
									>
										<Image
											src={selectedExperience.companyLogo}
											alt={`${selectedExperience.companyName} logo`}
											boxSize="80%"
											borderRadius={"lg"}
											objectFit="contain"
										/>
									</Box>

									{/* Company Details */}
									<Box>
										<Heading
											fontSize="xl"
											fontWeight="bold"
											color="white" // White color for text
											mb={1}
											// textTransform="uppercase"
										>
											{selectedExperience.companyName}
										</Heading>
										<Text
											fontSize="md"
											color="white" // White for location text
											mb={1}
										>
											{selectedExperience.companyLocation}
										</Text>
									</Box>
								</Flex>

								{/* Right Section: Role and Internship Period */}
								<Box textAlign="right">
									<Text
										fontSize="md"
										fontWeight="bold" // Bold for role
										color="white" // White for text
										mb={1}
									>
										{/* <strong>Role: </strong> */}
										{selectedExperience.roleOffered}
									</Text>
									<Text
										fontSize="sm"
										color="white" // White for period text
										fontStyle="italic"
									>
										Internship Period:{" "}
										{selectedExperience.start_month} -{" "}
										{selectedExperience.end_month}
									</Text>
								</Box>
							</Flex>
							{/* Experience Information */}
							<Box mb={6}>
								<Text
									fontSize="lg"
									fontWeight="bold" // Bold for experience overview title
									color="white" // White for title text
									mb={2}
								>
									Experience Overview
								</Text>
								<Text
									fontSize="sm"
									color="white" // White for content text
									lineHeight="1.6"
								>
									{selectedExperience.experienceGained}
								</Text>
							</Box>
							{/* Skills Gained */}
							<Box mb={6}>
								<Text
									fontSize="lg"
									fontWeight="bold" // Bold for skills gained title
									color="white" // White for title text
									mb={2}
								>
									Skills Gained
								</Text>
								<Text
									fontSize="sm"
									color="white" // White for content text
									lineHeight="1.6"
								>
									{selectedExperience.skillsGained}
								</Text>
							</Box>
							{/* Certificate Section */}
							{selectedExperience.certificate && (
								<Box
									textAlign="center"
									mt={6}
									p={4}
									bg="rgba(0, 0, 0, 0.2)"
									borderRadius="lg"
									display={"flex"}
									alignItems={"ceneter"}
									justifyContent={"center"}
								>
									<a
										href={selectedExperience.certificate}
										target="_blank"
										rel="noopener noreferrer"
										style={{
											textDecoration:"none"
										}}
									>
										<Text
											fontSize="md"
											color="cyan.400" // Cyan for the link
											// textDecoration="underline" 
											border='2px solid'
											borderRadius={"20px"}
											// bg={"cyan.500"}
											
											_hover={{
												color: "cyan.500", // Slight color shift on hover
												transform: "scale(1.05)", // Small scaling effect for emphasis
											}}
											transition="all 0.2s ease" // Smooth transition for hover effects
											display="flex"
											alignItems="center"
											justifyContent="center"
											p={3}
											gap={2} // Space between the icon and text
										>
											{/* Certificate Icon */}
											<FaCertificate size={18} />
											View Certificate
										</Text>
									</a>
								</Box>
							)}
						</Box>
					)}
				</SlideFade>
			</VStack>
		</Flex>
	);
};

export default Experience;
