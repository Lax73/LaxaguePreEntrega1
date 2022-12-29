const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})

/* Variables */ 

const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product'); 

/* Lista de contenedores de productos */ 

const productList = document.querySelector('.container-items');

/* variables de arreglo de producto */ 

let allProduct = []

const valorTotal = document.querySelector('.total-pagar')

const countProducts = document.querySelector('#contador-productos')



productList.addEventListener('click', e => {

    if(e.target.classList.contains('btn-add-cart')){
        const product = e.target.parentElement

        const infoProduct = { 
            quantity: 1,
            tittle: product.querySelector('h2').textContent,
            price: product.querySelector('p').textContent,
        }

        const exits = allProduct.some(product => product.tittle === infoProduct.tittle)

        if(exits){
            const products = allProduct.map(product => {
                if(product.tittle === infoProduct.tittle){
                    product.quantity++;
                    return product; 
                }
                else {
                    return product
                }
                allProduct = [...products];
            })           
        } 
        else {
            allProduct = [...allProduct, infoProduct]
        }

        
        showHTML()
    }

})

/* funcion html */  

const showHTML = () => {
    

    rowProduct.innerHTML = '';

    let total = 0;
    let totalOfProducts = 0;


    allProduct.forEach(product => {
        const containerProduct = document.createElement('div')
        containerProduct.classList.add('cart-product')
        containerProduct.innerHTML = 
        `
        <div class="info-cart-product">
            <span class="cantidad-producto-carrito">${product.quantity}</span>
            <p class="titulo-producto-carrito">${product.tittle} </p>
            <span class="precio-producto-carrito">${product.price} </span>
        </div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="icon-close"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
        `

        rowProduct.append (containerProduct)

        total = total + parseInt(product.quantity * product.price.slice(1))
        totalOfProducts = totalOfProducts + product.quantity; 
    })

    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;


}