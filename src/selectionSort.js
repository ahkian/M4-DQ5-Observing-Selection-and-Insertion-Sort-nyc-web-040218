function selectionSort(arr) {
 let arrLength = arr.length
 sortedArr = [];
 while (sortedArr.length < arrLength) {
   sortedArr.push(Math.min(...arr))
   arr.splice(arr.indexOf(Math.min(...arr)), 1)
 }
 return sortedArr
}

arr = [3, 1, 5, 7, 2]

selectionSort(arr);
