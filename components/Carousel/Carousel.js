/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const carouselComponent= function () {
  
  const carouselDiv = document.createElement('div');
  carouselDiv.classList.add('carousel');
  
  const leftButton = document.createElement('div');
  leftButton.classList.add('left-button');
  leftButton.textContent = " < "
  
  const mountainsImg = document.createElement('img');
  mountainsImg.src = './assets/carousel/mountains.jpeg';

  const computerImg = document.createElement('img');
  computerImg.src = './assets/carousel/computer.jpeg';
  
  const treesImg = document.createElement('img');
  treesImg.src = './assets/carousel/trees.jpeg';

  const turntableImg = document.createElement('img');
  turntableImg.src = './assets/carousel/turntable.jpeg';

  const rightButton = document.createElement('div');
  rightButton.classList.add('right-button');
  rightButton.textContent = " > " 



  carouselDiv.appendChild(leftButton);
  carouselDiv.appendChild(mountainsImg);
  carouselDiv.appendChild(computerImg);
  carouselDiv.appendChild(treesImg);
  carouselDiv.appendChild(turntableImg);
  carouselDiv.appendChild(rightButton);
  
  return carouselDiv;
}
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.appendChild(carouselComponent());

const images = document.querySelectorAll('img');
imagesArray = Array.from(images);

const rightButton = document.querySelector('.right-button');
const leftButton = document.querySelector('.left-button');


  
  window.addEventListener('load', event => {
    imagesArray[0].style.display="block";
  })
    let i=1;
    
    if (i<3) {
    rightButton.addEventListener('click', event => {
    imagesArray[i].style.display= "block";
    imagesArray[i-1].style.display = "none";
    i++;
    if (i>3){
      i=0;
     
    }
    
    })
    leftButton.addEventListener('click', event => {
    imagesArray[i-1].style.display = "block";
    imagesArray[i].style.display = "none";
    i--;
    if(i<1){
      i=0
    }
    })
    
    } 
    
    
      
    
  