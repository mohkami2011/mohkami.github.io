document.addEventListener("DOMContentLoaded", () => {
  const comingSoon = document.getElementById("comingSoon");
  const imageOverlay = document.getElementById("imageOverlay");
  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");
  const line3 = document.getElementById("line3");

  // مرحله 1: نمایش Coming Soon
  comingSoon.style.opacity = 1;

  setTimeout(() => {
    // مرحله 2: تصویر پشت‌زمینه با fade in ظاهر شود
    imageOverlay.style.opacity = 1;

    // مرحله 3: نمایش شعارها زیر Coming Soon
    setTimeout(() => {
      line1.classList.remove("hidden");
      line1.style.opacity = 1;
    }, 1000);

    setTimeout(() => {
      line2.classList.remove("hidden");
      line2.style.opacity = 1;
    }, 2500);

    setTimeout(() => {
      line3.classList.remove("hidden");
      line3.style.opacity = 1;
    }, 4000);
  }, 1000);
});
