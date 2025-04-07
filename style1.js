
let productList ;
let container=document.querySelector(".card-cont")
let elements='';
let req ;
let data;
let searchInput=document.getElementById("searchInput");
let searchCont=document.getElementById("searchCont");

async function recData() {
    req =await fetch("https://fakestoreapi.com/products");
    if(req.ok){
        data =await req.json();
        //   console.log(data)
    }   
}
async function showData() {
    productList=data;
    console.log(productList)
    productList.forEach(i => {
        elements+=`
        <div class="card">
            <img src="${i.image}" alt="Product Image">
            <br>
            <div class="card-catt">${i.category}</div>
            <br>
            <div class="card-ratee">our costumer rating : <span>${i.rating.rate} </span></div>
            <br>
            <div class="card-titlee"> ${i.title}</div>
            <div class="card-pricee">${i.price} L.E</div>
        </div>`
    });
    container.innerHTML=elements;
}

async function all(){
    await recData();
    showData();
}
all();



function searchProduct() {
    let value = searchInput.value.toLowerCase().trim();
    let filteredElements = '';
    
    if (!value) {
        showData();
        return;
    }
    const filteredProducts = productList.filter(product => 
        product.category.toLowerCase().includes(value)
    );

    if (filteredProducts.length === 0) {
        container.innerHTML = '<div class="no-results">No products found matching your search</div>';
        return;
    }

    filteredProducts.forEach(product => {
        filteredElements += `
        <div class="card">
            <img src="${product.image}" alt="Product Image">
            <div class="card-catt">${product.category}</div>
            <div class="card-ratee">our customer rating: <span>${product.rating.rate}</span></div>
            <div class="card-titlee">${product.title}</div>
            <div class="card-pricee">${product.price} L.E</div>
        </div>`;
    });

    container.innerHTML = filteredElements;
}





