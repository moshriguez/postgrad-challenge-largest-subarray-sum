function largestSubarraySum(array){
    let localMax = 0
    let globalMax = 0
    for (let i=0; i<array.length; i++) {
        localMax = Math.max(array[i], array[i] + localMax)
        if (localMax > globalMax) {
            globalMax = localMax
        }
    }
    return globalMax
}

