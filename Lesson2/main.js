//const arrNum = [5, 3, 0, -2, -1, 4]

//const positiveNum =arrNum.filter((item) => {
    //if(item > 0){
        //return true;
    //}
    //return false;
//})
//const positiveNum2 = arrNum.filter((item) => item > 0);
//console.log(positiveNum2)

const products = [
	{ id: 1, name: 'Iphone 13', price: 1000, quantity: 10 },
	{ id: 2, name: 'Macbook pro M2', price: 2000, quantity: 5 },
	{ id: 3, name: 'Màn hình Samsung 23 inch', price: 1500, quantity: 2 },
	{ id: 4,name: 'Airpod 2', price: 100, quantity: 20 },
]
const sp = products.filter((item) => item.quantity >= 10);
//console.log(sp)

const sp2 = products.filter((item) => item.id !== 3).map((item) => item.name);
//const productname = sp2.map((item) => item.name);

//console.log(sp2)
const checkProduct = (productName) => {
    const filterProduct = products.filter(product => product.name === productName);
    if(filterProduct.length ===0){
        console.log("khong ton tai")
    }else {
        console.log("ton tai")
    }
}
checkProduct("Airpod 2")

const checkProduct2 = (productName) => {
    const findProduct = products.find((product) => product.name === productName);
    if (findProduct) {
        console.log("ton tai")
    } else {
        console.log("khong ton tai")
    }

}
checkProduct2("Airpod 2")

const checkProduct3 = (productName) => {
    const findProductindex = products.findIndex((product) => product.name === productName);
    if (findProductindex === -1){
        console.log("kho ton tai")
    } else {
            console.log("ton tai")
        }
    }

checkProduct3("Airpod s2")