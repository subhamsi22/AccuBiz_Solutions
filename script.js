window.addEventListener('load', () => {
  gsap.from('.header', { y: -30, opacity: 0, duration: 0.8, ease: 'power3.out' });
  gsap.from('.hero-text > *', { y: 30, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out', delay: 0.1 });
  gsap.from('.hero-panel', { x: 40, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.2 });
  gsap.from('.service-card', { y: 30, opacity: 0, duration: 0.8, stagger: 0.07, ease: 'power3.out', delay: 0.3 });
  gsap.from('.form-panel', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.4 });
});

// function sendWhatsApp(event) {
//   event.preventDefault();

//   const name = document.getElementById('name').value.trim();
//   const phone = document.getElementById('phone').value.trim();
//   const service = document.getElementById('service').value;
//   const message = document.getElementById('message').value.trim();

//   if (!name || !phone || !service) {
//     alert('Please enter your naam, mobile number, and select a requirement.');
//     return;
//   }

//   if (!/^[0-9]{10}$/.test(phone)) {
//     alert('Please enter a valid 10-digit mobile number.');
//     return;
//   }

//   const text = encodeURIComponent(
//     `Name: ${name}\nMobile: ${phone}\nRequirement: ${service}\nMessage: ${message}`
//   );

// //   const url = `https://wa.me/8001419293?text=${text}`;
// //   window.open(url, '_blank');
// }
