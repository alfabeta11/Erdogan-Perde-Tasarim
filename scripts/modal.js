const modalClose_btn = document.getElementById('modal_close');
const modal = document.getElementById('modal');
const modalImg = document.querySelector('#imageShown');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const pictures = document.querySelectorAll('.photo img');

// Get an array of all images's source.
let images = Array.from(pictures);

let imagesSources = images.map(item => item['src']);

// This is the index of the current image source;
let currentIndex = 0;

// This function shows any image in the modal;
function showImage() {

  // when called img with src[currentIndex] is showed;  
  modalImg.src = imagesSources[currentIndex];
}

// When the prev button is clicked, show previous image;
prev.addEventListener('click', () => {
  currentIndex == 0
    ? currentIndex = imagesSources.length - 1
    : currentIndex = currentIndex - 1;
  showImage();
});

// When the next button is clicked, show next image;
next.addEventListener('click', () => {
  currentIndex == imagesSources.length - 1
    ? currentIndex = 0
    : currentIndex = currentIndex + 1;
  showImage();
});

// Show the image when clicked on;
pictures.forEach(item => {
  item.addEventListener('click', (e) => {
    currentIndex = imagesSources.indexOf(e.target.src);
    modal.style.display = 'block';
    showImage();
  })  
})

// When close btn clicked make the modal disappear;
modalClose_btn.addEventListener('click', () => {
  modal.style.display = 'none';
})

// Written by Alfa;