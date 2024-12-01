import React from "react";
import {
	Box,
	Flex,
	Heading,
	Text,
	Button,
	SimpleGrid,
	UnorderedList,
	ListItem,
	Kbd,
	Image,
} from "@chakra-ui/react";

const projects = {
	webProjects: [
		{
			name: "Consultancy Service Platform",
			githubLink:
				"https://github.com/AkshatKumarSinha9327/ConsultancyService",
			websiteLink: "https://nexadev-consultancy-service.vercel.app/",
			description:
				"A platform enabling users to connect with top mentors for personalized guidance and knowledge-sharing.",
			keyFeatures: [
				"Chat communication",
				"Notifications",
				"Mentor search",
			],
			technologies: {
				stack: "MERN Stack",
				ui: "Chakra UI",
				additional: "Web sockets",
			},
			imgLink: "./assets/img/project/consultancy.png",
		},
		{
			name: "Music Player Platform",
			githubLink: "https://github.com/AKS1719/React-Music-player",
			websiteLink: "https://vaiaksh-music.vercel.app/",
			description:
				"An interactive music player platform supporting emerging artists with seamless music playback and upload functionality.",
			keyFeatures: [
				"Playback controls",
				"Responsive design",
				"Audio streaming",
			],
			technologies: {
				stack: "MERN Stack",
				ui: "Chakra UI",
			},
			imgLink: "./assets/img/project/musicPlayer.jpeg",
		},
	],
	mobileProjects: [
		{
			name: "Currency Converter",
			githubLink: "https://github.com/AKS1719/ReactNativePractice/tree/main/CurrencyConverter",
			websiteLink: null,
			description:
				"A mobile application for converting currencies in real-time using up-to-date exchange rates.",
			keyFeatures: [
				"Real-time updates",
				"Intuitive UI",
				"Offline access",
			],
			technologies: {
				stack: "React Native",
				ui: "Custom components",
				additional: "Optional API calls",
			},

			imgLink: null,
		},
		{
			name: "TicTacToe",
			githubLink: "https://github.com/AKS1719/ReactNativePractice/tree/main/TicTacToe",
			websiteLink: null,
			description:
				"A classic TicTacToe game for mobile platforms with additional features for enhanced gameplay.",
			keyFeatures: [
				"Single-player AI",
				"Multiplayer mode",
				"Engaging UI",
			],
			technologies: {
				stack: "React Native",
				ui: "Custom animations",
				additional: "Optional backend for online mode",
			},
			imgLink: null,
		},
		{
			name: "Weather Forecast App",
			githubLink: "https://github.com/AKS1719/WeatherApp",
			websiteLink: null,
			description:
				"A React Native app displaying real-time weather information for various locations with a 7-day forecast and a looping background video.",
			keyFeatures: [
				"Current weather",
				"7-day forecast",
				"Search functionality",
				"Background video",
				"Responsive design",
			],
			technologies: {
				stack: "React Native",
				ui: "Custom components",
				additional: "Weather API integration",
			},
			imgLink: null,
		},
	],
	mlProjects: [
		{
			name: "Employee Burnout Prediction",
			githubLink:
				"https://github.com/AKS1719/Employee_Burnot_Prediction_Project", // Replace with your actual GitHub link if available
			websiteLink: null, // Set to null if not deployed
			description:
				"A machine learning project aimed at predicting employee burnout by analyzing work patterns, behavior data, and other related factors. The project uses various ML algorithms to identify risk levels and provide actionable insights for proactive intervention.",
			keyFeatures: [
				"Preprocessing",
				"Feature Engineering",
				"Training",
				"Evaluation",
			],
			technologies: {
				stack: "Python, scikit-learn, pandas, NumPy",
				ui: "Jupyter Notebook or command-line interface",
				additional:
					"Integration of ML models using TensorFlow or other ML libraries",
			},
			imgLink: null, // Replace with an appropriate image link or a local image path
		},
	],
};

