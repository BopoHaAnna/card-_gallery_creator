function slidesPlugin() {
  const slides = document.querySelectorAll(".slide");
  const activeSlide = Math.floor(Math.random() * slides.length);

  for (const [index, slide] of slides.entries()) {
    slide.addEventListener("click", () => {
      clearActiveClasses();
      slide.classList.add("active");
    });

    if (index === activeSlide) {
      slide.classList.add("active");
    }
  }

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}

slidesPlugin();
