function changeImage(img) {
    img.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 1000)}`;
}
