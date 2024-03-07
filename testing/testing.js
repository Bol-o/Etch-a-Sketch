function tripleIt(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 0){
            sum += arr[i]
        }
    }
    console.log(sum * 3)
}
let woo =  [2,4,6,1,7,2]
tripleIt(woo)