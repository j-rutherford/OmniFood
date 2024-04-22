const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

const openNav = () => {
  const header = document.getElementById("header");
  header.classList.add("nav-open");
  () => disableScroll();
};
const hideNav = () => {
  const header = document.getElementById("header");
  header.classList.remove("nav-open");
  () => enableScroll();
};

const btnShowNav = document.querySelector(".btn-mobile-nav");
const elHeader = document.querySelector(".header");
btnShowNav.addEventListener("click", () => {
  elHeader.classList.toggle("nav-open");
});

const navLinks = document.querySelectorAll(".main-nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    elHeader.classList.remove("nav-open");
  });
});

//sticky nav
const sectionHero = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHero);
