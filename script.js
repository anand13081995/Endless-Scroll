const count = 10;
const key = 'TbqTYlJRurb9hk5w_MJ9Wx71LSpHGg9fexfzVUQnW0Y';
const url = `https://api.unsplash.com/photos/random?client_id=${key}&count=${count}`;

let fetching = false;

async function getPhotos() {
    if (fetching) return;

    fetching = true;

    const response = await fetch(url);
    const data = await response.json();

    const box = document.querySelector(".box");
    data.forEach((photo) => {
        const img = document.createElement("img");
        img.src = photo.urls.regular;
        img.style.width = "200px";
        img.style.height = "200px";
        box.appendChild(img);
    });

    fetching = false;
}

getPhotos();

window.addEventListener('scroll', () => {
    if (!fetching && window.scrollY + window.innerHeight >= document.body.offsetHeight) {
        getPhotos();
    }
});
