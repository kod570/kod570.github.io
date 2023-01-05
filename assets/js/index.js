
let faqs = document.querySelectorAll(".faq-item header button");
let i;

for (let i = 0; i < faqs.length; i++) {
    faqs[i].addEventListener("click", function() {
        this.parentNode.parentNode.classList.toggle("active");

      });
}