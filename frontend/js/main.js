fetch('http://localhost:3000/api/teddies')
.then(response => response.json())
    .then(data => {
  
       
        let l = data.length; // obtenir tout nos elements dans la boucle for


        for(let i = 0; i < l; i++){
     
let container = document.getElementById('container');   

//ajout de liens vers Id produits
let a = document.createElement('a');
container.appendChild(a);
a.href = 'products' + '.html?' + data[i]._id ;
a.classList.add('text-decoration-none');


// création de nos cartes
let card =  document.createElement('div');
    a.appendChild(card);
//création d'une classe card
        card.classList.add("card");
             
//ajout du titre dans un h3
let cardHeader = document.createElement('h3');
card.appendChild(cardHeader);
         cardHeader.innerHTML = data[i]['name'];
//ajout des images 
         let cardImg = document.createElement('img');
         card.appendChild(cardImg);
         cardImg.src = data[i].imageUrl;
//ajout des couleurs
            let colors = document.createElement('p');
            card.appendChild(colors);
            colors.innerHTML = data[i]['colors'];
//ajout des descriptions
            let description = document.createElement('p');
            card.appendChild(description);
            description.innerHTML = data[i]['description'];
//ajout du prix
            let price = document.createElement('p');
            card.appendChild(price);
            price.innerHTML = '€' + data[i]['price']/100; 

//ajout de classe pour les paragraphes
            colors.classList.add("colors");
            description.classList.add('description');
            price.classList.add('price');

       
        };
    });

   