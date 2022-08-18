import { galleryItems } from './gallery-items.js';

//todo__________________________________________________________
/*
Выполняй это задание в файлах 01-gallery.html и 01-gallery.js.
Разбей его на несколько подзадач:*/

//! 1.
/*Создание и рендер разметки по массиву данных galleryItems и 
предоставленному шаблону элемента галереи.

//!2.
Реализация делегирования на div.gallery и получение url 
большого изображения.

//!3.
Подключение скрипта и стилей библиотеки модального окна 
basicLightbox. Используй CDN сервис jsdelivr и добавь в проект 
ссылки на минифицированные (.min) файлы библиотеки.

//!4.
Открытие модального окна по клику на элементе галереи. 
Для этого ознакомься с документацией и примерами.

//!5.
Замена значения атрибута src элемента <img> в модальном окне 
перед открытием. Используй готовую разметку модального окна с 
изображением из примеров библиотеки basicLightbox.
*/
//todo__________________________________________________________

const mainGalleryBox = document.querySelector('.gallery');
mainGalleryBox.addEventListener('click', onClick);

function onClick(e) {
e.preventDefault();

if (e.target.nodeName !== 'IMG') {
    return;
}
const instance = basicLightbox.create(
    `<img width="800" height="600" src="${e.target.dataset.source}" />`
);
instance.show();
mainGalleryBox.addEventListener('keydown', onEscClose);
function onEscClose(e) {
    if (e.code === 'Escape') {
        instance.close();
        requestAnimationFrame.gallery.removeEventListener('keydown', onEscClose);
    }
}
  // console.log("🚀 ~ e", e.target.nodeName)  что бы узнать имя на чем происходит событие
}

const images = galleryItems.map(({ preview, original, description }) => {
const createdImage = `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img 
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`;
  //   console.log('🚀 ~ createdImage', createdImage);
return createdImage;
});

mainGalleryBox.insertAdjacentHTML('beforeend', images.join(''));

// console.log(galleryItems);
