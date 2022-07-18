// write  a function canConstruct(target, wordBank) that accepts a target string and an array of string and returns a number  indecating in how many ways the 'target' can be constructed by conctatenating elements of the 'wordBank' array.

const countConstruct = (target, wordBank, memo = {}) => {
    if (target === '') return 1;
    if (target in memo) return memo[target];
    let count = 0;
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const numWays = countConstruct(suffix, wordBank,memo);
            count += numWays;
        }
    }
    memo[target] = count;
    return count;
}

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le']));
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeea', ['e', 'eeee', 'eeeee', 'ee']));
