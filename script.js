// Day/Night mode toggle
const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('night');
});

// Scroll reveal animation
const blocks = document.querySelectorAll('section.block');
const revealBlocks = () => {
  blocks.forEach(block => {
    const top = block.getBoundingClientRect().top;
    if(top < window.innerHeight - 100) {
      block.classList.add('show');
    }
  });
};
window.addEventListener('scroll', revealBlocks);
window.addEventListener('load', revealBlocks);
