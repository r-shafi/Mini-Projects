const images = [
  'https://preview.redd.it/29ea98ykaaw51.jpg?width=3800&format=pjpg&auto=webp&s=5e1c12befd2adeafa49a843839cf5c9f8d338035',
  'https://preview.redd.it/bgrvbaykaaw51.jpg?width=3722&format=pjpg&auto=webp&s=5da05f107475434b75e528569bfc219c9ab2dcbd',
  'https://i.redd.it/6uk0svdalcw51.jpg',
  'https://preview.redd.it/9nonnwykaaw51.jpg?width=960&crop=smart&auto=webp&s=d0bd36460463265f3cf7e2e41b81e37b606296f9',
  'https://i.redd.it/bs8p823osaw51.jpg',
  'https://i.redd.it/ik879y79ybw51.jpg',
];

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const img = document.querySelector('.img');

let index = 0;

img.src = images[0];

prev.addEventListener('click', () => {
  index <= 0 ? (index = images.length - 1) : index--;
  img.src = images[index];
});

next.addEventListener('click', () => {
  index === images.length - 1 ? (index = 0) : index++;
  img.src = images[index];
});

//! Second type of Gallery

const galleryImage = document.querySelector('.galImg');
const galleryGrid = document.querySelector('.imgGrid');

galleryImage.src = images[0];

for (const img of images) {
  galleryGrid.innerHTML += `<img src="${img}" />`;
}

galleryGrid
  .querySelectorAll('img')
  .forEach((pic) =>
    pic.addEventListener('click', (e) => (galleryImage.src = e.target.src))
  );
