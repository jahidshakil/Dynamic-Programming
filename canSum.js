// for given array and a target sum  return true if target generation is possible or else return false.
//(7, [5, 3, 4, 7]) true
// (7,[2,6,4]) false

const canSum = (targetSum, numbers, memo = {}) => {

    if (targetSum in memo) return memo[targetSum];

    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
        if (canSum(remainder, numbers, memo) === true) {
            memo[targetSum] = true;
            return true;
        }  
    }
    memo[targetSum] = false;
    return false;
    
}

console.log(canSum(7, [2, 3])) //true
console.log(canSum(7, [5,7, 3])) //true
console.log(canSum(7, [2, 4])) //false
console.log(canSum(8, [2, 3,5])) //true
console.log(canSum(300, [7, 14])) //false
console.log(canSum(30000, [7, 14])) //false

