function renderPostsChart() {
  const canvas = document.getElementById("postsChart");
  if (!canvas) return;

  // Chart.js が読み込めてないとここで止める（原因切り分けにもなる）
  if (typeof Chart === "undefined") {
    console.error("Chart.js is not loaded");
    return;
  }

  const labels = JSON.parse(canvas.dataset.labels || "[]");
  const counts = JSON.parse(canvas.dataset.counts || "[]");

  // Turbo戻りなどの二重描画防止
  if (canvas._chart) canvas._chart.destroy();

  const ctx = canvas.getContext("2d");
  canvas._chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [{
        label: "投稿数",
        data: counts,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true, ticks: { precision: 0 } }
      }
    }
  });
}

document.addEventListener("turbo:load", renderPostsChart);
document.addEventListener("DOMContentLoaded", renderPostsChart);
import "./posts_chart"