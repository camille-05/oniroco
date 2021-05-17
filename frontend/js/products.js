let url = window.location.search 
console.log(url);
//retirer le ? de l'url
let idProduct = url.slice(1);
let urlProduct = 'http://localhost:3000/api/teddies/' + idProduct;


fetch(urlProduct)
.then(response => response.json())
    .then(data => {
       
   
    // création de nos cartes
    let card =  document.createElement('div');
        container.appendChild(card);
    //création d'une classe card
            card.classList.add("card");
            
            
    //ajout du titre dans un h3
    let cardHeader = document.createElement('h3');
    card.appendChild(cardHeader);
             cardHeader.innerHTML = data['name'];
             cardName = data['name'];
    //ajout des images 
             let cardImg = document.createElement('img');
             card.appendChild(cardImg);
             cardImg.src = data.imageUrl;
             let img = data.imageUrl;
    //ajout des couleurs
                let colors = document.createElement('div');
                card.appendChild(colors);
                colors.innerHTML = data['colors'];
                let colors_first = data['colors'];
    //ajout des descriptions
                let description = document.createElement('p');
                card.appendChild(description);
                description.innerHTML = data['description'];
                let information = data['description'];
    //ajout du prix
                let price = document.createElement('p');
                card.appendChild(price);
               
                price.innerHTML = '€' + data['price']/100; 
                let totalPrice = data['price']/100; 
   
    //ajout de classe pour les paragraphes
                colors.classList.add("dataColors");
                description.classList.add('description');
                price.classList.add('price');

   
    //rendre le bouton cliquable
                let purchase =  document.createElement('a');
                container.appendChild(purchase);
                purchase.href = 'panier' + '.html?';
               
     //création d'une classe purchase
                purchase.classList.add("purchase");
   
                //ajout d'un bouton commander
                let button = document.createElement('btn');
                purchase.appendChild(button);
                button.innerHTML = 'ajouter au panier';
                button.classList.add('button');

               //demande de fetch + boucle pour récupérer seulement les couleurs
        
                fetch(urlProduct)
                .then(response => response.json())
                    .then(data => {
  
                        let l = data.colors.length;
                        let dataColors = document.querySelector('.dataColors');
                    let changeColors = document.createElement('select');
                    dataColors.appendChild(changeColors);
                    changeColors.classList.add('changeColors');
                    changeColors.innerHTML = 'Choisissez votre couleur';
                    console.log(changeColors);
                   
                   
                    
                       
                for (let i = 0; i < l ; i++){
                    
                   let allColors = data.colors[i];
                    let menu = document.createElement('option');
                    menu.value = allColors;
                   
                    changeColors.appendChild(menu);
                    menu.innerHTML = allColors;                  
     };
    
    });
   
    
   
     //choix de la couleur à renvoyer au panier
            
     let sendColors = document.querySelector('.purchase');
             console.log(sendColors);
             sendColors.addEventListener('click',(event)=>{
                 event.preventDefault();
                 let choice =  document.querySelector(".changeColors");
     let valueChoice = choice.value;
     console.log(valueChoice);

     const commande = {
    
        id : idProduct,
        name: cardName,
        colors : valueChoice,
        price : totalPrice,
    
    };
   

     
                     // recuperation des valeurs du produit

      //convertir les données Json en js       
      let productsItems = JSON.parse(localStorage.getItem("commande"));
      
//creation de fonction pour factoriser le code 

const pushOnLocalStorage = () =>{
    productsItems.push(commande);
    localStorage.setItem("commande", JSON.stringify(productsItems));

};
      // condition si le localStorage est vide ou s'il est deja avec des produits
      
      if(productsItems){
        pushOnLocalStorage();
      }
      else{
          productsItems = [];
          pushOnLocalStorage();

      };
            });
}); 

       
         



        
    