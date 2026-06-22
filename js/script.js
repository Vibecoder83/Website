document.body.innerHTML = "<h1 style='color:red'>JS IS RUNNING</h1>";

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
