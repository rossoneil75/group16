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
            {src:"michealjackson.jpg", caption:"MICHEAL JACKSON THRILLER ALBUM COVER"},
            {src:"liveaidconcert.jpg", caption:"CROWD AT THE LIVE AID CONCERT 1985"},
            {src:"madonna.jpg", caption:"MADONNA IN THE EARLY 80s"},
            {src:"hiphopstars.jpg", caption:"HIPHOP STARS IN 1980S"}
        ]
    },
    {
        title: "FASHION",
        images: ["car1.jpg", "car2.jpg", "car3.jpg"]
    },
    {
        title: "POLITICS",
        images: ["car1.jpg", "car2.jpg", "car3.jpg"]
    },
    {
        title: "TECH",
        images: ["car1.jpg", "car2.jpg", "car3.jpg"]
    },
    {
        title: "FOOD",
        images: ["car1.jpg", "car2.jpg", "car3.jpg"]
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


function Home() {
    // Redirecting to the home page
    window.location.href = "1980's Decade.html";
}
