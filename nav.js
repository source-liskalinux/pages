const navToggleCheckbox = document.getElementById('nav-toggle-checkbox');
const navToggleLabel = document.querySelector('.nav-toggle');
const mainMenu = document.getElementById('main-menu');
const navBackdrop = document.querySelector('.nav-backdrop');

if (navToggleCheckbox && navToggleLabel && mainMenu) {
  function updateLabelState() {
    const isOpen = navToggleCheckbox.checked;
    navToggleLabel.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.classList.toggle('nav-open', isOpen);
  }

  navToggleCheckbox.addEventListener('change', updateLabelState);
  updateLabelState();
}

document.getElementById("year").textContent = new Date().getFullYear();

