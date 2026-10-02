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
      // 1. Tahan submit bawaan agar halaman TIDAK reload
      e.preventDefault();

      // 2. Ambil nilai input berdasarkan ID masing-masing
      const name = document.getElementById('fullName').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      // 3. Susun data payload dengan kunci standar yang dikenali Formspree (name, email, subject, message)
      const payload = {
        name: name,
        email: email,
        subject: "Portfolio Contact - From " + subject,
        message: message
      };

      console.log('Sending payload:', payload);

      // 4. Kirim data ke Formspree via Fetch API
      fetch('https://formspree.io/f/mkjgplkk', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json' // Memastikan tidak terjadi redirect halaman
        },
        body: JSON.stringify(payload)
      })
      .then(response => {
        if (response.ok) {
          console.log('Message sent successfully!');
          contactForm.reset(); // Kosongkan isian form
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

  // https://drive.google.com/file/d/1i5RZeGPJVeC1w82JqgTtIWcI36E5X3wO/view?usp=drive_link
  // https://drive.google.com/file/d/1jXuG_Wrmy6_VFMkEDNRwYIFXLG5xgX0G/view?usp=drive_link
  // https://drive.google.com/file/d/1IHIVGIXbLFxs5tT5BJ_rbomVWYO0Cgyy/view?usp=drive_link
  // https://drive.google.com/file/d/1yoEYhhWYwxxKJneqiTGhLdcBilTL4R8R/view?usp=drive_link
  // https://drive.google.com/file/d/10X_N-W6vwhMD1H5WzQkdpF9cOunJ8LCw/view?usp=drive_link
  // https://drive.google.com/file/d/1qwGZ93vbC2gr6Nt6jJO7U6ng6Ep17PcQ/view?usp=drive_link
  // https://drive.google.com/file/d/1nuI3GErYqPHnpKiJfhWwZsPAhlLSoU5z/view?usp=drive_link


// const swiper = new Swiper('.swiper', {
//         loop: true,

//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },

//         pagination: {
//             el: '.swiper-pagination',
//         },
//  });

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

// Cari semua elemen dengan kelas .swiper
// document.querySelectorAll('.swiper').forEach((swiperContainer) => {
//   new Swiper(swiperContainer, {
//     direction: 'horizontal',
//     loop: true,
//     pagination: {
//       el: swiperContainer.querySelector('.swiper-pagination'),
//       clickable: true,
//     },
//     navigation: {
//       nextEl: swiperContainer.querySelector('.swiper-button-next'),
//       prevEl: swiperContainer.querySelector('.swiper-button-prev'),
//     },
//   });
// });

// document.querySelectorAll('.swiper').forEach((swiperContainer) => {
//   const nextButton = swiperContainer.querySelector('.swiper-button-next');
//   const prevButton = swiperContainer.querySelector('.swiper-button-prev');
//   const pagination = swiperContainer.querySelector('.swiper-pagination');

//   new Swiper(swiperContainer, {
//     direction: 'horizontal',
//     loop: true,

//     pagination: {
//       el: pagination,
//       clickable: true,
//     },

//     navigation: {
//       nextEl: nextButton,
//       prevEl: prevButton,
//     },
//   });
// });