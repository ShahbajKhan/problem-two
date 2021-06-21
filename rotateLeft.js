const rotateLeft = (n, d, arr)=>{
    if(d<0){
        console.log("Enter positive value for d");
        return;
    }
    if(!arr.length){
        console.log("Array is empty")
        return;
    }
    for (let i = 0; i < d; i++) {
        let firstElement = arr.shift();
        arr.push(firstElement);      
    }
    console.log(arr);
    return arr;
}
// rotateLeft(5, 4, [1,2,3,4,5]);