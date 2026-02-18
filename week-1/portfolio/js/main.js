const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.dataset.theme = prefersDark ? 'dark' : 'light';
}

const themeButtons = document.querySelectorAll('.theme-btn');

themeButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const value = button.dataset.themeValue;

    if (value === 'system') {
      localStorage.removeItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.dataset.theme = prefersDark ? 'dark' : 'light';
    } else {
      localStorage.setItem('theme', value);
      document.documentElement.dataset.theme = value;
    }

    updateFrames(document.documentElement.dataset.theme);
    updateBackgrounds(document.documentElement.dataset.theme);
    updateIsland(document.documentElement.dataset.theme);
  });
});

const frames = document.querySelectorAll('.project-frame');

function updateFrames(theme) {
  frames.forEach(function(frame) {
    if (theme === 'dark') {
      frame.src = 'https://i.imgur.com/HkyEazi.png';
    } else {
      frame.src = 'https://i.imgur.com/WeYL4Ex.png';
    }
  });
}

const backgrounds = document.querySelectorAll('.projects-background-1, .projects-background-2');

function updateBackgrounds(theme) {
  backgrounds.forEach(function(background) {
    if (theme === 'dark') {
      background.src = 'https://i.imgur.com/NgDw2z6.png';
    } else {
      background.src = 'https://i.imgur.com/jjK9k9B.png'
    }
  })
}

const island = document.querySelector('.projects-title-img');

function updateIsland(theme) {
  if (theme === 'dark') {
    island.src = 'https://i.imgur.com/BaIuiZK.png';
  } else {
    island.src = 'https://i.imgur.com/3Eeu2OR.png';
  }
}

updateFrames(document.documentElement.dataset.theme);
updateBackgrounds(document.documentElement.dataset.theme);
updateIsland(document.documentElement.dataset.theme);