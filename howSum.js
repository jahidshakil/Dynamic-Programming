// write a function that takes a targetSum and an array of numbers as arguments. The function should return an array containing any combination of elements that add up to exactly the targetSum. I fthere is no combination that adds up to this targetSum , then return null.

const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers,memo);
        if (remainderResult !== null) {
            memo[targetSum] = [...remainderResult, num];
            return memo[targetSum];
        }
    }
     memo[targetSum] = null;
    return null;
};

console.log(howSum(7, [2, 3]));
console.log(howSum(14, [2, 3,4]));
console.log(howSum(11, [3,1,2]));
console.log(howSum(8, [4, 3]));
console.log(howSum(3000, [7, 14]));


// bruteforce
// targetSum=m
// numbers.length = n
//time= O(n^m*m)
//space O(m)

//memoized
//time: O(n*m^2)
//space: O(m^2)