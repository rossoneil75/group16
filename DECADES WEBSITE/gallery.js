/*A little bit of help from YouTube videos, tutorials and various websites (w3schools and more)*/
const galleries = [
    {
        title: "HISTORY",
        images: [
            {src:"prince-charles-lady-diana-wedding-photo.png", caption:"LADY DIANA AND PRINCE CHARLES WEDDING"},
            {src:"1980 moscow olympics.jpg", caption:"1980'S MOSCOW OLYMPICS"},
            {src:"John Lennon.jpg", caption:"JOHN LENNON'S ASSASSINATION"},
            {src:"Tiananmen_Square_protests_1989.jpg", caption:"THE TIANANMEN PROTESTS"},
            {src:"1983 Coup.jpg", caption:"THE 1983 COUP LEADERS"}
        ]
    },
    {
        title: "MUSIC",
        images: [
            {src:"mtv1981.jpg", caption:"MTV LAUNCH (1981)"},
            {src:"michealjackson.jpg", caption:"MICHEAL JACKSON'S THRILLER ALBUM COVER"},
            {src:"liveaidconcert.jpg", caption:"CROWD AT THE LIVE AID CONCERT 1985"},
            {src:"madonna.jpg", caption:"MADONNA IN THE EARLY 80s"},
            {src:"hiphopstars.jpg", caption:"HIPHOP STARS IN 1980S"}
        ]
    },
    {
        title: "FASHION",
        images: [
            {src:"powerdressing.jpg", caption:"POWER DRESSING STYLE IN THE 80s"},
            {src:"legwarmers.jpg", caption:"LEGWARMERS USED IN THE 80s"},
            {src:"acidwashjeans.jpg", caption:"GROUP OF GUYS IN ACIDWASH JEANS"},
            {src:"neonfashion.jpg", caption:"POPULAR NEON FASHION IN THE 80s"},
        ]
    },
    {
        title: "POLITICS",
        images: [
            {src:"ronald.jpg", caption:"PRESIDENT RONALD REAGAN DURING HIS PRESIDENCY IN 1981"},
            {src:"magaret.jpg", caption:"MAGARET THATCHER IN LATE 80s"},
            {src:"berlinwall.jpg", caption:"FALLEN BERLIN WALL"},
            {src:"iranaffair.jpg", caption:"WORLD LEADERS DURING THE IRAN-CONTRA AFFAIR"},
        ]
    },
    {
        title: "TECH",
        images: [
            {src:"ibmcomputer.jpg", caption:"FIRST IBM COMPUTER INVENTED"},
            {src:"compactdisk.png", caption:" A COMPACT DISK"},
            {src:"applemacintosh.jpg", caption:"APPLE MACINTOSH INVENTED IN 1984"},
            {src:"sonywalkman.jpg", caption:"SONY WALKMAN"},
        ]
    },
    {
        title: "FOOD",
        images: [
            {src:"frenchonionsoup.jpg", caption:"FRENCH ONION SOUP"},
            {src:"Leancuisine.jpg", caption:"LEAN CUISINE"},
            {src:"doritos.jpg", caption:"COOL RANCH DORITOS"},
        ]
    },
    {
        title: "SPORT",
        images: ["car1.jpg", "car2.jpg", "car3.jpg"]
    },
    {
        title: "POP CULTURE",
        images: ["car1.jpg", "car2.jpg", "car3.jpg"]
    },
];

let currentGallery = 0;
let currentIndex = 0;

function openGallery(index) {
    currentGallery = index;
    currentIndex = 0;
    document.getElementById("popup").style.display = "flex";
    updatePopup();
}

function closeGallery() {
    document.getElementById("popup").style.display = "none";
}

function nextImg() {
    const gallery = galleries[currentGallery];
    currentIndex = (currentIndex + 1) % gallery.images.length;
    updatePopup();
}

function prevImg() {
    const gallery = galleries[currentGallery];
    currentIndex = (currentIndex - 1 + gallery.images.length) % gallery.images.length;
    updatePopup();
}

function updatePopup() {
    const gallery = galleries[currentGallery];
    const imageObj = gallery.images[currentIndex];

    document.getElementById("popup-img").src = imageObj.src;
    document.getElementById("popup-caption").textContent = gallery.title;
    document.getElementById("photo-caption").textContent = imageObj.caption;
}

window.onload = function () {
    const images = document.querySelectorAll("img");

    images.forEach((img) => {
        img.style.width = "400px";
        img.style.height = "auto";
    });
};



function Home() {
    // Redirecting to the home page
    window.location.href = "1980's Decade.html";
}
