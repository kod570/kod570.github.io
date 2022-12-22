function Showbig(pic){
    large1.src = pic;
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
    "https://picsum.photos/seed/picsum12/1920/1080",
    "https://picsum.photos/seed/picsum13/1920/1080",
    "https://picsum.photos/seed/picsum14/1920/1080",
    "https://picsum.photos/seed/picsum15/1920/1080",
    "https://picsum.photos/seed/picsum16/1920/1080",
    "https://picsum.photos/seed/picsum17/1920/1080",
    "https://picsum.photos/seed/picsum18/1920/1080",
    "https://picsum.photos/seed/picsum19/1920/1080",
    "https://picsum.photos/seed/picsum20/1920/1080",
    "https://picsum.photos/seed/picsum21/1920/1080",
    "https://picsum.photos/seed/picsum22/1920/1080",
    "https://picsum.photos/seed/picsum23/1920/1080",
    "https://picsum.photos/seed/picsum24/1920/1080",
    "https://picsum.photos/seed/picsum25/1920/1080",
];

const imgtags = document.querySelectorAll("#grid-gallery1 img");


for (let i = 0; i < imgtags.length; i++) {
    imgtags[i].src = imgs[i];

    imgtags[i].addEventListener("click", (event) => {
        
         Showbig(event.target.src); 

    })
}