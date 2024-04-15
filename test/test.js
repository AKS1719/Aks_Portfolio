document.addEventListener('DOMContentLoaded', function() {
  const skills = document.querySelectorAll('.skill-progress');

  // Function to animate skills when they come into the viewport
  function animateSkills(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillBar = entry.target;
        const skillPercentage = parseInt(skillBar.getAttribute('data-percentage'));
        skillBar.style.width = skillPercentage + '%';
      }
    });
  }

  // Set up the Intersection Observer
  const observer = new IntersectionObserver(animateSkills, {
    root: null,
    rootMargin: '0px',
    threshold: 0.3 // Adjust the threshold as needed
  });

  // Observe each skill progress bar
  skills.forEach(skill => {
    observer.observe(skill);
  });
});
