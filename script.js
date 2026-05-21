document.addEventListener("DOMContentLoaded", () => {
  const printBtn = document.getElementById("printBtn");
  const statNumbers = document.querySelectorAll(".stat-number");

  statNumbers.forEach((element) => {
    const target = Number(element.dataset.count || 0);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 24));

    const timer = window.setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        window.clearInterval(timer);
      }
      element.textContent = String(current);
    }, 35);
  });

  if (printBtn) {
    printBtn.addEventListener("click", () => window.print());
  }
});
