document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  // Toggle le menu sur clic
  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  // Ferme le menu quand on redimensionne l'écran
  window.addEventListener("resize", function () {
    if (window.innerWidth > 992) {
      // Bootstrap LG (large)
      mobileMenu.classList.add("hidden"); // Cache le menu mobile
    }
  });

  // Ferme le menu lorsqu'un lien est cliqué (optionnel)
  document.querySelectorAll("#mobile-menu a").forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.add("hidden");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Effet de survol sur la navbar
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () =>
      link.classList.add("text-primary")
    );
    link.addEventListener("mouseleave", () =>
      link.classList.remove("text-primary")
    );
  });

  // Effet d'apparition des sections au scroll
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => observer.observe(section));

  // Bouton de retour en haut
  const backToTop = document.createElement("button");
  backToTop.textContent = "⬆";
  backToTop.classList.add(
    "back-to-top",
    "btn",
    "btn-primary",
    "rounded-circle"
  );
  document.body.appendChild(backToTop);

  backToTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });
});
