console.log('cart.js connected');
 

const carrito = document.getElementById('cart-items');
const table = document.getElementById('table');
const empty = document.getElementById('empty');
const showItems = (items) => {
    console.log(items);
    
    if(carrito){
    
    carrito.innerHTML = null;
    table.hidden = false;
    empty.hidden = true;

   if(items.length){
       items.forEach(({quantity, product}) => {
           carrito.innerHTML += `
           <tr>
           <td>
             <img src="/images/${product.images[0].file}" style="width:100px" alt="image">
           </td>
           <td>
             ${product.name}
           </td>
           <td>
             <div class="d-flex">
               <button class="btn btn-sm btn-danger" onclick="removeQuantity(${product.id})"><i class="fas fa-minus"></i></button>
               <input type="text" style="border: none; width:20px; text-align: center;" value="${+quantity}">
               <button class="btn btn-sm btn-success" onclick="addCartItem(${product.id})"><i class="fas fa-plus"></i></button>
             </div>
           </td>
           <td>
             ${(+product.price - (+product.price * +product.discount ) / 100).toFixed(0)}
           </td>
           <td>
           ${((+product.price - (+product.price * +product.discount ) / 100) * +quantity).toFixed(0)}
           </td>
          
         </tr>
           `
       });
   }else{
    table.hidden = true;
    empty.hidden = false;
   }

}
}

const getCart = async () => {

    try {

        let response = await fetch('/api/cart');
        let result = await response.json();

        if(result.ok){
            const {items} = result.data;
            showItems(items)
        }        
        
    } catch (error) {
        console.error
    }

}



 const addCartItem = async (id) => {
   try {

       let response = await fetch('/api/cart', {
           method : 'POST',
           body : JSON.stringify({
               id
           }),
           headers : {
               "Content-Type" : "application/json"
           }
       });

       let result = await response.json();

       if(result.ok){
           const {items} = result.data;
           showItems(items)
       }
       
   } catch (error) {
       console.error(error);
   }
   
};

const removeQuantity = async (id) => {
   try {

       let response = await fetch('/api/cart/' + id, {
           method : 'DELETE'
       });

       let result = await response.json();

       if(result.ok) {
           showItems( result.data.items)
       }

       
   } catch (error) {
       console.error(error);
   }
}

