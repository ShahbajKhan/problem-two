const rotateLeft = (n, d, arr)=>{
    
    for (let i = 0; i < d; i++) {
        let firstElement = arr.shift();
        arr.push(firstElement);      
    }
    console.log(arr);
}
rotateLeft(5, 4, [1,2,3,4,5]);