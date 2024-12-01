import { Flex, Box, Tooltip, Image, Heading } from "@chakra-ui/react";
import React from "react";

function Skills() {
	// Array of badge URLs and labels
	const skills = [
		{
			src: "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
			label: "C++",
		},
		{
			src: "https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white",
			label: "C",
		},
		{
			src: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
			label: "CSS3",
		},
		{
			src: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
			label: "HTML5",
		},
		{
			src: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
			label: "Java",
		},
		{
			src: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
			label: "JavaScript",
		},
		{
			src: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
			label: "Python",
		},
		{
			src: "https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white",
			label: "GitHub Pages",
		},
		{
			src: "https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white",
			label: "Render",
		},
		{
			src: "https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white",
			label: "Vercel",
		},
		{
			src: "https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7",
			label: "Netlify",
		},
		{
			src: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
			label: "Express.js",
		},
		{
			src: "https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white",
			label: "Chakra UI",
		},
		{
			src: "https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens",
			label: "JWT",
		},
		{
			src: "https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white",
			label: "React Hook Form",
		},
		{
			src: "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white",
			label: "Redux",
		},
		{
			src: "https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white",
			label: "React Router",
		},
		{
			src: "https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101",
			label: "Socket.io",
		},
		{
			src: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
			label: "TailwindCSS",
		},
		{
			src: "https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react",
			label: "Context API",
		},
		{
			src: "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",
			label: "MySQL",
		},
		{
			src: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
			label: "MongoDB",
		},
		{
			src: "https://img.shields.io/badge/Gimp-657D8B?style=for-the-badge&logo=gimp&logoColor=FFFFFF",
			label: "Gimp",
		},
		{
			src: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
			label: "Git",
		},
		{
			src: "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
			label: "GitHub",
		},
		{
			src: "https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black",
			label: "Babel",
		},
		{
			src: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white",
			label: "Postman",
		},
		{
			src: "https://img.shields.io/badge/Portfolio-%23000000.svg?style=for-the-badge&logo=firefox&logoColor=#FF7139",
			label: "Portfolio",
		},
	];

	return (
		<Flex
			bg="#011940"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			p={6}
			color="white"
			// minHeight="100vh"
			h={"max-content"}
			
			px={[5, 10, 20]}
		>
			<Heading
				as="h1"
				size="2xl"
				mb="2rem"
				color="white"
			>
				Skills
			</Heading>
			<Flex
				wrap="wrap"
				justify="center"
				gap={4}
			>
				{skills.map((skill, index) => (
					<Tooltip
						key={index}
						label={skill.label}
						bg="gray.700"
						color="white"
					>
						<Box
							w="auto"
							p={4}
							m={{base:2,md:2}}
							_hover={{
								transform: "scale(1.05)",
								boxShadow: "lg",
							}}
							transition="all 0.3s ease-in-out"
						>
							<Image
								src={skill.src}
								alt={skill.label}
								m={{base:0,md:4}}
								transform="scale(1.5)"
							/>
						</Box>
					</Tooltip>
				))}
			</Flex>
		</Flex>
	);
}

export default Skills;
