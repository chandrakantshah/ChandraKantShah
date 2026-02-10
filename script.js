// Night and Day mode toggle
const dayModeBtn = document.getElementById('dayMode');
const nightModeBtn = document.getElementById('nightMode');

dayModeBtn.addEventListener('click', () => {
  document.body.classList.remove('night');
});

nightModeBtn.addEventListener('click', () => {
  document.body.classList.add('night');
});

// Scroll reveal animation
const blocks = document.querySelectorAll('section.block');
const revealBlocks = () => {
  blocks.forEach(block => {
    const top = block.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      block.classList.add('show');
    }
  });
};
window.addEventListener('scroll', revealBlocks);
window.addEventListener('load', revealBlocks);
