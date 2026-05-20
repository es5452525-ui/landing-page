// Smooth nav highlight on scroll
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.nav__links a');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

// Add .active style inline since CSS can't target it without knowing the class
const style = document.createElement('style');
style.textContent = '.nav__links a.active { color: #e8e8f0; }';
document.head.appendChild(style);

// Contact form mock submit
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  setTimeout(() => {
    e.target.reset();
    btn.textContent = 'Send Message';
    btn.disabled = false;
    document.getElementById('form-success').hidden = false;
    setTimeout(() => { document.getElementById('form-success').hidden = true; }, 4000);
  }, 1200);
}

// Fade-in cards on scroll
const cards = document.querySelectorAll('.card, .gallery__item, .stat');
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(24px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  fadeObserver.observe(card);
});
