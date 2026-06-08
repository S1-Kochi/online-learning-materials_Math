// function MPI_showTop() {
//   alert("TOP呼ばれた");
// }

// function MPI_showBottom() {
//   alert("BOTTOM呼ばれた");
// }

function nextStep(step) {
  document.querySelectorAll(".step").forEach(el => {
    el.classList.add("hidden");
  });

  const target = document.getElementById("step" + step);
  if (target) {
    target.classList.remove("hidden");
  }

    // ページの先頭へ移動
  window.scrollTo({
    top: 0,
    behavior: "smooth" // アニメーション不要なら削除
  });
}

function finish() {
  document.querySelectorAll(".step").forEach(el => {
    el.classList.add("hidden");
  });

  document.getElementById("finish").classList.remove("hidden");
}

function restart() {
  document.getElementById("finish").classList.add("hidden");
  document.getElementById("step1").classList.remove("hidden");

}




function MPI_show(show) {
  const top = document.getElementById("MPI_topImg");
  const bottom = document.getElementById("MPI_bottomImg");

  if (!top || !bottom) return;

  if (show) {
    top.classList.remove("MPI_hidden");
    bottom.classList.remove("MPI_hidden");
  } else {
    top.classList.add("MPI_hidden");
    bottom.classList.add("MPI_hidden");
  }
// }

// function MPI_show(show) {
  document.getElementById("MPI_bottomImg")
    .classList.toggle("MPI_hidden", !show);
}

function toggleImage(button) {
    const img = button.nextElementSibling;

    img.style.display =
        img.style.display === "none"
            ? "block"
            : "none";
}