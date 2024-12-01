import React, { useState, useEffect } from "react";
import { Text, Box } from "@chakra-ui/react";

const TypingEffect = () => {
    const jobTitles = [
        "Web Developer",
        "React Native Developer",
        "3D Graphics Enthusiast",
    ];
    const [currentText, setCurrentText] = useState("");
    const [currentJobIndex, setCurrentJobIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        const handleTyping = () => {
            const currentJob = jobTitles[currentJobIndex];

            if (isDeleting) {
                setCurrentText(currentJob.slice(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
                setTypingSpeed(50); // Faster speed when deleting
            } else {
                setCurrentText(currentJob.slice(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
                setTypingSpeed(100); // Normal speed when typing
            }

            // Switch to the next word or start deleting
            if (!isDeleting && charIndex === currentJob.length) {
                setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
            } else if (isDeleting && charIndex === 0) {
                // Clear text and move to the next job
                setIsDeleting(false);
                setCurrentText(""); // Clear the text immediately to avoid flickering
                setCurrentJobIndex((prev) => (prev + 1) % jobTitles.length);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, currentJobIndex, jobTitles, typingSpeed]);

    return (
        <Box>
            <Text as={'span'} fontSize={{ base: "lg", sm: "xl", md: "2xl" }}>
                <span style={{ color: "#67E6DC" }}>{currentText}</span>
                <span style={{ color: "gray" }}>|</span>
            </Text>
        </Box>
    );
};

export default TypingEffect;
