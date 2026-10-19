const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-links a, .nav-btn');

  // Show toogle menu when Hamburger clicked
  hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Change icon, bar -> close (X)
    const icon = hamburgerBtn.querySelector('i');
    if (navMenu.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    } else {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  });

  // Automatically close toogle menu when one of the menu clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      const icon = hamburgerBtn.querySelector('i');
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    });
  });

  // Ambil elemen form berdasarkan ID secara langsung
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {

      e.preventDefault();

      const name = document.getElementById('fullName').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      const payload = {
        name: name,
        email: email,
        subject: "Portfolio Contact - From " + subject,
        message: message
      };

      console.log('Sending payload:', payload);

      fetch('https://formspree.io/f/mkjgplkk', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then(response => {
        if (response.ok) {
          console.log('Message sent successfully!');
          contactForm.reset();
        } else {
          console.log('Failed to send message.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while sending the message.');
      });
    });
  }

document.querySelectorAll('.swiper-container').forEach((container) => {

    const swiperElement = container.querySelector('.swiper');

    new Swiper(swiperElement, {
        loop: true,

        navigation: {
            nextEl: container.querySelector('.swiper-button-next'),
            prevEl: container.querySelector('.swiper-button-prev'),
        },

        pagination: {
            el: container.querySelector('.swiper-pagination'),
            clickable: true,
        },
    });

});