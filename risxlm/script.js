document.addEventListener('DOMContentLoaded', function() {
  const plus = document.querySelector('.plus');
  const pop = document.querySelector('.pop');
  const close = document.querySelector('.close');

  plus.addEventListener('click', function() {
    pop.style.display = 'block';  // Ensures the element is visible for the animation
    setTimeout(() => {
      pop.classList.add('open');
    }, 10);  // Add a small delay to allow the transition to be applied
  });

  close.addEventListener('click', function() {
    pop.classList.remove('open');
    setTimeout(() => {
      pop.style.display = 'none';
    }, 400);  // Match the delay with the transition duration
  });

  // Close pop-up when clicking anywhere outside of it
  document.addEventListener('click', function(event) {
    if (pop.classList.contains('open') && !pop.contains(event.target) && !plus.contains(event.target)) {
      pop.classList.remove('open');
      setTimeout(() => {
        pop.style.display = 'none';
      }, 400);  // Match the delay with the transition duration
    }
  });
});