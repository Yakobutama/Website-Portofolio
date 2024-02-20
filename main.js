/* ============== toggle icon navbar ==================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/* ============== scroll section active link ==================== */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });
  /* ============== sticky navbar ==================== */
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);
  //   =============================================================

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

/* ============== scroll reveal ==================== */
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* ============== typed js ==================== */
const typed = new Typed('.multiple-text', {
  strings: ['Informatics Engineering Student'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});







function sendEmail() {
  // Ambil nilai dari formulir
  var fullName = document.querySelector('input[name="Full Name"]').value;
  var emailAddress = document.querySelector('input[name="Email Address"]').value;
  var mobileNumber = document.querySelector('input[name="Mobile Number"]').value;
  var emailSubject = document.querySelector('input[name="Email Subject"]').value;
  var yourMessage = document.querySelector('textarea[name="Your Message"]').value;

  // Buat link email
  var mailtoLink = 'mailto:yakobutama1903@gmail.com?subject=' + encodeURIComponent(emailSubject) +
    '&body=' + encodeURIComponent('Full Name: ' + fullName + '\nEmail Address: ' + emailAddress +
    '\nMobile Number: ' + mobileNumber + '\n\nMessage:\n' + yourMessage);

  // Buka link email
  window.location.href = mailtoLink;
}
