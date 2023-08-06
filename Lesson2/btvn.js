//chữa bai1
const arr1 = [1, 'a', 5, '2', true];
// In ra những phần tử là number trong arr1 [1, 5]
// Gợi ý: sử dụng forEach hoặc filter (tự tìm hiểu trước)
arr2=[]
arr1.forEach((item) => {
    if (typeof item === 'number') {
        arr2.push(item)
    }
});
console.log(arr2)

//chữa bài2
const products = [
	{ name: 'Iphone 13', price: 1000, quantity: 10 },
	{ name: 'Macbook pro M2', price: 2000, quantity: 5 },
	{ name: 'Màn hình Samsung 23 inch', price: 1500, quantity: 2 },
	{ name: 'Airpod 2', price: 100, quantity: 20 },
]

/* console.log ra màn hình theo định dạng như sau:
	1000 chiếc Iphone 13 giá 10000$
	...
	100 Airpod 2 giá 2000$
	=> Tổng hoá đơn: Tổng_tiền_4_sản_phẩm
*/
let totalbill = 0;
products.forEach((product) => {
    console.log(`${product.quantity} chiếc ${product.name} giá ${product.price}`)
    totalbill += product.price * product.quantity
})

console.log(`=> Tổng hóa đơn: ${totalbill}`);

//chữa bai3
let students = [
	{ name: 'Alex', score: 6 },
	{ name: 'John', score: 8 },
	{ name: 'Peter', score: 4 },
];
// Sử dụng forEach để in ra màn hình tên của người được điểm cao nhất
// John
let hs = 0;
let hsn = '';
students.forEach((students)=> {
    if (students.score > hs) {
        hs = students.score;
        hsn = students.name;
    }
});

console.log(hsn)