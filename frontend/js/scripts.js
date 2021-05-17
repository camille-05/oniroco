apiUrl =  'http://localhost:3000'
 
fetch('https://ab-p5-api.herokuapp.com/api/teddies')
.then(response => response.json())
    .then(data => {
  


function title ()
           
                let divTitle = document.querySelector('#firstTitle');
                let firstTitle = data[i].name;
                divTitle.innerHTML = firstTitle;
            let divTitle1 = document.querySelector('#secondTitle');
            const secondTitle = data[i].name;
            divTitle1.innerHTML = secondTitle;
    let divTitle2 = document.querySelector('#thirdTitle');
    const thirdTitle = data[2].name;
    divTitle2.innerHTML = thirdTitle;
    
        let divTitle3 = document.querySelector('#fourthTitle');
        const fourthTitle = data[3].name;
        divTitle3.innerHTML = fourthTitle;
let divTitle4 = document.querySelector('#fifthTitle');
const fifthTitle = data[4].name;
divTitle4.innerHTML = fifthTitle;
}    

    title('firstTitle');
    console.log(firstTitle);
    {
        let l = data.lenght;
for (let i = 0; i < l;  i++ ){
   var div = document.setAttribute("class", "card");
   div.innerHTML = "card"
   element.appendChild(div);
    }
    

}); 
document.querySelector('#firstImg').src = data[0].imageUrl;



let img = document.createElement('img');
         img.src = data[i]['imageUrl'];
         img.css = 'width:100%';
         img.css = 'height:100%';


         let cardBody = document.createElement('div');
         cardBody.classList.add("card-body");



let cardHeader = document.createElement('h3');
         cardHeader.innerText = data[i]['name'];

         

         let cardText = document.createElement('p');
         cardText.classList.add("card-text");
         cardText.innerText = data[i]['description'];
         console.log('card-text');

         

         let ctaBlock = document.createElement('div');
         ctaBlock.classList.add("d-flex", "justify-content-between", "align-items-center");

         let btnGroup = document.createElement('div');
         btnGroup.classList.add("btn-group");

         let btn = document.createElement('button');
         btn.classList.add("btn", "btn-sm", "btn-outline-secondary");
         btn.innerText = "Buy";
         let price = document.createElement('small');
         price.classList.add("text-muted");
         price.innerText = '€' + data[i]['price']/100;

         ctaBlock.appendChild(btnGroup);
         btnGroup.appendChild(btn);
         ctaBlock.appendChild(price);
 fetch('http://localhost:3000/api/teddies')

         card.appendChild(img);
         card.appendChild(cardBody)

         // get the HTML element where I want to include my card
         let container = document.getElementById("row");
         
         container.appendChild(col);
         document.querySelector('img').src = data[i].imageUrl;
         console.log('card.appendChild');

    }
   
});