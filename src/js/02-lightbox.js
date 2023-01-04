import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const cardMarkup = galleryItemsTumb(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardMarkup);

function galleryItemsTumb(galleryItems) {
  return galleryItems
    .map((item) => {
      return `
     <a class="gallery__link" href="${item.original}">
       <img
         class="gallery__image"
         src="${item.preview}"
         alt="${item.description}"
       />
     </a>
   `;
    })
    .join("");
}

galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }
}
let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
