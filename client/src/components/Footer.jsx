import React from "react";
import { Box, Text, Flex, Link, Icon, HStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

function Footer() {
	return (
		<Box
			bg="#011940"
			color="white"
			py={6}
		>
			{/* Container */}
			<Flex
				maxW="1200px"
				mx="auto"
				px={6}
				direction="column"
				align="center"
				textAlign="center"
			>
				{/* Social Links */}
				<HStack
					spacing={6}
					mb={4}
				>
					<Link
						href="https://github.com/aks1719"
						isExternal
					>
						<Icon
							as={FaGithub}
							boxSize={6}
							_hover={{ color: "blue.400" }}
						/>
					</Link>
					<Link
						href="https://linkedin.com/in/akshatkumarsinha1704"
						isExternal
					>
						<Icon
							as={FaLinkedin}
							boxSize={6}
							_hover={{ color: "blue.400" }}
						/>
					</Link>
					<Link href="mailto:kumarsinhaakshat8@gmail.com">
						<Icon
							as={FaEnvelope}
							boxSize={6}
							_hover={{ color: "blue.400" }}
						/>
					</Link>
				</HStack>

				{/* Copyright */}
				<Text fontSize="sm">
					&copy; {new Date().getFullYear()} Akshat Kumar Sinha. All
					rights reserved.
				</Text>
			</Flex>
		</Box>
	);
}

export default Footer;
