// main.js

document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // Sidebar active link highlight
  // =========================
  const sidebarLinks = document.querySelectorAll(".side-bar .nav-link");
  const currentPage = window.location.pathname.split("/").pop();

  sidebarLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // =========================
  // Analytics Charts (only if Chart.js is loaded and canvas exists)
  // =========================
  if (typeof Chart !== "undefined") {
    const root = getComputedStyle(document.documentElement);
    const accent = root.getPropertyValue('--color-accent').trim();
    const accentLight = root.getPropertyValue('--color-accent-light').trim();
    const accentDark = root.getPropertyValue('--color-accent-dark').trim();
    const textColor = root.getPropertyValue('--color-text').trim();

    // --- Bar Chart ---
    const barCanvas = document.getElementById("barChart");
    if (barCanvas) {
      new Chart(barCanvas, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Total Users',
            data: [150, 210, 1, 12, 30, 20, 46,39,90,87,125,101],
            backgroundColor: accentLight,
            borderColor: accent,
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false, // fill container
          plugins: {
            legend: { labels: { color: textColor } }
          },
          scales: {
            x: { ticks: { color: textColor }, grid: { color: "#333" } },
            y: { ticks: { color: textColor }, grid: { color: "#333" } }
          }
        }
      });
    }

    // --- Pie Chart ---
    const pieCanvas = document.getElementById("pieChart");
    if (pieCanvas) {
      new Chart(pieCanvas, {
        type: 'pie',
        data: {
          labels: ['Open', 'Closed', 'In Progress'],
          datasets: [{
            data: [12, 20, 8],
            backgroundColor: [accent, accentLight, accentDark]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { labels: { color: textColor } } }
        }
      });
    }
  }

});