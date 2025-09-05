function toggleAccountBox() {
  const box = document.getElementById("accountBox");
  box.style.display = box.style.display === "block" ? "none" : "block";
}

window.addEventListener("click", function (e) {
  const box = document.getElementById("accountBox");
  const accBtn = document.querySelector(".account-section");

  if (!accBtn.contains(e.target) && !box.contains(e.target)) {
    box.style.display = "none";
  }
});


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.getElementById('offer-banners');
const dotsContainer = document.getElementById('dots');

function updateSlider(){
  slider.style.transform = `translateX(-${currentSlide * 100}%)` ;
  updateDots();
}

function nextSlide(){
  if (currentSlide < slides.length - 1) {
     currentSlide++;
  }
  else{
    currentSlide = 0;
  }
  updateSlider();
}

function prevSlide(){
  if (currentSlide > 0) {
    currentSlide--;
  }
  else{
    currentSlide = slides.length - 1;
  }
  updateSlider();
}

function createDots(){
  slides.forEach((_, index) =>{
    const dot = document.createElement('button');
    dot.addEventListener('click', () => {
      currentSlide = index;
      updateSlider();
    });
     dotsContainer.appendChild(dot);
  });
}

function updateDots(){
  const dots = dotsContainer.querySelectorAll('button');
  dots.forEach((dot,index) => {
    dot.classList.toggle('active', index==currentSlide);
  });
}

createDots();
updateSlider();