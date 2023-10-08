
  let m = [1, 2, 3, 4, 5, 6, "hh", "9", 80, 100];
  let squaredArr = [];
  
  for (let i = 0; i < m.length; i++) {
    if (typeof m[i] === "number") {
      squaredArr.push(m[i] * m[i]);
    }
  }
  
  console.log(squaredArr);