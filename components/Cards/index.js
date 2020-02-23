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
const dataArray = Object.values(response.data.articles);

const cardsContainer = document.querySelector('.cards-container');
for(let i=0; i< 4 ; i++){
    for(let j=0; j< dataArray[j].length; j++){
        cardsContainer.appendChild(cardComponent(dataArray[i][j]))
}};
   
})
.catch((err) => {
    console.log(err);
})