// Google tag (gtag.js)
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-QB98GM5CQ3');

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Scroll reveal animation
const sections = document.querySelectorAll('.section');
const revealSection = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight * 0.8) {
      section.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', revealSection);
revealSection();

// Smooth scrolling for nav links
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Particle Animation for Home Section
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const numberOfParticles = 100;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.glow = Math.random() * 0.5 + 0.3;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Bounce off edges
    if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
    if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
  }

  draw() {
    ctx.fillStyle = `rgba(99, 102, 241, ${this.glow})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Initialize particles
for (let i = 0; i < numberOfParticles; i++) {
  particlesArray.push(new Particle());
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();

    // Connect particles if they are close
    for (let j = i; j < particlesArray.length; j++) {
      const dx = particlesArray[i].x - particlesArray[j].x;
      const dy = particlesArray[i].y - particlesArray[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        ctx.strokeStyle = `rgba(99, 102, 241, ${1 - distance / 100})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animateParticles);
}

// Handle window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

animateParticles();

// Handle form submission
// document.querySelector('.contact-form').addEventListener('submit', async (e) => {
//   e.preventDefault();

//   const name = document.querySelector('.contact-form input[placeholder="Your Name"]').value.trim();
//   const email = document.querySelector('.contact-form input[placeholder="Your Email"]').value.trim();
//   const message = document.querySelector('.contact-form textarea[placeholder="Your Message"]').value.trim();

//   // Basic client-side validation
//   if (!name || !email || !message) {
//     alert('Please fill in all fields');
//     return;
//   }

//   const formData = { name, email, message };

//   try {
//     const response = await fetch('http://localhost:5000/api/contact', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     const result = await response.json();
//     if (response.ok) {
//       alert('Message sent successfully!');
//       document.querySelector('.contact-form').reset();
//     } else {
//       alert(`Error: ${result.message}`);
//     }
//   } catch (error) {
//     console.error('Form submission error:', error);
//     alert('Failed to send message. Please check your network or try again later.');
//   }
// });




// Handle form submission
document.querySelector('.contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }

    const formData = { name, email, message };

    try {
        const response = await fetch('http://localhost:5000/api/contact', { // Ensure port 5000 matches server.js
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (response.ok) {
            alert('Message sent successfully!');
            document.querySelector('.contact-form').reset();
        } else {
            alert(`Error: ${result.message}`);
        }
    } catch (error) {
        console.error('Form submission error:', error);
        alert('Failed to send message. Please check your network or try again later.');
    }
});