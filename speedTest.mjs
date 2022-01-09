import { bubbleSort } from "./section-11-Bubble Sort/bubbleSort.mjs"
import { selectionSort } from "./section-12-Selection Sort/selectionSort.mjs"
import { insertionSort } from "./section-13-Insertion Sort/insertionSort.mjs"
import { mergeSort } from "./section-15-Merge Sort/mergeSort.mjs"
import { quickSort } from "./section-16-Quick Sort/quickSort.mjs"
import { radixSort } from "./section-17-Radix Sort/radixSort.mjs"


// const nums = [9,3,0,8,7,2,1,6,4,5,15,10,14,11,13,12]
// const nums = [2,1,3,4,5]

const nums = Array.from({ length: 50000 }, () => Math.floor(Math.random() * 100))


// const bubbleT1 = Date.now()
// console.log(bubbleSort([...nums]))
// const bubbleT2 = Date.now()
// console.log('BUBBLE SORT: ', bubbleT2 - bubbleT1)


// const selectionT1 = Date.now()
// console.log(selectionSort([...nums]))
// const selectionT2 = Date.now()
// console.log('SELECTION SORT: ', selectionT2 - selectionT1)

// const insertionT1 = Date.now()
// console.log(insertionSort([...nums]))
// const insertionT2 = Date.now()
// console.log('INSERTION SORT: ', insertionT2 - insertionT1)

// const mergeT1 = Date.now()
// console.log(mergeSort([...nums]))
// const mergeT2 = Date.now()
// console.log('MERGE SORT: ', mergeT2 - mergeT1)

const quickT1 = Date.now()
console.log(quickSort([...nums]))
const quickT2 = Date.now()
console.log('QUICK SORT: ', quickT2 - quickT1)

const radixT1 = Date.now()
console.log(radixSort([...nums]))
const radixT2 = Date.now()
console.log('RADIX SORT: ', radixT2 - radixT1)