const images = [
  { preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg', original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg', description: 'Hokkaido Flower' },
  { preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg', original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg', description: 'Container Haulage Freight' },
  { preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg', original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg', description: 'Aerial Beach View' },
  { preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg', original: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg', description: 'Flower Blooms' },
  { preview: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg', original: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg', description: 'Alpine Mountains' },
  { preview: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg', original: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg', description: 'Mountain Lake Sailing' },
  { preview: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg', original: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg', description: 'Alpine Spring Meadows' },
  { preview: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg', original: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg', description: 'Nature Landscape' },
  { preview: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg', original: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg', description: 'Lighthouse Coast Sea' }
];


const galleryContainer = document.querySelector('.gallery');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const closeButton = document.querySelector('.close');

let currentIndex = 0;

function createGalleryItem({ preview, original, description }, index) {
  const li = document.createElement('li');
  li.classList.add('gallery-item');
  li.innerHTML = `
    <a class="gallery-link" href="${original}">
      <img class="gallery-image" src="${preview}" alt="${description}" data-source="${original}" data-index="${index}">
    </a>
  `;
  return li;
}

function renderGallery() {
  const items = images.map((image, index) => createGalleryItem(image, index));
  galleryContainer.append(...items);
}

function openModal(index) {
  currentIndex = index;
  modalImage.src = images[currentIndex].original;
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  modalImage.src = images[currentIndex].original;
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImage.src = images[currentIndex].original;
}

galleryContainer.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.classList.contains('gallery-image')) {
    const index = Number(event.target.dataset.index);
    openModal(index);
  }
});

closeButton.addEventListener('click', closeModal);
nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);

renderGallery();
