document.addEventListener("DOMContentLoaded", () => {
  const comingSoon = document.getElementById("comingSoon");
  const background = document.getElementById("background");
  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");
  const line3 = document.getElementById("line3");

  // مرحله 1: نمایش Coming Soon
  comingSoon.style.opacity = 1;

  setTimeout(() => {
    // مرحله 2: محو شدن Coming Soon
    comingSoon.style.opacity = 0;

    setTimeout(() => {
      comingSoon.style.display = "none";

      // مرحله 3: نمایش تصویر پس زمینه
      background.classList.remove("hidden");
      background.style.opacity = 1;

      // مرحله 4: نمایش خطوط شعار به ترتیب
      setTimeout(() => {
        line1.classList.remove("hidden");
        line1.style.opacity = 1;
      }, 1000);

      setTimeout(() => {
        line2.classList.remove("hidden");
        line2.style.opacity = 1;
      }, 3000);

      setTimeout(() => {
        line3.classList.remove("hidden");
        line3.style.opacity = 1;
      }, 5000);
    }, 2000);
  }, 2000);
});
