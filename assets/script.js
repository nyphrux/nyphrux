const toggle = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const root = document.documentElement;

const setTheme = (dark) => {
  root.classList.add('theme-transition');
  root.setAttribute('data-theme', dark ? 'dark' : 'light');
  toggle.textContent = dark ? '☀️' : '🌙';

  setTimeout(() => {
    root.classList.remove('theme-transition');
  }, 400);
};

let darkMode = localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && prefersDark);
setTheme(darkMode);

toggle.onclick = () => {
  darkMode = !darkMode;
  setTheme(darkMode);
  localStorage.setItem('theme', darkMode ? 'dark' : 'light');
};
