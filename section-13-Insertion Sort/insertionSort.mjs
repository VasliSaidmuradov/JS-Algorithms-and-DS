export const insertionSort = arr => {

  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i]
    let j = i - 1

    while (j >= 0 && arr[j] > cur) {
      arr[j + 1] = arr[j]
      j--
    }

    arr[j + 1] = cur
  }

  return arr
}


// const nums = [9,3,0,8,7,2,1,6,4,5,15,10,14,11,13,12]
// const nums = [2,1,3,4,5]
// const nums = Array.from({ length: 25000 }, () => +Math.random().toFixed(5))

// const t1 = Date.now()
// console.log(insertionSort(nums))
// const t2 = Date.now()
// console.log('INSERTION SORT: ', t2 - t1)