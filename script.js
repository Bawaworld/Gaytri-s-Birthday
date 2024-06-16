// script.js
document.addEventListener('DOMContentLoaded', function() {
  const openBoxBtn = document.getElementById('open-box-btn');
  const giftContent = document.getElementById('gift-content');

  openBoxBtn.addEventListener('click', function() {
    openBoxBtn.style.display = 'none';
    giftContent.style.display = 'block';
    animateGiftOpen();
  });

  function animateGiftOpen() {
    // You can add your animations here using CSS classes or JavaScript animations
    // Example: Add a CSS class to rotate the box or animate its opening
    // giftBox.classList.add('animate-open');
  }
});
