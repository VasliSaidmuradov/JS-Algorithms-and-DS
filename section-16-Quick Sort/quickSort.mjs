export const pivot = (arr, start = 0, end) => {
  const pivot = arr[start]
  let swapIdx = start
  
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIdx++
      swap(i, swapIdx, arr)
    }
  }

  swap(start, swapIdx, arr)

  return swapIdx
}

export const swap = (a, b, arr) => {
  [arr[a], arr[b]] = [arr[b], arr[a]]

  return arr
}

export const quickSort = (nums, left = 0, right = nums.length - 1) => {
  if (left < right) {
    const pivotIdx = pivot(nums, left, right)

    // left
    quickSort(nums, left, pivotIdx - 1)

    // right
    quickSort(nums, pivotIdx + 1, right)
  }

  return nums
}

// const nums = [9,3,0,8,7,2,1,6,4,5,15,10,14,11,13,12]
// const nums = [2,1,3,4,5]
// const nums = Array.from({ length: 25000 }, () => +Math.random().toFixed(5))

// const quickT1 = Date.now()
// console.log(quickSort(nums))
// const quickT2 = Date.now()
// console.log('QUICK SORT: ', quickT2 - quickT1)
