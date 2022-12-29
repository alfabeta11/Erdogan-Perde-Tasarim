let body = document.querySelector('body');
let menu_Btn = document.querySelector("#menuBtn");
let navDropdown = document.querySelector('.dropdown-content');
let navBar = document.querySelector('.nav-container');
let socials = document.querySelector('.socials')
let close_Btn = document.querySelector('#closeBtn');
let contactUs_Btn = document.getElementById('bize_ulasin')


// This function shows/hide an item when called;

function showItem(item, bool) {
  if (bool) {
    item.classList.add('open');
  } else {
    item.classList.remove('open');
  }
}

menu_Btn.addEventListener('click', () => {
  showItem(navDropdown, true);
  showItem(navBar, true);
})

close_Btn.addEventListener('click', () => {
  showItem(navDropdown, false);
  showItem(navBar, false);
})
contactUs_Btn.addEventListener('click', () => {
  socials.classList.toggle('open')
})

// Generating a random color for the gallery-items border each time we hover;

let galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    let num = Math.floor(Math.random() * (255 ** 3));
    let hex = num.toString(16); 
    
    item.style.borderColor = `#${hex}`;
    
  })
  item.addEventListener('mouseleave', () => {
    item.style.borderColor = "rgba(0, 0, 0, 0)";
  })
})
