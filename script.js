// For future interactivity (like theme toggle, schedule popup, etc.)
console.log("Navbar loaded successfully!");
// Countdown Timer to September 20, 2025 15:00
function startCountdown() {
  const targetDate = new Date("September 20, 2025 15:00:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").innerText = days;
      document.getElementById("hours").innerText = hours;
      document.getElementById("minutes").innerText = minutes;
      document.getElementById("seconds").innerText = seconds;
    } else {
      document.querySelector(".countdown").innerHTML = "<p>Event Started!</p>";
    }
  }, 1000);
}

startCountdown();
