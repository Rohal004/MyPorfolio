document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Back to top button functionality
  const scrollTopButton = document.getElementById('scroll-top');
  scrollTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Dynamic typing effect in hero section
 /* const typedElement = document.querySelector('.typed');
  if (typedElement) {
    const typedItems = typedElement.getAttribute('data-typed-items').split(',');
    let typedIndex = 0;
    let charIndex = 0;
    let typingInterval;*/

    function type() {
      if (charIndex < typedItems[typedIndex].length) {
        typedElement.textContent += typedItems[typedIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
      } else {
        setTimeout(erase, 2000);
      }
    }

    function erase() {
      if (charIndex > 0) {
        typedElement.textContent = typedItems[typedIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
      } else {
        typedIndex = (typedIndex + 1) % typedItems.length;
        setTimeout(type, 500);
      }
    }

    type();
  }
);
