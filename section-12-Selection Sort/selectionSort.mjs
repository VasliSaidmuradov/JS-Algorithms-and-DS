export const swap = (a, b, arr) => {
  [arr[a], arr[b]] = [arr[b], arr[a]]

  return arr
}

export const selectionSort = arr => {
  
  for (let i = 0; i < arr.length; i++) {
    let lowest = i

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j
      }
    }

    if (i !== lowest) swap(i, lowest, arr)
  }
  
  return arr
}

// const nums = [9,3,0,8,7,2,1,6,4,5,15,10,14,11,13,12]
// const nums = [2,1,3,4,5]
// const nums = Array.from({ length: 25000 }, () => +Math.random().toFixed(5))

// const t1 = Date.now()
// console.log(selectionSort(nums))
// const t2 = Date.now()
// console.log('SELECTION SORT: ', t2 - t1)