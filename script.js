document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");
  const slides = document.querySelectorAll(".slide");
  const lines = document.querySelectorAll(".line");
  
  let currentSlide = 0;

  // Start slideshow after Coming Soon fades out
  setTimeout(() => {
    overlay.style.display = "none";
    slides[0].classList.add("active");

    // Loop slideshow
    setInterval(() => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }, 4000); // change every 4s

    // Show taglines one by one
    lines.forEach((line, index) => {
      setTimeout(() => {
        line.classList.add("show");
      }, 1000 + index * 2500);
    });

  }, 6000); // after Coming Soon animation
});