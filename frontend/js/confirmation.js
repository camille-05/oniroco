let id = document.querySelector("#commande_id");

console.log(id);

 let order =  localStorage.getItem('orderID');
 console.log(order);

 id.innerHTML = order;

 let finalOrder =  localStorage.getItem('finalOrder');
 let price = document.querySelector('#finalOrder');

 price.innerHTML = finalOrder;





