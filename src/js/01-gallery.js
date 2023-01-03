import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const cardMarkup = galleryItemsTumb(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function galleryItemsTumb(galleryItems) {
  return galleryItems
    .map((item) => {
      return `
      <div class="gallery__item">
     <a class="gallery__link" href="${item.original}">
       <img
         class="gallery__image"
         src="${item.preview}"
         data-source="${item.original}"
         alt="${item.description}"
       />
     </a>
   </div>`;
    })
    .join("");
}

function onGalleryContainerClick(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  galleryContainer.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
}
