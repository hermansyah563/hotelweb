// humburger menu
const hamburger = document.querySelector(".hamburger");
const menuNav = document.querySelector(".navbar__box--menu");

hamburger.addEventListener('click', () => {
    menuNav.classList.toggle('active');
    hamburger.classList.toggle('menu-active');
});

// click outside
document.addEventListener('click', function (e) {
    const clickInside = menuNav.contains(e.target) || hamburger.contains(e.target);

    if (!clickInside && menuNav.classList.contains("active")) {
        menuNav.classList.remove("active");
        hamburger.classList.remove("menu-active");
    }
});


// tombol panah
  const container = document.querySelector('.testimonials__box--person');
  const nextBtn = document.querySelector('.btn-next');
  const prevBtn = document.querySelector('.btn-prev');

  const cardWidth = container.querySelector('.person__list').offsetWidth + 20; // termasuk gap

  nextBtn.addEventListener('click', () => {
    container.scrollBy({ left: cardWidth, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  });

  // Optional: Swipe support (touch)
  let startX = 0;
  container.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });

  container.addEventListener('touchend', e => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (diff > 50) container.scrollBy({ left: cardWidth, behavior: 'smooth' });
    else if (diff < -50) container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  });

// slide mulai dari tengah
  window.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("testimonialSlider");
    const items = container.querySelectorAll(".person__list");

    if (items.length > 0) {
      const middleIndex = Math.floor(items.length / 2);
      const middleItem = items[middleIndex];
      
      // Hitung scroll agar item tengah pas di tengah viewport container
      const containerCenter = container.offsetWidth / 2;
      const itemCenter = middleItem.offsetLeft + (middleItem.offsetWidth / 2);
      const scrollPosition = itemCenter - containerCenter;

      container.scrollLeft = scrollPosition;
    }
  });

  window.addEventListener('load', () => {
  document.body.classList.add('show');
});

// Jalankan saat DOM siap
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in-section");

  const appearOptions = {
    threshold: 0.1, // minimal 10% elemen terlihat
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      appearOnScroll.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});




// document.addEventListener('DOMContentLoaded', () => {
//   const faders = document.querySelectorAll('.fade-in-section');

//   const options = {
//     threshold: 0.1
//   };

//   const appearOnScroll = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if(entry.isIntersecting){
//         entry.target.classList.add('visible');
//         observer.unobserve(entry.target);
//       }
//     });
//   }, options);

//   faders.forEach(fader => {
//     appearOnScroll.observe(fader);
//   });
// });


// window.addEventListener('load', () => {
//       document.body.classList.add('show');
//     });

//     document.addEventListener('DOMContentLoaded', () => {
//       const faders = document.querySelectorAll('.fade-in-section');

//       const options = {
//         threshold: 0.1
//       };

//       const appearOnScroll = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//           if(entry.isIntersecting){
//             entry.target.classList.add('visible');
//             observer.unobserve(entry.target);
//           }
//         });
//       }, options);

//       faders.forEach(fader => {
//         appearOnScroll.observe(fader);
//       });
//     });
