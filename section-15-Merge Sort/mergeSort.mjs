// Implement merge two sorted arrays
export const merge = (arr1, arr2) => {
  let i = 0
  let j = 0

  const res = []

  while(i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i])
      i++
    } else {
      res.push(arr2[j])
      j++
    }
  }

  while(i < arr1.length) {
    res.push(arr1[i])
    i++
  }

  while(j < arr2.length) {
    res.push(arr2[j])
    j++
  }

  return res
}

// const arr1 = [1,5,7], arr2 = [0,2,3,4,6,8,9]
// console.log(merge(arr1, arr2))

export const mergeSort = arr => {
  if (arr.length <= 1) return arr

  let mid = Math.floor(arr.length / 2)

  // left
  const left = mergeSort(arr.slice(0, mid))

  // right
  const right = mergeSort(arr.slice(mid))

  return merge(left, right)
}

// const nums = [9,3,0,8,7,2,1,6,4,5,15,10,14,11,13,12]
// const nums = [2,1,3,4,5]
// const nums = Array.from({ length: 25000 }, () => +Math.random().toFixed(5))

// const mergeT1 = Date.now()
// console.log(mergeSort(nums))
// const mergeT2 = Date.now()
// console.log('MERGE SORT: ', mergeT2 - mergeT1)