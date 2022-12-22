// Array med alle knapper


// FOR loop som looper igennem alle klapper i den Array
// - Ind ei for loop skal vi tilføje et klik event på alle knapper. Udskiv "event" i console.log


let faqs = document.querySelectorAll(".faq-item header");
let i;

for (let i = 0; i < faqs.length; i++) {
    faqs[i].addEventListener("click", function() {
        this.parentNode.classList.toggle("active");

      });
}