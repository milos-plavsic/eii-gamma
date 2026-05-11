const toggle = document.querySelector("[data-nav-toggle]");
const links = document.querySelector("[data-nav-links]");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const year = document.querySelector("[data-year]");
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const iconHref = document.querySelector(".eii-gamma-shell")
  ? "/data/files/eiilogo.jpg"
  : "eiilogo.jpg";

for (const rel of ["icon", "apple-touch-icon"]) {
  let icon = document.head.querySelector(`link[rel="${rel}"]`);
  if (!icon) {
    icon = document.createElement("link");
    icon.rel = rel;
    document.head.appendChild(icon);
  }
  icon.href = iconHref;
}
