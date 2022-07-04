const bestSum = (targetSum, nums, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    let shortestCombination = null;

    for (let num of nums) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, nums,memo);
        if (remainderCombination !== null) {
            const combination = [...remainderCombination, num];
            if (shortestCombination===null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }
    memo[targetSum] = shortestCombination;
    return shortestCombination;
}


console.log(bestSum(7, [5, 3, 4, 7]))
console.log(bestSum(11, [5, 3, 4, 7]))
console.log(bestSum(11, [5, 3, 4, 7]))

console.log(bestSum(100,[5,3,40,7]))

