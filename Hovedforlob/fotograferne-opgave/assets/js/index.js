const btn = document.getElementById("toggle");

btn.addEventListener("click", (event) => {
    event.target.parentNode.parentNode.classList.toggle("active");
});