function Projects() {
	return (
		<Flex
			p={8}
			bg={"#011940"}
			alignItems={"center"}
			justifyContent={"center"}
			flexDirection={"column"}
			height={"max-content"}
			px={[5, 10, 20]}
			py={"3rem"}
		>
			<Heading
				mb={4}
				size={{ base: "md", md: "lg", lg: "xl" }}
			>
				Projects
			</Heading>
			<Flex flexDirection={"column"}>
				<Section
					title="Web Projects"
					data={projects.webProjects}
				/>
				<Section
					title="Mobile Projects"
					data={projects.mobileProjects}
				/>
				<Section
					title="ML Projects"
					data={projects.mlProjects}
				/>
			</Flex>
		</Flex>
	);
}

function Section({ title, data }) {
	return (
		<Box mb={8}>
			<Heading
				size={{ base: "sm", md: "md", lg: "lg" }}
				mb={4}
			>
				{title}
			</Heading>
			<SimpleGrid
				columns={{ base: 1, sm: 1, md: 2 }} // Display two cards in medium screens and above
				spacing={6} // Spacing between cards
			>
				{data.map((project, index) => (
					<ProjectCard
						key={index}
						project={project}
					/>
				))}
			</SimpleGrid>
		</Box>
	);
}

function ProjectCard({ project }) {
	return (
		<Box
			p={4}
			m={2}
			border="1px solid"
			borderColor="gray.200"
			borderRadius="md"
			boxShadow="sm"
			_hover={{ boxShadow: "lg" }}
			display="flex"
			flexDirection="column"
			bgGradient="linear(to-r, teal.50, blue.50)"
			justifyContent="space-between"
		>
			{/* Carousel Section */}
			<Box
				mb={4}
				// height="150px"
				bg="gray.100"
				borderRadius="md"
				display="flex"
				alignItems="center"
				justifyContent="center"
				boxShadow="md"
			>
				<Image
					src={project.imgLink}
					borderRadius="md"
				/>
			</Box>

			{/* Project Title */}
			<Heading
				size={{ base: "sm", md: "md", lg: "lg" }}
				mb={2}
				textAlign="center"
				color="teal.800"
				fontWeight="semibold"
			>
				{project.name}
			</Heading>

			{/* Project Description */}
			<Text
				fontSize={{ base: "xs", md: "sm", lg: "md" }}
				mb={4}
				textAlign="justify"
				color="gray.700"
				flexGrow={1}
			>
				{project.description}
			</Text>

			{/* Key Features */}
			<Box
				mb={3}
				display={"flex"}
				alignItems={"center"}
				flexWrap={"wrap"}
			>
				<Text
					fontSize={{ base: "xs", md: "sm", lg: "md" }}
					fontWeight="bold"
					mb={1}
					color="teal.600"
				>
					Key Features: &nbsp;
				</Text>
				{project.keyFeatures.map((feature, index) => (
					<Kbd
						key={index}
						bg={"orange.500"}
						p={2}
					>
						{feature}
					</Kbd>
				))}
			</Box>

			{/* Technologies */}
			<Box
				mb={3}
				display={"flex"}
				alignItems={"center"}
				flexWrap={"wrap"}
			>
				<Text
					fontSize={{ base: "xs", md: "sm", lg: "md" }}
					fontWeight="bold"
					mb={1}
					color="teal.600"
				>
					Technologies: &nbsp;
				</Text>
				<Text
					color="gray.600"
					fontSize={{ base: "xs", md: "sm", lg: "md" }}
				>
					{project.technologies.stack}, {project.technologies.ui}
					{project.technologies.additional &&
						`, ${project.technologies.additional}`}
				</Text>
			</Box>

			{/* Buttons */}
			<Flex
				justify="center"
				gap={3}
				mt="auto"
			>
				{project.websiteLink && (
					<Button
						as="a"
						href={project.websiteLink}
						target="_blank"
						colorScheme="green"
						size="sm"
						borderRadius="md"
						boxShadow="md"
						_hover={{ boxShadow: "lg" }}
					>
						Live Demo
					</Button>
				)}
				{project.githubLink && (
					<Button
						as="a"
						href={project.githubLink}
						target="_blank"
						colorScheme="blue"
						size="sm"
						borderRadius="md"
						boxShadow="md"
						_hover={{ boxShadow: "lg" }}
					>
						GitHub
					</Button>
				)}
			</Flex>
		</Box>
	);
}

export default Projects;
