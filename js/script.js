function loadComponent(id, file) {
  fetch(file)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to load ${file}`);
      return res.text();
    })
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(err => console.error(err));
}

const components = [
  ["header", "./components/header.html"],
  ["hero", "./components/hero.html"],
  ["preview", "./components/preview.html"],
  ["services", "./components/services.html"],
  ["portfolio", "./components/portfolio.html"],
  ["process", "./components/process.html"],
  ["reviews", "./components/reviews.html"],
  ["cta", "./components/cta.html"],
  ["footer", "./components/footer.html"]
];

components.forEach(([id, file]) => loadComponent(id, file));

window.addEventListener('scroll', () => {
  let current = '';
  document.querySelectorAll('[id]').forEach(section => {
    if (window.scrollY >= section.offsetTop - 80) current = section.id;
  });

  const fallback = {'process': 'portfolio'};
  if (fallback[current]) current = fallback[current];

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});

function switchTab(tab) {
  document.getElementById('frame-before').classList.toggle('hidden', tab !== 'before');
  document.getElementById('frame-after').classList.toggle('hidden', tab !== 'after');
  document.getElementById('tab-before').classList.toggle('active', tab === 'before');
  document.getElementById('tab-after').classList.toggle('active', tab === 'after');
}