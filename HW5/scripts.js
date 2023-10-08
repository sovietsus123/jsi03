let product = [

];

const productElement = document.getElementById("products");

const renderProduct = () => {
    productElement.innerHTML = "";
    product.forEach((item)=>{
        const div = document.createElement('div');
        div.classList.add('product');

        const img = document.createElement('img');
        img.src = item.image;

        const productName = document.createElement('h3');
        productName.textContent = item.title;

        const price = document.createElement('h3');
        price.textContent = "Price: " + item.price;

        div.appendChild(img);
        div.appendChild(productName);
        div.appendChild(price);
        productElement.appendChild(div);
    });
}

const getproduct = () => {
    fetch("https://fakestoreapi.com/products").then((response)=>{
        return response.json();
    }).then((data)=>{
        product = data;
        
        renderProduct();
    })
}

getproduct();
