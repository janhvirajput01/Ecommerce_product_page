const heroImg = document.querySelector(".product-img");
const galleryHeroImg = document.querySelector(".product-hero");
const prev = document.querySelector(".previous");
const next = document.querySelector(".next");
const mobNext = document.querySelector(".mobNext");
const mobPrev = document.querySelector(".mobPrev");

const close = document.querySelector(".btnClose");
const thumbnails = document.querySelectorAll(".thumb-gallery .pic img");
const mainThumbnails = document.querySelectorAll(".thumbnail");
const plusBtn = document.getElementById("btnPlus");
const minusBtn = document.getElementById("btnMinus");
const counter = document.querySelector(".counter");
const addBtn = document.querySelector(".btn");
const cartProduct = document.querySelector(".cart-product-container");
const overlay = document.querySelector(".overlay");
const empty = document.querySelector(".empty");
const count = document.querySelector(".count");
const cartCount = document.querySelector(".cart-count");
const total = document.querySelector(".total-amount");
const cart = document.querySelector(".cart-img");
const cartModal = document.querySelector(".cart-modal");
const deleteBtn = document.querySelector("#btnDelete");
const menuBtn = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".menuClose");
const menuModal = document.querySelector(".menu-modal");
//variables
console.log(menuBtn);
let productCounterValue = 1;
let imageCount = 0;
let listItem = 0;
let price = 125.0;
let temp = 1;
heroImg.addEventListener("click", handleHeroClick);
prev.addEventListener("click", handlePrev);
next.addEventListener("click", handleNext);
mobPrev.addEventListener("click", previous);
mobNext.addEventListener("click", Next);
minusBtn.addEventListener("click", clickMinus);
plusBtn.addEventListener("click", clickPlus);
addBtn.addEventListener("click", addtoList);
cart.addEventListener("click", cartClick);
deleteBtn.addEventListener("click", deleteItems);

menuBtn.addEventListener("click", () => {
  menuModal.classList.remove("hidden");
});
console.log(mobNext);
closeMenu.addEventListener("click", () => {
  menuModal.classList.add("hidden");
});
close.addEventListener("click", () => {
  overlay.classList.remove("open");
});

thumbnails.forEach((img) => {
  img.addEventListener("click", thumbnailClick);
});

mainThumbnails.forEach((img) => {
  img.addEventListener("click", mainThumbnailClick);
});

function handleHeroClick(e) {
  overlay.classList.add("open");
}
function handlePrev() {
  imageCount--;
  if (imageCount < 1) {
    imageCount = thumbnails.length;
  }
  thumbnails.forEach((img) => {
    img.classList.remove("active");
  });
  //set active thumbnail
  thumbnails[imageCount - 1].classList.add("active");
  galleryHeroImg.src = `./images/image-product-${imageCount}.jpg`;
}
function previous() {
  imageCount--;

  if (imageCount < 1) {
    imageCount = 4;
  }
  console.log(imageCount);
  heroImg.src = `./images/image-product-${imageCount}.jpg`;
}
function handleNext() {
  imageCount++;

  if (imageCount > thumbnails.length) {
    imageCount = 1;
  }
  thumbnails.forEach((img) => {
    img.classList.remove("active");
  });
  //set active thumbnail
  thumbnails[imageCount - 1].classList.add("active");
  galleryHeroImg.src = `./images/image-product-${imageCount}.jpg`;
}
function Next() {
  imageCount++;

  if (imageCount > 4) {
    imageCount = 1;
  }
  heroImg.src = `./images/image-product-${imageCount}.jpg`;
}

function thumbnailClick(event) {
  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove("active");
  });

  event.target.classList.add("active");
  galleryHeroImg.src = event.target.src.replace("-thumbnail", "");
}

function mainThumbnailClick(event) {
  mainThumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove("active");
  });
  event.target.classList.add("active");
  heroImg.src = event.target.src.replace("-thumbnail", "");
}

function clickPlus() {
  setvalue(+1);
}
function clickMinus() {
  setvalue(-1);
}
function setvalue(value) {
  if (productCounterValue + value > 0) {
    productCounterValue += value;

    counter.innerHTML = productCounterValue;
  }
}

function addtoList() {
  if (listItem === 0) {
    //that means cart is empty
    listItem += productCounterValue - 1;
    cartCount.classList.remove("hidden");
    empty.classList.add("hidden");
    cartProduct.classList.remove("hidden");
    listItem++;
    count.textContent = listItem;
    total.innerHTML = `$${(price * listItem).toFixed(2)}`;
  } else {
    //cart is not empty

    listItem += productCounterValue;
    count.textContent = listItem;

    total.innerHTML = `$${(price * listItem).toFixed(2)}`;
  }
  productCounterValue = 1;
  cartCount.innerHTML = listItem;
}

function cartClick() {
  cartModal.classList.toggle("hidden");
}

function deleteItems() {
  if (listItem === 1) {
    cartProduct.classList.add("hidden");
    empty.classList.remove("hidden");
    cartCount.classList.add("hidden");
  } else {
    listItem--;
    count.textContent = listItem;
    cartCount--;
    total.innerHTML = `$${(price * listItem).toFixed(2)}`;
  }
}
