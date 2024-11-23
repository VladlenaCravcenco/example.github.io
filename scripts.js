document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll functionality
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });

  // Form submission (dummy handler)
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    form.reset();
  });

  // Floating circles interaction
  const circles = document.querySelectorAll('.floating-circle');

  circles.forEach(circle => {
    circle.addEventListener('mousemove', (e) => {
      const rect = circle.getBoundingClientRect();
      const offsetX = e.clientX - (rect.left + rect.width / 2);
      const offsetY = e.clientY - (rect.top + rect.height / 2);

      // Calculate a "push" effect
      const pushX = Math.min(Math.max(offsetX * 0.5, -50), 50);
      const pushY = Math.min(Math.max(offsetY * 0.5, -50), 50);

      circle.style.transform = `translate(${pushX}px, ${pushY}px) scale(1.2)`;
    });

    circle.addEventListener('mouseleave', () => {
      // Reset position and scale when the cursor leaves
      circle.style.transform = '';
    });
  });
});