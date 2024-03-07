function addOne(num) {
    return num + 1;
  }
  const arr = [1, 3, 3, 3, 5];
  const newArr = []

  function goThrough(array) {
    for (let i = 0; i < array.length; i++){
      newArr.push(addOne(array[i]))
        
        
    }
    for (let i = 0; i < newArr.length; i++){
      arr.push(newArr[i])
      arr.shift()
    }
    //console.log(newArr)
    
  }

  goThrough(arr)
  console.log(newArr)
  console.log(arr)