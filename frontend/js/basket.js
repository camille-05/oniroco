// recuperation des cartes produits selectionees

let productsItems = JSON.parse(localStorage.getItem("commande"));


// creation d'une boucle pour recuperer les données 

let l = productsItems.length;


// mise en tableau pour traiter les données 

var totalOrder = [];


for (let i = 0; i < l ; i++){
     
    let tableauLigne = document.createElement('tr');
    firstTable.appendChild(tableauLigne);
    tableauLigne.innerHTML = productsItems[i].name;
    tableauLigne.classList.add('ligne');

   

    let tableauCell = document.createElement('td');
    tableauLigne.appendChild(tableauCell);
    tableauCell.innerHTML = productsItems[i].price + "    "  + " € " + 'color' + '  ' +  productsItems[i].colors;
    tableauCell.classList.add('cell'); 

    //creation d'un bouton pour supprimer le panier
    
    let deleteButton = tableauCell;
    var createButton = document.createElement('button');
    
    deleteButton.appendChild(createButton);

    createButton.classList.add('btnSupp');
    createButton.innerHTML = ('supprimer panier');
    let deleteItems = document.querySelector('.btnSupp');

    

   
    
    var operation = productsItems[i].price;
    
    totalOrder.push(operation);


    
};



    let deleteItems = document.querySelectorAll('.btnSupp');
    let tableauLigne = document.querySelectorAll('tr');
    
    
       

        


    for (let j = 0; j < deleteItems.length; j++){

   
        deleteItems[j].addEventListener('click',(e)=>{
            e.preventDefault();

           let id_select = productsItems[j];           
           let el = tableauLigne[j];

           
//suppression du html
           el.remove('Supprimer du panier');
  //suppression du local storage
          

          localStorage.removeItem( "commande");
           console.log(id_select);

             
           });
        };
          

       
   //creation de la div pour le total 

    let total = document.createElement('div');
    let basket = document.querySelector('#basket');
    total.classList.add('totaux')
    
    basket.appendChild(total);

// fonction qui calcule le total 
    const reducer = (accumlator, valeurs) => accumlator + valeurs;
   
   
    var finalOrder = totalOrder.reduce(reducer);

  

total.innerHTML = 'Total de vote commande = ' + '€' + finalOrder ;


// recuperer les informations du formulaire

const btnFormulaire = document.querySelector('#button_confirmation')



btnFormulaire.addEventListener('click',(e)=>{
e.preventDefault();

//recuperation des valeurs du formulaires

const contact = {
    firstName : document.querySelector("#prenom").value,
    lastName : document.querySelector("#nom").value,
    address : document.querySelector("#adresse").value,
    city : document.querySelector("#ville").value,
    email : document.querySelector("#email").value
} 
// tester le prenom


function prenomControl(){ 
    const lePrenom = contact.firstName;
    
    if(/^[A-Za-z]{3,20}$/.test(lePrenom)){
        return true;
    }else{
        alert("les chiffres et symboles ne sont pas autorisés \n le prénom doit etre compris entre 3 et 20 caractères");
        return false;
}
};
// tester le nom
function nomControl(){
const leNom = contact.lastName;
if(/^[A-Za-z]{3,20}$/.test(leNom)){
    return true;
}else{
    alert("les chiffres et symboles ne sont pas autorisés \n le nom doit etre compris entre 3 et 20 caractères");
    return false;
}
};

// tester l'adresse e-mail

function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(contact.email))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
};

// tester l'adresse

function villeControl(){
    const laVille = contact.city;
    if(/^[A-Za-z]{5,50}$/.test(laVille)){
        return (true)
    }else{
        alert("la ville doit contenir des lettres ");
        return (false)
    }
    };

    function adresseControl(){
        const adresse = contact.address;
        if(/^([0-9]*) ?([a-zA-Z,\. ]*) ?([a-zA-Z]*)$/.test(adresse)){
            return (true)
        }else{
            alert("l'adresse doit contenir des lettres et des chiffres ");
            return (false)
        }
        };
    



// gestion de validation du formulaire

if (prenomControl() && nomControl() && ValidateEmail() &&villeControl() &&adresseControl() ){
    // mettre contact dans le local storage
localStorage.setItem('contact' , JSON.stringify(contact));
} else{
    alert("veuillez remplir le formulaire");
};

const formInformation = {
    firstName : prenom.value,
    lastName : nom.value,
    address : adresse.value,
    city : ville.value,
    email : email.value
} 


fetch('http://localhost:3000/api/teddies')
                .then(response => response.json())
                    .then(data => {
                       
                       // recuperation des ids selectionnés
                       let j = productsItems.length;
                    
                        for (let i = 0; i < j ; i++){
                       var id_product  =  productsItems[i].id
                       
                         //envoyer les ids dans le local storage
                         

                         var products = JSON.parse(localStorage.getItem("products"));
                       
                         if(products){
                             products.push(id_product);
                             localStorage.setItem("products", JSON.stringify(products));
         
                           } 
                            else{
                             products = [];
                             products.push(id_product);
                             localStorage.setItem("products", JSON.stringify(products));
                            };
                        };

                       
  // mettre le formulaire et les produits selectionnés
                var sendServer = {contact , products};
                    

console.log(sendServer);
   
//renvoi des informations au serveur

let urlCommand = 'http://localhost:3000/api/teddies/order';



const confirmation = {

    method: 'POST',
    body: JSON.stringify(sendServer),
    headers :{
        "Content-Type" : "application/json",
        
    }
    
};

fetch (urlCommand , confirmation)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
     //  localStorage.removeItems("commande");
        var orderId = data.orderId;
     let confirmationUrl = 'confirmation.html?' + orderId ;
     console.log(confirmationUrl);
     
     localStorage.setItem('orderID' , JSON.stringify(orderId));
        
        window.location.href = confirmationUrl ;
        
     
       localStorage.setItem('finalOrder' ,JSON.stringify(finalOrder)); 
});
});
});

