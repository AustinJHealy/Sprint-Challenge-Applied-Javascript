// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
cardComponent = (cardData) => {
    

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const headlineDiv = document.createElement('div');
        headlineDiv.classList.add('headline');

        const authorDiv = document.createElement('div');
        authorDiv.classList.add('author');

        const imgContainerDiv = document.createElement('div');
        imgContainerDiv.classList.add('img-container');

        const authorImage = document.createElement('img');

        const authorSpan = document.createElement('span');

        
        cardDiv.appendChild(headlineDiv);
        cardDiv.appendChild(authorDiv);
        imgContainerDiv.appendChild(authorImage);
        authorDiv.appendChild(imgContainerDiv);
        authorDiv.appendChild(authorSpan);
        
        
        
        headlineDiv.textContent = cardData.headline;
    
        authorImage.src = cardData.authorPhoto;

        authorSpan.textContent = "By: " + cardData.authorName;
    
       
      

        return cardDiv;
    }
     


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response) => {
console.log(response.data.articles);


const javascript= response.data.articles.javascript;
const bootstrap = response.data.articles.bootstrap;
const technology = response.data.articles.technology;
const jquery = response.data.articles.jquery;
const node = response.data.articles.node;
console.log(javascript)

const cardsContainer = document.querySelector('.cards-container');
  
 javascript.forEach(item => {
     cardsContainer.appendChild(cardComponent(item)); 
    });
bootstrap.forEach(item => {
    cardsContainer.appendChild(cardComponent(item));
    });
technology.forEach(item => {
     cardsContainer.appendChild(cardComponent(item)); 
    });
jquery.forEach(item => {
     cardsContainer.appendChild(cardComponent(item)); 
    });
node.forEach(item => {
     cardsContainer.appendChild(cardComponent(item)); 
    });


})
.catch((err) => {
    console.log(err);
})