document.addEventListener("DOMContentLoaded", function () {
  const greeting = document.querySelector(".greeting");
  greeting.classList.add("fadeIn");

  // Tính toán thời gian còn lại đến Tết
  function countdown() {
    const tetDate = new Date("2024-02-10T00:00:00"); // Ngày Tết dương lịch
    const now = new Date();

    const timeDiff = tetDate - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
      "Còn " +
      days +
      " ngày " +
      hours +
      " giờ " +
      minutes +
      " phút " +
      seconds +
      " giây đến Tết!";

    // Kiểm tra nếu countdown đạt 0:00 thì bắn pháo hoa

    if (timeDiff <= 0) {
      firework();
    }
  }

  // Cập nhật thời gian còn lại mỗi giây
  setInterval(countdown, 1000);

  // Bắn pháo hoa
  function firework() {
    const fireworksContainer = document.getElementById("fireworks-container");
    const colors = [
      "#ffcc00",
      "#ff0000",
      "#00ff00",
      "#0000ff",
      "#ffff00",
      "#ff00ff",
      "#00ffff",
    ]; // Mảng các màu sắc

    for (let i = 0; i < 10; i++) {
      const firework = document.createElement("div");
      firework.classList.add("firework");
      firework.style.left = Math.random() * window.innerWidth + "px";
      firework.style.top = Math.random() * window.innerHeight + "px";
      firework.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)]; // Random color from colors array
      fireworksContainer.appendChild(firework);

      const sparks = Math.floor(Math.random() * 100) + 50; // Số lượng tia pháo hoa
      for (let j = 0; j < sparks; j++) {
        const spark = document.createElement("div");
        spark.classList.add("spark");
        spark.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)]; // Random color from colors array
        spark.style.left = Math.random() * 10 + "px"; // Random vị trí theo trục x
        spark.style.top = Math.random() * 10 + "px"; // Random vị trí theo trục y
        firework.appendChild(spark);
      }
    }
  }
});
