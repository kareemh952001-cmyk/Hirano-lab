const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.4,                // 40% of element must be visible
  rootMargin: "0px 0px -120px 0px" // pushes trigger lower
});

elements.forEach(el => observer.observe(el));
