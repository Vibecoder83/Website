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

// Load all sections
loadComponent("header", "./components/header.html");
loadComponent("hero", "./components/hero.html");
loadComponent("preview", "./components/preview.html");
loadComponent("services", "./components/services.html");
loadComponent("portfolio", "./components/portfolio.html");
loadComponent("process", "./components/process.html");
loadComponent("reviews", "./components/reviews.html");
loadComponent("cta", "./components/cta.html");
loadComponent("footer", "./components/footer.html");
