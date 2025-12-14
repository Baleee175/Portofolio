function openProject(url){window.open(url,'_blank')}


document.getElementById('contactForm').addEventListener('submit',e=>{
e.preventDefault();
alert('Thank you! Your message has been sent.');
e.target.reset();
});

const toggleBtn = document.getElementById('toggleCertificateBtn');
const extraCertificates = document.querySelectorAll('.extra-certificate');
let isExpanded = false;

toggleBtn.addEventListener('click', () => {
  isExpanded = !isExpanded;

  extraCertificates.forEach(card => {
    card.style.display = isExpanded ? 'block' : 'none';
  });

  toggleBtn.textContent = isExpanded
    ? 'Show Less Certificates'
    : 'View More Certificates';
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
