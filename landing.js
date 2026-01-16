var images = [
    "Cosplay.jpg",
    "Cosplay2.jpg",
    "Cosplay3.jpg",
    "Cosplay4.jpg",
    "Cosplay5.jpg",
];

var num = 0;

function next(){
    var slider = document.getElementById("slider");
    num++;
    if(num >= images.length){
        num = 0;
    }

    slider.src = images[num];
}

function prev(){
    var slider = document.getElementById("slider");
    num--;
    if(num < length){
        num = images.length - 1;
    }

    slider.src = images[num];
}