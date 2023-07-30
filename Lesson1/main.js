//Normal function
function log(name){
    console.log(name);
}

//Arrow function
let name1 = "sus";
const name2 = "sus";
const arr1 = [1,2,3,4]
//const obj1 = {
    //name:'dick',
    //age:15,
//}

//obj1.gender = 'gay'
//console.log(obj1)
//arr1.push(5)
//name1 = "sussy"

//const log1 = (name) => {
    //console.log(name)
//}
//log1("test")

function sum(a, b) {
    return a*b;
}
//console.log(sum(2,3));

const sum1=(a,b) => a*b;

//console.log(sum1(2,3))

const logname = () => ({
    name: "Minhgay"
})
//console.log(logname())


//Spread Operator
const numlist = [1,2,3,4,5,6];
const numlist2 = [7,8,9,10];
const clonenumlist = [...numlist, ...numlist2];

//console.log(clonenumlist);

const s1 = {
    name:"sus",
    age:'18',
}

//const s2 = {...s1}
//s2.gender = 'male';

//console.log(s1, s2)

//map
const arrmap1 =[1,2,3,4,5];
const arrmap2 = [];
arrmap1.forEach((item, index) => {
    arrmap2.push(item*2);
});

//console.log(arrmap2);

const arrmap3 = arrmap1.map((item) => item*2);

//console.log(arrmap3)

const arrmap4 = [
    {fname:"sussy", lname:"gay"},
    {fname:"sus", lname:"amogus"},
];

const arrmap5 = arrmap4.map((item) => {
    return `${item.fname} ${item.lname}`
});

console.log(arrmap5)