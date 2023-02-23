const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('.gallery');

const makeImagesItemMarkup = ({ url, alt }) =>
  `<li class="gallery__item"><img class="gallery__image" src=${url} alt=${alt} width='400'></li>`;
const makeImagesItem = images.map(makeImagesItemMarkup).join('');

galleryRef.insertAdjacentHTML('afterbegin', makeImagesItem);

// -----------createElement-----------
// const makeImagesItemMarkup = ({ url, alt }) => {
//   const imageItemEl = document.createElement("li");
//   imageItemEl.classList.add("gallery__item");
//   const imageEl = document.createElement("img");
//   imageEl.classList.add("gallery__image");
//   imageEl.src = url;
//   imageEl.alt = alt;
//   imageEl.width = 400;
//   imageItemEl.append(imageEl);
//   return imageItemEl;
// };
// const elements = images.map(makeImagesItemMarkup);
// const galleryRef = document.querySelector(".gallery");
// galleryRef.append(...elements);
