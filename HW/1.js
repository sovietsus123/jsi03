//bai1
const arr1 = [1, 'a', 5, '2', true];
// In ra những phần tử là number trong arr1 [1, 5]
// Gợi ý: sử dụng forEach hoặc filter (tự tìm hiểu trước)
arr1.forEach((item) => {
    if (+item) {
        return console.log(+item);
    }
});
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
test = []
const product=products.map((item) => {
    test.push(item.price * item.quantity)
    return item.quantity + " chiếc " + item.name + " giá " + item.price * item.quantity + "$";
});
console.log(product)
console.log("=> " + "Tổng hoá đơn: " + (test[0] + test[1] + test[2] + test[3]))
//bai3
let students = [
	{ name: 'Alex', score: 6 },
	{ name: 'John', score: 8 },
	{ name: 'Peter', score: 4 },
];
// Sử dụng forEach để in ra màn hình tên của người được điểm cao nhất
// John
test2 = []
students.forEach((item) => {
    return test2.push(item.score)
});
console.log(Math.max.apply(Math, test2));

