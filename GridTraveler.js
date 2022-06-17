// How many ways are there to travel a grid from top left to bottom right corner of m*n grid? You re only allowed to move bottom and right.

const GridTraveler = (m, n, memo = {}) => {
    const key = m + "," + n;
    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    memo[key] = GridTraveler(m - 1, n, memo) + GridTraveler(m, n - 1, memo);
    return memo[key];
    
}


console.log(GridTraveler(1, 1))
console.log(GridTraveler(2,2))
console.log(GridTraveler(3, 3))
console.log(GridTraveler(4,4))
console.log(GridTraveler(5,5))
console.log(GridTraveler(20, 20))
console.log(GridTraveler(30,30))
console.log(GridTraveler(40, 40))
console.log(GridTraveler(50,50))



