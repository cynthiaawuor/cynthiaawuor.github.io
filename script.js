const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const pageName = link.dataset.page;

    navLinks.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');

    pages.forEach((page) => page.classList.remove('active'));

    const targetPage = document.getElementById(pageName);
    if (targetPage) {
      targetPage.classList.add('active');
    }
  });
});

const filterButtons = document.querySelectorAll('.filter');
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
  });
});
