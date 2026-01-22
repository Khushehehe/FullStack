const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-theme");
    toggleBtn.textContent = "☀️ Light Mode";
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-theme");

    if (body.classList.contains("light-theme")) {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "☀️ Light Mode";
    } else {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "🌙 Dark Mode";
    }
});
