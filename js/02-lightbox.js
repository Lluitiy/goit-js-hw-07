import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);
const galleryList = document.querySelector('.gallery');

const galleryImages = galleryItems.map(({ preview, original, description }) => {
   
  const createdImage = `<li>
    <a class="gallery__item" href="${original}">
    <img 
    class="gallery__image"
    src="${preview}"
    alt="${description}"
    />
    </a>
    </li>`;
    return createdImage;
});

galleryList.insertAdjacentHTML('beforeend', galleryImages.join(''))

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'outside',
  animationSpeed: 250,
  disableRightClick: true,
  disableScroll: true,
  scrollZoom: false,
});

