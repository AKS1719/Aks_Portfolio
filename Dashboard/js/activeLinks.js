// Function to check if any part of a section is in the viewport by at least 30%
const isSectionPartiallyInView = (elem) => {
    const rect = elem.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const threshold = windowHeight * 0.5; // 30% of the viewport height

    return rect.bottom >= threshold && rect.top <= windowHeight - threshold;
};

// Function to add active class to corresponding nav link
const setActiveNav = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#my-navbar ul a');
    
    sections.forEach((section, index) => {
        const navLink = navLinks[index];
        
        if (isSectionPartiallyInView(section)) {
            navLink.parentElement.classList.add('active');
        } else {
            navLink.parentElement.classList.remove('active');
        }
    });
};

// Add event listener for scroll event to update active nav link
document.querySelector(".my-container").addEventListener('scroll', setActiveNav);

// Initial call to set active nav link based on initial position
setActiveNav();
