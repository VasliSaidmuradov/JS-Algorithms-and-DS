const getDigit = (num, place) => {
  return Math.floor(Math.abs(num) / (10**place)) % 10
}

const digitCount = num => {
  return !num ? 1: Math.floor(Math.log10(Math.abs(num))) + 1
}

const getMostDigit = arr => {
  return Math.max(digitCount(Math.max(...arr)), digitCount(Math.min(...arr)))
}

export const radixSort = nums => {
  const maxDig = getMostDigit(nums)

  for (let i = 0; i < maxDig; i++) {
    const bucket = Array.from({ length: 10 }, () => [])

    for (let j = 0; j < nums.length; j++) {
      bucket[getDigit(nums[j], i)].push(nums[j])
    }

    nums = bucket.flat()
    // nums = [].concat(...bucket)
  }

  return nums
}




// const nums = [9,3,0,8,7,2,1,6,4,5,15,10,14,11,13,12]
const nums = [32,141,693,8,75,5]
// const nums = Array.from({ length: 25000 }, () => +Math.random().toFixed(5))

// const t1 = Date.now()
// console.log(insertionSort(nums))
// const t2 = Date.now()
// console.log('INSERTION SORT: ', t2 - t1)

console.log(radixSort(nums));