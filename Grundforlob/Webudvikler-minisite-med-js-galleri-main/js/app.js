let large = document.getElementById("large");

function Showbigpicture(pic){
    large.src = pic;
}

const imgs = [
    "https://picsum.photos/seed/picsum1/1920/1080",
    "https://picsum.photos/seed/picsum2/1920/1080",
    "https://picsum.photos/seed/picsum3/1920/1080",
    "https://picsum.photos/seed/picsum4/1920/1080",
    "https://picsum.photos/seed/picsum5/1920/1080",
    "https://picsum.photos/seed/picsum6/1920/1080",
    "https://picsum.photos/seed/picsum7/1920/1080",
    "https://picsum.photos/seed/picsum8/1920/1080",
    "https://picsum.photos/seed/picsum9/1920/1080",
    "https://picsum.photos/seed/picsum10/1920/1080",
    "https://picsum.photos/seed/picsum11/1920/1080",
];

const imgtags = document.querySelectorAll("#grid-container img");

for (let i = 0; i < imgtags.length; i++) {
    imgtags[i].src = imgs[i];

    imgtags[i].addEventListener("click", (event) => {
        
         Showbigpicture(event.target.src); 
    })
}