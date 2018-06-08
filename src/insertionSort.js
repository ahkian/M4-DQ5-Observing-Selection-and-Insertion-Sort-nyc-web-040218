function insertionSort(arr) {
 counter = 0
 while (counter < arr.length) {
   for(let i = 1; i < arr.length; i++) {
     if (arr[i] < arr[i-1]) {
       var b = arr[i];
       arr[i] = arr[i-1];
       arr[i-1] = b;
     }
   }
   counter++
 }
 return arr
}

arr = [1, 3, 5, 2, 6, 9, 1, 15, 10, 9]

insertionSort(arr)
