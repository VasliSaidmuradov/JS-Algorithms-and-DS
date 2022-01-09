export const bubbleSort = arr => {
  const res = []

  for (let i = arr.length - 1; i > 0; i--) {
    let noSwap = true

    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr)
        noSwap = false
      }
    }

    if (noSwap) break
  }

  return arr
}

export const swap = (a, b, arr) => {
  [arr[a], arr[b]] = [arr[b], arr[a]]

  return arr
}

// const nums = [9,3,0,8,7,2,1,6,4,5,15,10,14,11,13,12]
// const nums = [2,1,3,4,5]
// const nums = Array.from({ length: 25000 }, () => +Math.random().toFixed(5))

// const bubbleT1 = Date.now()
// console.log(bubbleSort(nums))
// const bubbleT2 = Date.now()
// console.log('BUBBLE SORT: ', bubbleT2 - bubbleT1)
